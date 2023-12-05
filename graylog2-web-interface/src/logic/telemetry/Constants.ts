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

export const TELEMETRY_EVENT_TYPE = {
  SEARCH_TIMERANGE_PRESET_SELECTED: 'Search TimeRange Preset Selected',
  SEARCH_TIMERANGE_PICKER_TOGGLED: 'Search TimeRange Picker Toggled',
  SEARCH_TIMERANGE_PICKER_UPDATED: 'Search TimeRange Picker Updated',
  SEARCH_TIMERANGE_PICKER_CANCELED: 'Search TimeRange Picker Canceled',
  SEARCH_TIMERANGE_PICKER_TAB_SELECTED: 'Search TimeRange Picker Tab Selected',
  SEARCH_STREAM_INPUT_CHANGED: 'Search Stream Input Changed',
  SEARCH_REFRESH_CONTROL_PRESET_SELECTED: 'Search Refresh Control Preset Selected',
  SEARCH_REFRESH_CONTROL_TOGGLED: 'Search Refresh Control Toggled',
  SEARCH_BUTTON_CLICKED: 'Search Button Clicked',
  SEARCH_FILTER_CREATE_CLICKED: 'Search Filter Create Clicked',
  SEARCH_FILTER_CREATED: 'Search Filter Created',
  SEARCH_FILTER_UPDATED: 'Search Filter Updated',
  SEARCH_FILTER_DELETED: 'Search Filter Deleted',
  SEARCH_FILTER_LOAD_CLICKED: 'Search Filter Load Clicked',
  SEARCH_FILTER_LOADED: 'Search Filter Loaded',
  SEARCH_FILTER_ITEM_MENU_TOGGLED: 'Search Filter Item Menu Toggled',
  SEARCH_FILTER_ITEM_DISABLED_TOGGLED: 'Search Filter Item Disabled Toggled',
  SEARCH_FILTER_ITEM_SHARE_CLICKED: 'Search Filter Item Share Clicked',
  SEARCH_FILTER_ITEM_EDIT_CLICKED: 'Search Filter Item Edit Clicked',
  SEARCH_FILTER_ITEM_COPIED: 'Search Filter Item Copied',
  SEARCH_FILTER_ITEM_REMOVED: 'Search Filter Item Removed',
  SEARCH_FILTER_ITEM_REFERENCE_REPLACED: 'Search Filter Item Reference Replaced',
  SEARCH_FILTER_ITEM_NEGATION_TOGGLED: 'Search Filter Item Negation Toggled',
  SEARCH_WIDGET_EXPORT_DOWNLOADED: 'Search Widget Export Downloaded',
  SEARCH_TIMERANGE_PRESET_ADD_QUICK_ACCESS: 'Search TimeRange Preset Add Quick Access',
  SEARCH_WIDGET_ACTION: {
    FOCUSED: 'Search Widget Focused',
    DELETED: 'Search Widget Deleted',
    MOVE: 'Search Widget Moved',
    DUPLICATE: 'Search Widget Duplicate',
    COPY_TO_DASHBOARD: 'Search Widget Copy To Dashboard Clicked',
    SEARCH_WIDGET_HORIZONTAL_STRETCH: 'Search Widget Horizontal Width Toggled',
    SEARCH_WIDGET_EXTRA_ACTION: 'Search Widget Extra Action Clicked',
    WIDGET_EDIT_TOGGLED: 'Search Widget Edit Toggled',
    WIDGET_EDIT_CANCEL_CLICKED: 'Search Widget Edit Cancel Clicked',
    WIDGET_CONFIG_UPDATED: 'Search Widget Config Updated',
  },
  SEARCH_WIDGET_CREATE: {
    AGGREGATION: 'Search Widget Aggregation Created',
    MESSAGE_COUNT: 'Search Widget Message Count Created',
    MESSAGE_TABLE: 'Search Widget Message Table Created',
    LOG_VIEW: 'Search Widget Log View Created',
  },
  SEARCH_FIELD_VALUE_ACTION: {
    CHART: 'Search Field Action Chart Clicked',
    STATISTICS: 'Search Field Action Statistics Clicked',
    SHOW_TOP_VALUES: 'Search Field Action Show Top Values Clicked',
    ADD_TO_TABLE: 'Search Field Action Add To Table Clicked',
    REMOVE_FROM_TABLE: 'Search Field Action Remove From Table Clicked',
    ADD_TO_ALL_TABLES: 'Search Field Action Add To All Tables Clicked',
    COPY_FIELD_NAME_TO_CLIPBOARD: 'Search Field Action Copy Field Name To Clipboard Clicked',
    REMOVE_FROM_ALL_TABLES: 'Search Field Action Remove From All Tables Clicked',
    EXCLUDE_FROM_RESULTS: 'Search Value Action Exclude From Results Clicked',
    ADD_TO_QUERY: 'Search Value Action Add To Query Clicked',
    SHOW_DOCUMENT_FOR_VALUE: 'Search Value Action Show Document For Value Clicked',
    CREATE_EXTRACTOR: 'Search Value Action Create Extractor Clicked',
    HIGHLIGHT_THIS_VALUE: 'Search Value Action Highlight This Value Clicked',
    COPY_VALUE_TO_CLIPBOARD: 'Search Value Action Copy Value To Clipboard Clicked',
    CREATE_EVENT_DEFINITION: 'Search Value Action Create Event Definition Clicked',
    INSERT_INTO_DASHBOARD_SEARCH: 'Search Value Action Insert Into Dashboard/Search Clicked',
    CHANGE_FIELD_TYPE_OPENED: 'Search Field Action Change Field Type Opened',
    CHANGE_FIELD_TYPE_CLOSED: 'Search Field Action Change Field Type Closed',
    CHANGE_FIELD_TYPE_CHANGED: 'Search Field Action Change Field Type Changed',
    REMOVE_CUSTOM_FIELD_TYPE_OPENED: 'Search Field Action Removed Custom Field Type Opened',
    REMOVE_CUSTOM_FIELD_TYPE_CLOSED: 'Search Field Action Removed Custom Field Type Closed',
    REMOVE_CUSTOM_FIELD_TYPE_REMOVED: 'Search Field Action Removed Custom Field Type Removed',
  },
  DASHBOARD_FULL_SCREEN_MODE_STARTED: 'Dashboard Fullscreen Mode Started',
  SEARCH_MESSAGE_TABLE_SHOW_SURROUNDING_MESSAGE: 'Search Message Table Show Surrounding Message Clicked ',
  SEARCH_MESSAGE_TABLE_TEST_AGAINST_STREAM: 'Search Message Table Test Against Stream Clicked ',
  SEARCH_MESSAGE_TABLE_DETAILS_TOGGLED: 'Widget Message Table Details Toggled',
  SEARCH_SIDEBAR_TOGGLE: 'Search Sidebar Toggled',
  SEARCH_SIDEBAR_HIGHLIGHT_CREATED: 'Search Sidebar Highlight Created',
  SEARCH_SIDEBAR_HIGHLIGHT_UPDATED: 'Search Sidebar Highlight Updated',
  SEARCH_SIDEBAR_HIGHLIGHT_DELETED: 'Search Sidebar Highlight Deleted',
  SEARCH_SIDEBAR_REDO: 'Search Sidebar Redo',
  SEARCH_SIDEBAR_UNDO: 'Search Sidebar Undo',
  DASHBOARD_ACTION: {
    DASHBOARD_NEW_SAVED: 'Dashboard New Saved',
    DASHBOARD_SAVED: 'Dashboard Saved',
    DASHBOARD_UPDATED: 'Dashboard Updated',
    DASHBOARD_CREATE_CLICKED: 'Dashboard Create Clicked',
    DASHBOARD_CREATE_PAGE: 'Dashboard Create Page Clicked',
    DASHBOARD_PAGE_CONFIGURATION: 'Dashboard Page Configuration Clicked',
    DASHBOARD_PAGE_CONFIGURATION_UPDATED: 'Dashboard Page Configuration Updated',
    DASHBOARD_PAGE_CONFIGURATION_CANCELED: 'Dashboard Page Configuration Update Cancel',
    DASHBOARD_PAGE_CONFIGURATION_SORTING_UPDATED: 'Dashboard Page Configuration Sorting Updated',
    DASHBOARD_PAGE_CONFIGURATION_PAGE_REMOVED: 'Dashboard Page Configuration Page Remove',
  },
  EVENTDEFINITION_LIST: {
    COLUMNS_CHANGED: 'EventDefinition List Columns Changed',
    SORT_CHANGED: 'EventDefinition List Sort Changed',
    PAGE_SIZE_CHANGED: 'EventDefinition List Page Size Changed',
    BULK_ACTION_DELETE_CLICKED: 'EventDefinition List Bulk Delete Clicked',
    BULK_ACTION_ENABLE_CLICKED: 'EventDefinition List Bulk Enable Clicked',
    BULK_ACTION_DISABLE_CLICKED: 'EventDefinition List Bulk Disable Clicked',
    ROW_ACTION_DELETE_CLICKED: 'EventDefinition List Row Delete Clicked',
    ROW_ACTION_ENABLE_CLICKED: 'EventDefinition List Row Enable Clicked',
    ROW_ACTION_DISABLE_CLICKED: 'EventDefinition List Row Disable Clicked',
    ROW_ACTION_COPY_CLICKED: 'EventDefinition List Row Copy Clicked',
    ROW_ACTION_SHARE_CLICKED: 'EventDefinition List Row Share Clicked',
  },
  EVENTDEFINITION_CREATE_BUTTON_CLICKED: 'EventDefinition Create Button Clicked',
  EVENTDEFINITION_DUPLICATED: 'EventDefinition Duplicated',
  EVENTDEFINITION_NEXT_CLICKED: 'EventDefinition Next Clicked',
  EVENTDEFINITION_PREVIOUS_CLICKED: 'EventDefinition Previous Clicked',
  EVENTDEFINITION_DETAILS: {
    STEP_CLICKED: 'EventDefinition Details Step Clicked',
    PRIORITY_CHANGED: 'EventDefinition Details Priority Changed',
  },
  EVENTDEFINITION_CONDITION: {
    STEP_CLICKED: 'EventDefinition Condition Step Clicked',
    TYPE_SELECTED: 'EventDefinition Condition Type Selected',
    FILTER_STREAM_SELECTED: 'EventDefinition Condition Filter Stream Selected',
    FILTER_SEARCH_WITHIN_THE_LAST_UNIT_CHANGED: 'EventDefinition Condition Filter Search Within The Last Unit Changed',
    FILTER_EXECUTE_SEARCH_EVERY_UNIT_CHANGED: 'EventDefinition Condition Filter Execute Search Every Unit Changed',
    FILTER_EXECUTED_AUTOMATICALLY_TOGGLED: 'EventDefinition Condition Filter Executed Automatically Toggled',
    FILTER_EVENT_LIMIT_CHANGED: 'EventDefinition Condition Filter Event Limit Changed',
    AGGREGATION_TOGGLED: 'EventDefinition Aggregation Toggled',
    AGGREGATION_GROUP_BY_FIELD_SELECTED: 'EventDefinition Aggregation Group By Field Selected',
    CORRELATION_WITHIN_THE_LAST_UNIT_CHANGED: 'EventDefinition Condition Correlation Within The Last Unit Changed',
    CORRELATION_EXECUTE_EVERY_UNIT_CHANGED: 'EventDefinition Condition Correlation Execute Every Unit Changed',
    CORRELATION_EXECUTED_AUTOMATICALLY_TOGGLED: 'EventDefinition Condition Correlation Executed Automatically Toggled',
    CORRELATION_EVENT_SELECTED: 'EventDefinition Condition Correlation Event Selected',
    CORRELATION_ADD_EVENT_CLICKED: 'EventDefinition Condition Correlation Add Event Clicked',
    CORRELATION_REMOVE_EVENT_CLICKED: 'EventDefinition Condition Correlation Remove Event Clicked',
    CORRELATION_OCCURRENCE_TIME_CHANGED: 'EventDefinition Condition Correlation Occurrence Time Changed',
    CORRELATION_NO_OCCURRENCE_FOLLOWED_BY_EVENT_SELECTED: 'EventDefinition Condition Correlation No Occurrence Followed By Event Selected',
    CORRELATION_NO_OCCURRENCE_IN_THE_NEXT_SELECTED: 'EventDefinition Condition Correlation No Occurrence In The Next Selected',
    CORRELATION_NO_OCCURRENCE_IN_THE_NEXT_UNIT_CHANGED: 'EventDefinition Condition Correlation No Occurrence In The Next Unit Changed',
  },
  EVENTDEFINITION_FIELDS: {
    STEP_CLICKED: 'EventDefinition Fields Step Clicked',
    ADD_CUSTOM_FIELD_CLICKED: 'EventDefinition Fields Add Custom Field Clicked',
    AS_EVENT_KEY_TOGGLED: 'EventDefinition Fields As Event Key Toggled',
    SET_VALUE_FROM_TEMPLATE_SELECTED: 'EventDefinition Fields Set Value From Template Selected',
    SET_VALUE_FROM_LOOKUP_TABLE_SELECTED: 'EventDefinition Fields Set Value From Lookup Table Selected',
    DONE_CLICKED: 'EventDefinition Fields Done Clicked',
    CANCEL_CLICKED: 'EventDefinition Fields Cancel Clicked',
  },
  EVENTDEFINITION_NOTIFICATIONS: {
    STEP_CLICKED: 'EventDefinition Notifications Step Clicked',
    ADD_CLICKED: 'EventDefinition Notifications Add Clicked',
    MANAGE_LINK_CLICKED: 'EventDefinition Notifications Manage Link Clicked',
    NOTIFICATION_SELECTED: 'EventDefinition Notifications Notification Selected',
    CREATE_NEW_CLICKED: 'EventDefinition Notifications Create New Clicked',
    NOTIFICATION_TYPE_SELECTED: 'EventDefinition Notifications Notification Type Selected',
    DONE_CLICKED: 'EventDefinition Notifications Done Clicked',
    CANCEL_CLICKED: 'EventDefinition Notifications Cancel Clicked',
  },
  EVENTDEFINITION_SUMMARY: {
    STEP_CLICKED: 'EventDefinition Summary Step Clicked',
    CANCEL_CLICKED: 'EventDefinition Summary Cancel Clicked',
    CREATE_CLICKED: 'EventDefinition Summary Create Clicked',
    UPDATE_CLICKED: 'EventDefinition Summary Update Clicked',
  },
  NOTIFICATIONS: {
    CREATE_CLICKED: 'Notifications Create Clicked',
    EDIT_CLICKED: 'Notifications Edit Clicked',
    EXECUTE_TEST_CLICKED: 'Notifications Execute Test Clicked',
    BULK_ACTION_DELETE_CLICKED: 'Notifications Bulk Delete Clicked',
    ROW_ACTION_DELETE_CLICKED: 'Notifications Row Delete Clicked',
    ROW_ACTION_TEST_CLICKED: 'Notifications Row Test Clicked',
  },
  CONTENTSTREAM: {
    PREV_ARROW_CLICKED: 'Content Stream Left Arrow Clicked',
    NEXT_ARROW_CLICKED: 'Content Stream Right Arrow Clicked',
    READ_MORE_CLICKED: 'Content Stream Read More Clicked',
    ARTICLE_CLICKED: 'Content Stream Article Clicked',
    RELESE_ARTICLE_CLICKED: 'Content Stream Release Article Clicked',
    NEWS_OPT_IN_TOGGLED: 'Content Stream News Opt-In Clicked',
    RELEASE_OPT_IN_TOGGLED: 'Content Stream Release Opt-In Clicked',
  },
  STREAMS: {
    CREATE_FORM_MODAL_OPENED: 'Stream Create Form Modal Opened',
    NEW_STREAM_CREATED: 'Stream New Stream Created',
    STREAM_ITEM_UPDATED: 'Stream Item Updated',
    STREAM_ITEM_STATUS_TOGGLED: 'Stream Item Status Toggled',
    STREAM_ITEM_SHARE_MODAL_OPENED: 'Stream Item Share Modal Opened',
    STREAM_ITEM_UPDATE_MODAL_OPENED: 'Stream Item Update Modal Opened',
    STREAM_ITEM_CLONED: 'Stream Item Cloned',
    STREAM_ITEM_RULE_SAVED: 'Stream Item Rule SAVED',
    STREAM_ITEM_DELETED: 'Stream Item Deleted',
  },
  ENTITYSHARE: {
    ENTITY_STREAM_SHARED: 'Entity Share: Entity Stream Shared',
    ENTITY_SEARCH_SHARED: 'Entity Share: Entity Search Shared',
    ENTITY_SEARCH_FILTER_SHARED: 'Entity Share: Entity Filter Shared',
    ENTITY_EVENT_DEFINITION_SHARED: 'Entity Share: Event Definition Shared',
    ENTITY_NOTIFICATION_SHARED: 'Entity Share: Notification Shared',
    ENTITY_DASHBOARD_SHARED: 'Entity Share: Dashboard Shared',
  },
  PIPELINE_RULE_BUILDER: {
    CREATE_RULE_CLICKED: 'Pipeline Create Rule Clicked',
    RUN_RULE_SIMULATION_CLICKED: 'Pipeline Run Rule Simulation Clicked',
    RESET_RULE_SIMULATION_CLICKED: 'Pipeline Reset Rule Simulation Clicked',
    USE_SOURCE_CODE_EDITOR_CLICKED: 'Pipeline RuleBuilder Use Source Code Editor Clicked',
    SWITCH_TO_SOURCE_CODE_EDITOR_CONFIRM_CLICKED: 'Pipeline RuleBuilder Switch to Source Code Editor Confirm Clicked',
    SWITCH_TO_SOURCE_CODE_EDITOR_CANCEL_CLICKED: 'Pipeline RuleBuilder Switch to Source Code Editor Cancel Clicked',
    CREATE_NEW_RULE_FROM_CODE_CLICKED: 'Pipeline RuleBuilder Create New Rule From Code Clicked',
    COPY_CODE_AND_CLOSE_CLICKED: 'Pipeline RuleBuilder Code Copy & Close Clicked',
    NEW_CONDITION_SELECTED: 'Pipeline RuleBuilder New Condition Selected',
    NEW_ACTION_SELECTED: 'Pipeline RuleBuilder New Action Selected',
    ADD_CONDITION_CLICKED: 'Pipeline RuleBuilder Add Condition Clicked',
    ADD_ACTION_CLICKED: 'Pipeline RuleBuilder Add Action Clicked',
    UPDATE_CONDITION_CLICKED: 'Pipeline RuleBuilder Update Condition Clicked',
    UPDATE_ACTION_CLICKED: 'Pipeline RuleBuilder Update Action Clicked',
    CANCEL_CLICKED: 'Pipeline RuleBuilder Cancel Clicked',
    ADD_RULE_CLICKED: 'Pipeline RuleBuilder Add Rule Clicked',
    CONVERT_TO_SOURCE_CODE_CLICKED: 'Pipeline RuleBuilder Convert to Source Code Clicked',
    OPERATOR_AND_CLICKED: 'Pipeline RuleBuilder Operator AND Clicked',
    OPERATOR_OR_CLICKED: 'Pipeline RuleBuilder Operator OR Clicked',
    UPDATE_RULE_CLICKED: 'Pipeline RuleBuilder Update Rule Clicked',
    UPDATE_RULE_AND_CLOSE_CLICKED: 'Pipeline RuleBuilder Update Rule And Close Clicked',
    NEGATE_CONDITION_CLICKED: 'Pipeline RuleBuilder Negate Condition Clicked',
    DUPLICATE_ACTION_CLICKED: 'Pipeline RuleBuilder Duplicate Action Clicked',
    INSERT_ABOVE_ACTION_CLICKED: 'Pipeline RuleBuilder Insert Above Action Clicked',
    INSERT_BELOW_ACTION_CLICKED: 'Pipeline RuleBuilder Insert Below Action Clicked',
    DELETE_CONDITION_CLICKED: 'Pipeline RuleBuilder Delete Condition Clicked',
    DELETE_ACTION_CLICKED: 'Pipeline RuleBuilder Delete Action Clicked',
    EDIT_CONDITION_CLICKED: 'Pipeline RuleBuilder Edit Condition Clicked',
    EDIT_ACTION_CLICKED: 'Pipeline RuleBuilder Edit Action Clicked',
  },
  ILLUMINATE: {
    BUNDLE_UPLOADED: 'Illuminate Bundle Uploaded',
    BUNDLE_DOWNLOADED_AND_INSTALLED: 'Illuminate Bundle Downloaded and Installed',
    PACK_ENABLE_MODAL_TOGGLED: 'Illuminate Pack Enable Modal Toggled',
    PACK_DISABLE_MODAL_TOGGLED: 'Illuminate Pack Modal Toggled',
    PACKS_BULK_UPDATED: 'Illuminate Packs Bulk Updated',
    PACKS_OVERRIDE_FORM_OPENED: 'Illuminate Packs Override Form Opened',
    PACKS_OVERRIDE_SAVED: 'Illuminate Packs Override Saved',
  },
  SECURITY_APP: {
    ASSET_DELETED: 'Security Asset Deleted',
    ASSET_SOURCE_DELETED: 'Security Asset Source Deleted',
    ASSET_CONFIG_REPRIORITIZED: 'Security Asset Config Reprioritized',
    ASSET_CONFIG_CATEGORY_ADDED: 'Security Asset Config Category Added',
    ASSET_CONFIG_CATEGORY_UPDATED: 'Security Asset Config Category Updated',
    ASSET_CONFIG_CATEGORY_DELETED: 'Security Asset Config Category Deleted',
    ASSET_CONFIG_PRIORITY_ADDED: 'Security Asset Config Priority Added',
    ASSET_CONFIG_PRIORITY_UPDATED: 'Security Asset Config Priority Updated',
    ASSET_CONFIG_PRIORITY_DELETED: 'Security Asset Config Priority Deleted',
    INVESTIGATION_UPDATED: 'Security Investigation Update',
    INVESTIGATION_ARCHIVED: 'Security Investigation Archived',
    INVESTIGATION_EDITED: 'Security Investigation Updated',
    INVESTIGATION_RESTORED: 'Security Investigation Restored',
    INVESTIGATION_DELETED: 'Security Investigation Deleted',
    INVESTIGATION_PRIORITY_ADDED: 'Security Investigation Priority Added',
    INVESTIGATION_PRIORITY_UPDATED: 'Security Investigation Priority Updated',
    INVESTIGATION_PRIORITY_DELETED: 'Security Investigation Priority Deleted',
    INVESTIGATION_PRIORITY_REPRIORITIZED: 'Security Investigation Priority Reprioritized',
    INVESTIGATION_PRIORITY_DEFAULT_SET: 'Security Investigation Priority Default Set',
    INVESTIGATION_PRIORITY_DEFAULT_REMOVED: 'Security Investigation Priority Default Removed',
    INVESTIGATION_STATUS_ADDED: 'Security Investigation Status Added',
    INVESTIGATION_STATUS_UPDATED: 'Security Investigation Status Updated',
    INVESTIGATION_STATUS_DELETED: 'Security Investigation Status Deleted',
    INVESTIGATION_STATUS_REPRIORITIZED: 'Security Investigation Status Reprioritized',
    INVESTIGATION_STATUS_DEFAULT_SET: 'Security Investigation Status Default Set',
    INVESTIGATION_STATUS_DEFAULT_REMOVED: 'Security Investigation Status Default Removed',
    INVESTIGATION_DETAILS_UPDATED: 'Security Investigation Details Updated',
    INVESTIGATION_DRAWER_OPENED: 'Security Investigation Drawer Opened',
    INVESTIGATION_DRAWER_CLOSED: 'Security Investigation Drawer Closed',
    INVESTIGATION_DRAWER_COLLAPSE_TOGGLED: 'Security Investigation Drawer Collapse Toggled',
    INVESTIGATION_NOTE_ADDED: 'Security Investigation Note Added',
    INVESTIGATION_NOTE_SAVED: 'Security Investigation Note Saved',
    INVESTIGATION_NOTE_EDIT: 'Security Investigation Note Updated',
    INVESTIGATION_NOTE_DELETED: 'Security Investigation Note Deleted',
    SIGMA_IMPORT_RULES_OPENED: 'Security Sigma Rules Import Opened',
    SIGMA_IMPORT_RULES_IMPORTED: 'Security Sigma Rules Imported',
    SIGMA_RULE_UPDATED: 'Security Sigma Rules Update',
    SIGMA_RULE_CREATED: 'Security Sigma Rules Created',
    ANOMALY_DETECTION_SAVED: 'Security Anomaly Detection Saved',
    ANOMALY_DETECTION_DELETED: 'Security Anomaly Detection Deleted',
  },
  FORWARDER: {
    INPUTPROFILE_FORWARDER_ASSIGNED: 'Forwarder Input Profile Forwarder Assigned',
    FORWARDER_WIZARD_WELCOME_STEP_OPENED: 'Forwarder Wizard Welcome Step Opened',
    FORWARDER_WIZARD_SELECT_FORWARDER_STEP_OPENED: 'Forwarder Wizard Select Forwarder Step Opened',
    FORWARDER_WIZARD_CONFIGURE_FORWARDER_STEP_OPENED: 'Forwarder Wizard Configure Forwarder Step Opened',
    FORWARDER_WIZARD_INPUTS_STEP_OPENED: 'Forwarder Wizard Forwarder Inputs Step Opened',
    FORWARDER_WIZARD_SUMMARY_STEP_OPENED: 'Forwarder Wizard Forwarder Summary Step Opened',
    FORWARDER_WIZARD_CONFIGURE_FORWARDER_SELECTED: 'Forwarder Wizard Configure Forwarder Selected',
    FORWARDER_WIZARD_CONFIGURE_FORWARDER_SAVED: 'Forwarder Wizard Configure Forwarder Saved',
    FORWARDER_WIZARD_INPUT_PROFILE_SELECTED: 'Forwarder Wizard Input Profile Selected',
    FORWARDER_WIZARD_INPUT_PROFILE_SAVED: 'Forwarder Wizard Input Profile Saved',
    FORWARDER_INPUT_PROFILE_CREATED: 'Forwarder Input Profile Created',
    FORWARDER_CREATED: 'Forwarder Created',
    FORWARDER_UPDATED: 'Forwarder Updated',
    FORWARDER_DELETED: 'Forwarder Created',
    FORWARDER_CONFIGURATION_REMOVED: 'Forwarder Configuration Removed',
    FORWARDER_INPUT_PROFILE_UPDATED: 'Forwarder Input Profile Updated',
    FORWARDER_INPUT_PROFILE_FORWARDER_ASSIGNED: 'Forwarder Input Profile Forwarder Assigned',
    FORWARDER_INPUT_PROFILE_CREATE_CANCELED: 'Forwarder Input Profile Create Canceled',
    FORWARDER_INPUT_PROFILE_INPUT_CREATED: 'Forwarder Input Profile Input Created',
    FORWARDER_INPUT_PROFILE_INPUT_UPDATED: 'Forwarder Input Profile Input Updated',
    FORWARDER_INPUT_PROFILE_INPUT_DELETED: 'Forwarder Input Profile Input Deleted',
    FORWARDER_WIZARD_SETUP_CANCELED: 'Forwarder Wizard Setup Canceled',
  },
  ARCHIVE: {
    DELETED: 'Archive Deleted',
    RESTORED: 'Archive Restored',
    CREATED: 'Archive Created',
    ITEM_DETAILS_TOGGLED: 'Archive Item Details Opened',
    BACKEND_CONFIGURATION_UPDATED: 'Archive Backend Configuration Updated',
    BACKEND_CONFIGURATION_CREATED: 'Archive Backend Configuration Created',
    BACKEND_CONFIGURATION_DELETED: 'Archive Backend Configuration Deleted',
    CONFIGURATION_UPDATED: 'Archive Configuration Update',
  },
  LICENSE: {
    VALIDATED: 'License Validated',
    SAVED: 'License Saved',
    DELETED: 'License Deleted',
  },
  REPORT: {
    CONFIGURED: 'Report Configured',
    DELETED: 'Report Deleted',
    SENT: 'Report Sent',
    CREATED: 'Report Created',
    UPDATED: 'Report Updated',
  },
  CUSTOMIZATION: {
    NOTIFICATION_CREATED: 'Customization Notification Created',
    NOTIFICATION_DELETED: 'Customization Notification Deleted',
    NOTIFICATION_BULK_DELETED: 'Customization Notification Bulk Deleted',
    THEME_REVERTED: 'Customization Theme Reverted',
    THEME_RESETED: 'Customization Theme Reseted',
    HEADER_BADGE_UPDATED: 'Customization Header Badge Updated',
  },
  TRAFFIC_VIOLATION_CONFIGURATION_SAVED: 'Traffic Violation Configuration Saved',
  FAILURE_PROCESSING_CONFIGURATION_SAVED: 'Failure Processing Configuration Saved',
  SHORTCUT_TYPED: 'Shortcut Typed',
  CONFIGURATIONS: {
    INDEX_SETS_UPDATED: 'Configurations Index Sets Defaults Updated',
    THREATINTEL_CONFIGURATION_UPDATED: 'Configurations Threat Intel Configuration Updated',
    PERMISSIONS_UPDATED: 'Configurations Permissions Updated',
    SEARCHES_UPDATED: 'Configurations Searches Updated',
    URL_WHITE_LIST_UPDATED: 'Configurations Url White List Updated',
    USER_UPDATED: 'Configurations User Updated',
    CERTIFICATE_RENEWAL_UPDATED: 'Configurations Certificate Renewal Updated',
    CERTIFICATE_RENEWAL_POLICY_UPDATED: 'Configurations Certificate Renewal Policy Updated',
    DECORATORS_UPDATED: 'Configurations Decorators Updated',
    GEOLOCATION_CONFIGURATION_UPDATED: 'Configurations Geolocation Configuration Updated',
  },
  INPUTS: {
    INPUT_SELECTED: 'Inputs Input Selected',
    INPUT_CREATED: 'Inputs Input Created',
    FIND_MORE_CLICKED: 'Inputs Find More Inputs Clicked',
    INPUT_DELETED: 'Inputs Input Deleted',
    INPUT_EDIT_CLICKED: 'Inputs Input Edit Clicked',
    INPUT_UPDATED: 'Inputs Input Updated',
    SHOW_RECEIVED_MESSAGES_CLICKED: 'Inputs Show Received Messages Clicked',
    MANAGE_EXTRACTORS_CLICKED: 'Inputs Manage Extractors Clicked',
    SHOW_METRICS_CLICKED: 'Inputs Show Metrics Clicked',
    INPUT_START_CLICKED: 'Inputs Input Start Clicked',
    INPUT_STOP_CLICKED: 'Inputs Input Stop Clicked',
  },
  OUTPUTS: {
    OUTPUT_CREATED: 'Outputs Output Created',
    OUTPUT_ASSIGNED: 'Outputs Output Assigned',
    OUTPUT_GLOBALLY_REMOVED: 'Outputs Output Globally Removed',
    OUTPUT_FROM_STREAM_REMOVED: 'Outputs Output From Stream Removed',
    OUTPUT_UPDATED: 'Outputs Output Updated',
  },
  INDICES: {
    INDEX_SET_DEFAULT_SET: 'Indices Index Set Default Set',
    INDEX_SET_DELETED: 'Indices Index Set Deleted',
    INDEX_SET_CREATED: 'Indices Index Set Created',
    INDEX_SET_UPDATED: 'Indices Index Set Updated',
  },
  LOGGING: {
    LOG_LEVEL_EDITED: 'Logging Log Level Edited',
    SHOW_LOG_LEVEL_METRICS_TOGGLED: 'Logging Show Log Level Metrics Toggled',
  },
  LUT: {
    DELETED: 'LUT Deleted',
    CREATED: 'LUT Created',
    UPDATED: 'LUT Updated',
    CACHE_TYPE_CHANGED: 'LUT Cache Type Changed',
    CACHE_DELETED: 'LUT Cache Deleted',
    CACHE_CREATED: 'LUT Cache Created',
    CACHE_UPDATED: 'LUT Cache Updated',
    DATA_ADAPTER_DELETED: 'LUT Data Adapter Deleted',
    DATA_ADAPTER_CREATED: 'LUT Data Adapter Created',
    DATA_ADAPTER_UPDATED: 'LUT Data Adapter Updated',
  },
  USERS: {
    USER_CREATED: 'Users User Created',
    USER_DISABLED: 'Users User Disabled',
    USER_ENABLED: 'Users User Enabled',
    USER_DELETED: 'Users User Deleted',
  },
  GROK_PATTERN: {
    CREATED: 'Grok Pattern Created',
    UPDATED: 'Grok Pattern Updated',
    DELETED: 'Grok Pattern Deleted',
    TESTED: 'Grok Pattern Tested',
    IMPORTED: 'Grok Pattern Imported',
  },
  ROLES: {
    USER_ASSIGNED: 'Roles User Assigned',
    USER_UNASSIGNED: 'Roles User Unassigned',
  },
  AUTHENTICATION: {
    CONFIG_UPDATED: 'Authentication Config Updated',
    SERVICE_CREATED: 'Authentication Service Created',
    SERVICE_SELECTED: 'Authentication Service Selected',
    DIRECTORY_SERVER_CONFIG_SAVE_CLICKED: 'Authentication Directory Server Config Save Clicked',
    DIRECTORY_USER_SYNC_SAVE_CLICKED: 'Authentication Directory User Sync Save Clicked',
    DIRECTORY_GROUP_SYNC_SAVE_CLICKED: 'Authentication Directory Group Sync Save Clicked',
    DIRECTORY_NEXT_USER_SYNC_CLICKED: 'Authentication Directory Next User Sync Clicked',
    DIRECTORY_NEXT_GROUP_SYNC_CLICKED: 'Authentication Directory Next Group Sync Clicked',
    OIDC_SERVER_CONFIG_SAVE_CLICKED: 'Authentication OIDC Server Config Save Clicked',
    OIDC_NEXT_GROUP_SYNC_CLICKED: 'Authentication OIDC Next Group Sync Clicked',
    OIDC_PREVIOUS_SERVER_CONFIG_CLICKED: 'Authentication OIDC Previous Server Config Clicked',
    OIDC_GROUP_SYNC_SAVE_CLICKED: 'Authentication OIDC Group Sync Save Clicked',
  },
  SIDECARS: {
    CONFIGURATION_CREATED: 'Sidecar Configuration Created',
    CONFIGURATION_UPDATED: 'Sidecar Configuration Updated',
    CONFIGURATION_CLONED: 'Sidecar Configuration Cloned',
    CONFIGURATION_DELETED: 'Sidecar Configuration Deleted',
    CONFIGURATION_ASSIGNED: 'Sidecar Configuration Assigned',
    PROCESS_ACTION_SET: 'Sidecar Process Action Set',
    LOG_COLLECTOR_CLONED: 'Sidecar Log Collector Cloned',
    LOG_COLLECTOR_CREATED: 'Sidecar Log Collector Created',
    LOG_COLLECTOR_SERVICE_TYPE_CHANGED: 'Sidecar Log Collector Service Type Changed',
    LOG_COLLECTOR_NODE_OPERATING_SYSTEM_CHANGED: 'Sidecar Log Collector Node Operating System Changed',
    LOG_COLLECTOR_UPDATED: 'Sidecar Log Collector Updated',
    LOG_COLLECTOR_DELETED: 'Sidecar Log Collector Deleted',
  },
  SYSTEM_OVERVIEW_OUTGOING_TRAFFIC_DAYS_CHANGED: 'System Overview Outgoing Traffic Days Changed',
  URLWHITELIST_CONFIGURATION_UPDATED: 'Urlwhitelist Configuration Updated',
  CONTENT_PACK: {
    INSTALLED: 'Content Pack Installed',
    DOWNLOADED: 'Content Pack Downloaded',
    ALL_VERSIONS_DELETED: 'Content Pack All Versions Deleted',
  },
  TEAM: {
    CREATED: 'Team Created',
    ASSIGNED: 'Team Assigned',
    UNASSIGNED: 'Team Unassigned',
    DELETED: 'Team Deleted',
  },
} as const;

type ExtractObjectValues<T extends object> = {
  [K in keyof T]: T[K] extends object ? ExtractObjectValues<T[K]> : T[K];
}[keyof T];

export type EventType = ExtractObjectValues<typeof TELEMETRY_EVENT_TYPE>;
