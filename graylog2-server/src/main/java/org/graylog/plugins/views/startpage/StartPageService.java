/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */
package org.graylog.plugins.views.startpage;

import com.google.common.eventbus.EventBus;
import org.graylog.plugins.views.search.permissions.SearchUser;
import org.graylog.plugins.views.search.views.ViewDTO;
import org.graylog.plugins.views.startpage.favorites.FavoriteItem;
import org.graylog.plugins.views.startpage.favorites.FavoriteItemsDTO;
import org.graylog.plugins.views.startpage.favorites.FavoriteItemsService;
import org.graylog.plugins.views.startpage.lastOpened.Item;
import org.graylog.plugins.views.startpage.lastOpened.LastOpenedItem;
import org.graylog.plugins.views.startpage.lastOpened.LastOpenedItemsDTO;
import org.graylog.plugins.views.startpage.lastOpened.LastOpenedService;
import org.graylog.plugins.views.startpage.recentActivities.RecentActivity;
import org.graylog.plugins.views.startpage.recentActivities.RecentActivityDTO;
import org.graylog.plugins.views.startpage.recentActivities.RecentActivityService;
import org.graylog2.database.PaginatedList;
import org.graylog2.lookup.Catalog;
import org.graylog2.rest.models.PaginatedResponse;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class StartPageService {
    private final Catalog catalog;
    private final LastOpenedService lastOpenedService;
    private final RecentActivityService recentActivityService;
    private final FavoriteItemsService favoriteItemsService;

    private final long MAXIMUM_ITEMS = 100;

    @Inject
    public StartPageService(Catalog catalog,
                            LastOpenedService lastOpenedService,
                            RecentActivityService recentActivityService,
                            FavoriteItemsService favoriteItemsService,
                            EventBus eventBus) {
        this.catalog = catalog;
        this.lastOpenedService = lastOpenedService;
        this.recentActivityService = recentActivityService;
        this.favoriteItemsService = favoriteItemsService;
        eventBus.register(this);
    }

    protected <T> List<T> getPage(List<T> sourceList, int page, int pageSize) {
        if(pageSize <= 0 || page <= 0) {
            throw new IllegalArgumentException("invalid page size: " + pageSize);
        }

        int fromIndex = (page - 1) * pageSize;
        if(sourceList == null || sourceList.size() <= fromIndex){
            return Collections.emptyList();
        }

        // toIndex exclusive
        return sourceList.subList(fromIndex, Math.min(fromIndex + pageSize, sourceList.size()));
    }

    public PaginatedResponse<LastOpenedItem> findLastOpenedFor(final SearchUser searchUser, int page, int perPage) {
        var items = lastOpenedService
                .findForUser(searchUser)
                .orElse(LastOpenedItemsDTO.builder().userId(searchUser.getUser().getId()).build())
                .items()
                .stream()
                .map(i -> new LastOpenedItem(i.id(), catalog.getType(i.id()), catalog.getTitle(i.id()), i.timestamp()))
                .collect(Collectors.toList());
        Collections.reverse(items);

        return PaginatedResponse.create("lastOpened", new PaginatedList<>(getPage(items, page, perPage), items.size(), page, perPage));
    }

    public PaginatedResponse<FavoriteItem> findFavoriteItemsFor(final SearchUser searchUser, int page, int perPage) {
        var items = favoriteItemsService
                .findForUser(searchUser)
                .orElse(FavoriteItemsDTO.builder().userId(searchUser.getUser().getId()).build())
                .items()
                .stream()
                .map(i -> new FavoriteItem(i.id(), i.type(), catalog.getTitle(i.id())))
                .collect(Collectors.toList());
        Collections.reverse(items);

        return PaginatedResponse.create("favoriteItems", new PaginatedList<>(getPage(items, page, perPage), items.size(), page, perPage));
    }

    private String getType(RecentActivityDTO i) {
        return i.itemType() == null ? catalog.getType(i.itemId()) : i.itemType();
    }

    private String getTitle(RecentActivityDTO i) {
        return i.itemTitle() == null ? catalog.getTitle(i.itemId()) : i.itemTitle();
    }

    public PaginatedResponse<RecentActivity> findRecentActivityFor(final SearchUser searchUser, int page, int perPage) {
        final var items = recentActivityService.findRecentActivitiesFor(searchUser, page, perPage);
        final var mapped = items.stream()
                 .map(i -> new RecentActivity(i.id(),
                        i.activityType(),
                        getType(i),
                        i.itemId(),
                        getTitle(i),
                        i.userName(),
                        i.timestamp())).toList();
        return PaginatedResponse.create("recentActivity", new PaginatedList<>(mapped, items.pagination().total(), page, perPage));
    }

    public void addLastOpenedFor(final ViewDTO view, final SearchUser searchUser) {
        final var lastOpenedItems = lastOpenedService.findForUser(searchUser);
        final var item = new Item(view.id(), DateTime.now(DateTimeZone.UTC));
        if(lastOpenedItems.isPresent()) {
            var loi = lastOpenedItems.get();
            var items = loi.items().stream().filter(i -> !i.id().equals(item.id())).limit(MAXIMUM_ITEMS - 1).toList();
            loi.items().clear();
            loi.items().addAll(items);
            loi.items().add(item);
            lastOpenedService.save(loi);
        } else {
            var items = LastOpenedItemsDTO.builder()
                    .userId(searchUser.getUser().getId())
                    .items(Collections.singletonList(item))
                    .build();
            lastOpenedService.create(items, searchUser);
        }
    }

    public void addFavoriteItemFor(final String id, final SearchUser searchUser) {
        final var favoriteItems = favoriteItemsService.findForUser(searchUser);
        final var item = new org.graylog.plugins.views.startpage.favorites.Item(id, catalog.getType(id));
        if(favoriteItems.isPresent()) {
            var fi = favoriteItems.get();
            var items = fi.items().stream().filter(i -> !i.id().equals(item.id())).limit(MAXIMUM_ITEMS - 1).toList();
            fi.items().clear();
            fi.items().addAll(items);
            fi.items().add(item);
            favoriteItemsService.save(fi);
        } else {
            var items = FavoriteItemsDTO.builder().userId(searchUser.getUser().getId()).items(Collections.singletonList(item)).build();
            favoriteItemsService.create(items, searchUser);
        }
    }

    public void removeFavoriteItemFor(final String id, final SearchUser searchUser) {
        var favoriteItems = favoriteItemsService.findForUser(searchUser);
        if(favoriteItems.isPresent()) {
            favoriteItems.get().items().remove(id);
            favoriteItemsService.save(favoriteItems.get());
        }
    }
}
