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
import React, { useState } from 'react';
import lodash from 'lodash';
import { PluginStore } from 'graylog-web-plugin/plugin';

import EntityShareModal from 'components/permissions/EntityShareModal';
import Routes from 'routing/Routes';
import { Link, LinkContainer } from 'components/common/router';
import {
  EntityListItem,
  IfPermitted,
  Icon,
  ShareButton,
} from 'components/common';
import {
  Button,
  DropdownButton,
  Label,
  MenuItem,
} from 'components/bootstrap';

import EventDefinitionDescription from './EventDefinitionDescription';

export type EventDefinition = {
  id: string,
  config: {
    type: string,
  },
  title: string,
  _metadata: {
    scope: string,
    revision: number,
    created_at: string,
    updated_at: string,
  } | null,
};

type Props = {
  context: {
    scheduler: {
      [id: string]: {
        is_scheduled: boolean,
      },
    },
  },
  eventDefinition: EventDefinition,
  onDisable: (eventDefinition: EventDefinition) => void,
  onEnable: (eventDefinition: EventDefinition) => void,
  onDelete: (eventDefinition: EventDefinition) => void,
  onCopy: (eventDefinition: EventDefinition) => void,
};

// NOTE: Mock method to be able to move forward with tests. Remove after API
// defined how we are getting the permissions to show and hide actions
const getPermissionsByScope = (scope: string): { edit: boolean, delete: boolean } => {
  switch (scope) {
    case 'ILLUMINATE':
      return { edit: false, delete: false };
    default:
      return { edit: true, delete: true };
  }
};

const getConditionPlugin = (type: string) => PluginStore.exports('eventDefinitionTypes')
  .find((edt) => edt.type === type);

const renderDescription = (definition, context) => {
  return <EventDefinitionDescription definition={definition} context={context} />;
};

const EventDefinitionEntry = ({
  context,
  eventDefinition,
  onDisable,
  onEnable,
  onDelete,
  onCopy,
}: Props) => {
  const [showEntityShareModal, setShowEntityShareModal] = useState(false);
  const isScheduled = lodash.get(context, `scheduler.${eventDefinition.id}.is_scheduled`, true);

  const showAction = (action: string): boolean => {
    // TODO: update this method to check for the metadata field
    const permissions = getPermissionsByScope(eventDefinition._metadata.scope);

    return permissions[action];
  };

  const handleCopy = () => {
    onCopy(eventDefinition);
  };

  const handleDelete = () => {
    onDelete(eventDefinition);
  };

  const handleDisable = () => {
    onDisable(eventDefinition);
  };

  const handleEnable = () => {
    onEnable(eventDefinition);
  };

  let toggle = <MenuItem onClick={handleDisable}>Disable</MenuItem>;

  if (!isScheduled) {
    toggle = <MenuItem onClick={handleEnable}>Enable</MenuItem>;
  }

  const actions = (
    <React.Fragment key={`actions-${eventDefinition.id}`}>
      {showAction('edit') && (
        <IfPermitted permissions={`eventdefinitions:edit:${eventDefinition.id}`}>
          <LinkContainer to={Routes.ALERTS.DEFINITIONS.edit(eventDefinition.id)}>
            <Button bsStyle="info" data-testid="edit-button">
              <Icon name="edit" /> Edit
            </Button>
          </LinkContainer>
        </IfPermitted>
      )}
      <ShareButton entityId={eventDefinition.id} entityType="event_definition" onClick={() => setShowEntityShareModal(true)} />
      <IfPermitted permissions={`eventdefinitions:delete:${eventDefinition.id}`}>
        <DropdownButton id="more-dropdown" title="More" pullRight>
          <MenuItem onClick={handleCopy}>Duplicate</MenuItem>
          <MenuItem divider />
          {toggle}
          {showAction('edit') && (
            <>
              <MenuItem divider />
              <MenuItem onClick={handleDelete} data-testid="delete-button">Delete</MenuItem>
            </>
          )}
        </DropdownButton>
      </IfPermitted>
    </React.Fragment>
  );

  const plugin = getConditionPlugin(eventDefinition.config.type);
  let titleSuffix = <div>{plugin?.displayName ?? eventDefinition.config.type}</div>;

  if (!isScheduled) {
    titleSuffix = (<span>{titleSuffix} <Label bsStyle="warning">disabled</Label></span>);
  }

  const linkTitle = <Link to={Routes.ALERTS.DEFINITIONS.show(eventDefinition.id)}>{eventDefinition.title}</Link>;

  return (
    <>
      <EntityListItem key={`event-definition-${eventDefinition.id}`}
                      title={linkTitle}
                      titleSuffix={titleSuffix}
                      description={renderDescription(eventDefinition, context)}
                      actions={actions} />
      {showEntityShareModal && (
        <EntityShareModal entityId={eventDefinition.id}
                          entityType="event_definition"
                          entityTypeTitle="event definition"
                          entityTitle={eventDefinition.title}
                          description="Search for a User or Team to add as collaborator on this event definition."
                          onClose={() => setShowEntityShareModal(false)} />
      )}
    </>
  );
};

export default EventDefinitionEntry;
