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
package org.graylog.plugins.views.search.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.graylog.plugins.views.audit.ViewsAuditEventTypes;
import org.graylog.plugins.views.search.permissions.SearchUser;
import org.graylog.plugins.views.search.views.dynamicstartpage.DynamicStartPageService;
import org.graylog.plugins.views.search.views.dynamicstartpage.LastOpenedItem;
import org.graylog.plugins.views.search.views.dynamicstartpage.FavoriteItem;
import org.graylog.plugins.views.search.views.dynamicstartpage.RecentActivity;
import org.graylog2.audit.jersey.AuditEvent;
import org.graylog2.plugin.rest.PluginRestResource;
import org.graylog2.rest.models.PaginatedResponse;
import org.graylog2.shared.rest.resources.RestResource;

import javax.inject.Inject;
import javax.validation.constraints.NotEmpty;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import static org.graylog2.shared.rest.documentation.generator.Generator.CLOUD_VISIBLE;

@Api(value = "DynamicStartupPage", tags = {CLOUD_VISIBLE})
@Path("/dynamicstartpage")
@Produces(MediaType.APPLICATION_JSON)
@RequiresAuthentication
public class DynamicStartPageResource extends RestResource implements PluginRestResource {
    private final DynamicStartPageService service;

    @Inject
    public DynamicStartPageResource(DynamicStartPageService service) {
        this.service = service;
    }

    @GET
    @Path("/lastOpened")
    @ApiOperation("Get the Last Opened Items for the Dynamic Start Page for the user")
    public PaginatedResponse<LastOpenedItem> getLastOpened(@ApiParam(name = "page") @QueryParam("page") @DefaultValue("1") int page,
                                                           @ApiParam(name = "per_page") @QueryParam("per_page") @DefaultValue("5") int perPage,
                                                           @Context SearchUser searchUser) {
        return service.findLastOpenedFor(searchUser, page, perPage);
    }

    @GET
    @Path("/favoriteItems")
    @ApiOperation("Get the Favorite Items for the Dynamic Start Page for the user")
    public PaginatedResponse<FavoriteItem> getFavoriteItems(@ApiParam(name = "page") @QueryParam("page") @DefaultValue("1") int page,
                                                          @ApiParam(name = "per_page") @QueryParam("per_page") @DefaultValue("5") int perPage,
                                                          @Context SearchUser searchUser) {
        return service.findFavoriteItemsFor(searchUser, page, perPage);
    }

    @PUT
    @Path("/addToFavorites/{id}")
    @ApiOperation("Add an item for inclusion on the Dynamic Start Page for the user")
    @AuditEvent(type = ViewsAuditEventTypes.DYNAMIC_STARTUP_PAGE_ADD_FAVORITE_ITEM)
    public void addItemToFavorites(@ApiParam(name = "id", required = true) @PathParam("id") @NotEmpty String id, @Context SearchUser searchUser) {
        service.addFavoriteItemFor(id, searchUser);
    }

    @DELETE
    @Path("/removeFromFavorites/{id}")
    @ApiOperation("Remove an item from inclusion on the Dynamic Start Page for the user")
    @AuditEvent(type = ViewsAuditEventTypes.DYNAMIC_STARTUP_PAGE_REMOVE_FAVORITE_ITEM)
    public void removeItemFromFavorites(@ApiParam(name = "id", required = true) @PathParam("id") @NotEmpty String id, @Context SearchUser searchUser) {
        service.removeFavoriteItemFor(id, searchUser);
    }

    @GET
    @Path("/recentActivity")
    @ApiOperation("Get Recent Activities for the Dynamic Start Page for the user")
    public PaginatedResponse<RecentActivity> getRecentActivity(@ApiParam(name = "page") @QueryParam("page") @DefaultValue("1") int page,
                                                  @ApiParam(name = "per_page") @QueryParam("per_page") @DefaultValue("5") int perPage,
                                                  @Context SearchUser searchUser) {
        return service.findRecentActivityFor(searchUser, page, perPage);
    }
}