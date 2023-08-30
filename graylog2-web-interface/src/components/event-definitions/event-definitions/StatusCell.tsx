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
import * as React from 'react';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { EventDefinitionsActions } from 'stores/event-definitions/EventDefinitionsStore';
import { Label, BootstrapModalConfirm } from 'components/bootstrap';
import { Icon } from 'components/common';

import type { EventDefinition } from '../event-definitions-types';

const StatusLabel = styled(Label)`
  display: inline-flex;
  justify-content: center;
  gap: 4px;
`;

const Spacer = styled.div`
  border-left: 1px solid currentColor;
  height: 1em;
`;

const _title = (disabled: boolean, disabledChange: boolean, description: string) => {
  if (disabledChange) {
    return description;
  }

  return disabled ? 'Enable' : 'Disable';
};

type Props ={
  eventDefinition: EventDefinition,
  refetchEventDefinitions: () => void,
}

const StatusCell = ({ eventDefinition, refetchEventDefinitions } : Props) => {
  const [showConfirmDisableModal, setShowConfirmDisableModal] = useState<boolean>(false);

  const isEnabled = eventDefinition?.state === 'ENABLED';
  const disableChange = eventDefinition?.config?.type === 'system-notifications-v1';
  const description = isEnabled ? 'enabled' : 'disabled';
  const title = _title(!isEnabled, disableChange, description);

  const toggleEventDefinitionStatus = useCallback(async () => {
    if (isEnabled) {
      setShowConfirmDisableModal(true);
    } else {
      await EventDefinitionsActions.enable(eventDefinition);
      await refetchEventDefinitions();
    }
  }, [isEnabled, eventDefinition, refetchEventDefinitions]);

  const handleConfirmDisable = useCallback(async () => {
    await EventDefinitionsActions.disable(eventDefinition);
    await refetchEventDefinitions();
    setShowConfirmDisableModal(false);
  }, [eventDefinition, refetchEventDefinitions]);

  return (
    <>
      <StatusLabel bsStyle={isEnabled ? 'success' : 'warning'}
                   onClick={disableChange ? undefined : toggleEventDefinitionStatus}
                   title={title}
                   aria-label={title}
                   role="button"
                   $clickable={!disableChange}>
        {description}
        {!disableChange && (
          <>
            <Spacer />
            <Icon name={isEnabled ? 'pause' : 'play'} />
          </>
        )}
      </StatusLabel>
      {showConfirmDisableModal && (
        <BootstrapModalConfirm showModal
                               title="Disable event definition"
                               onConfirm={handleConfirmDisable}
                               onCancel={() => setShowConfirmDisableModal(false)}>
          {`Do you really want to disable event definition '${eventDefinition.title}'?`}
        </BootstrapModalConfirm>
      )}
    </>
  );
};

export default StatusCell;
