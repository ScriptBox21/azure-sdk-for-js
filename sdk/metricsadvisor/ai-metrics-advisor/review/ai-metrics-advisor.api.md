## API Report File for "@azure/ai-metrics-advisor"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreHttp from '@azure/core-http';
import { OperationOptions } from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PipelineOptions } from '@azure/core-http';
import { RestResponse } from '@azure/core-http';
import { TokenCredential } from '@azure/core-auth';

// @public
export interface AlertConfigurationsPageResponse extends Array<AnomalyAlertConfiguration> {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export type AlertQueryTimeMode = "AnomalyTime" | "CreatedTime" | "ModifiedTime";

// @public
export interface AlertsPageResponse extends Array<AnomalyAlert> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export interface AnomaliesPageResponse extends Array<DataPointAnomaly> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export interface AnomalyAlert {
    alertConfigId: string;
    createdOn?: Date;
    id: string;
    modifiedOn?: Date;
    timestamp?: number;
}

// @public
export interface AnomalyAlertConfiguration {
    crossMetricsOperator?: MetricAnomalyAlertConfigurationsOperator;
    description?: string;
    hookIds: string[];
    id: string;
    metricAlertConfigurations: MetricAlertConfiguration[];
    name: string;
    splitAlertByDimensions?: string[];
}

// @public
export interface AnomalyDetectionConfiguration {
    description?: string;
    id: string;
    metricId: string;
    name: string;
    seriesDetectionConditions?: MetricSingleSeriesDetectionCondition[];
    seriesGroupDetectionConditions?: MetricSeriesGroupDetectionCondition[];
    wholeSeriesDetectionCondition: MetricDetectionCondition;
}

// @public
export interface AnomalyDetectionConfigurationPatch {
    description?: string;
    name?: string;
    seriesDetectionConditions?: MetricSingleSeriesDetectionCondition[];
    seriesGroupDetectionConditions?: MetricSeriesGroupDetectionCondition[];
    wholeSeriesDetectionCondition?: MetricDetectionConditionPatch;
}

// @public
export type AnomalyDetectorDirection = "Both" | "Down" | "Up";

// @public
export interface AnomalyIncident {
    readonly dataFeedId?: string;
    detectionConfigurationId: string;
    readonly expectedValueOfRootNode?: number;
    id: string;
    lastOccurredTime: Date;
    metricId?: string;
    rootDimensionKey: DimensionKey;
    severity: AnomalySeverity;
    startTime?: Date;
    status?: AnomalyStatus;
    readonly valueOfRootNode?: number;
}

// @public
export type AnomalySeverity = "Low" | "Medium" | "High";

// @public
export type AnomalyStatus = "Active" | "Resolved";

// @public
export type AnomalyValue = "AutoDetect" | "Anomaly" | "NotAnomaly";

// @public
export type AzureApplicationInsightsDataFeedSource = {
    dataSourceType: "AzureApplicationInsights";
    azureCloud?: string;
    applicationId?: string;
    apiKey?: string;
    query: string;
    authenticationType: "Basic";
};

// @public
export type AzureBlobDataFeedSource = {
    dataSourceType: "AzureBlob";
    connectionString: string;
    container: string;
    blobTemplate: string;
    authenticationType: "Basic" | "ManagedIdentity";
};

// @public
export type AzureCosmosDbDataFeedSource = {
    dataSourceType: "AzureCosmosDB";
    connectionString?: string;
    sqlQuery: string;
    database: string;
    collectionId: string;
    authenticationType: "Basic";
};

// @public
export interface AzureDataExplorerAuthBasic {
    authenticationType: "Basic";
}

// @public
export interface AzureDataExplorerAuthManagedIdentity {
    authenticationType: "ManagedIdentity";
}

// @public
export interface AzureDataExplorerAuthServicePrincipal {
    authenticationType: "ServicePrincipal";
    credentialId: string;
}

// @public
export interface AzureDataExplorerAuthServicePrincipalInKeyVault {
    authenticationType: "ServicePrincipalInKV";
    credentialId: string;
}

// @public
export type AzureDataExplorerAuthTypes = AzureDataExplorerAuthBasic | AzureDataExplorerAuthManagedIdentity | AzureDataExplorerAuthServicePrincipal | AzureDataExplorerAuthServicePrincipalInKeyVault;

// @public
export type AzureDataExplorerDataFeedSource = {
    dataSourceType: "AzureDataExplorer";
    connectionString: string;
    query: string;
} & AzureDataExplorerAuthTypes;

// @public
export type AzureDataLakeStorageGen2AuthTypes = DataLakeStorageGen2AuthBasic | DataLakeStorageGen2AuthManagedIdentity | DataLakeStorageGen2AuthServicePrincipal | DataLakeStorageGen2AuthServicePrincipalInKeyVault | DataLakeStorageGen2AuthSharedKey;

// @public
export type AzureDataLakeStorageGen2DataFeedSource = {
    dataSourceType: "AzureDataLakeStorageGen2";
    accountName: string;
    fileSystemName: string;
    directoryTemplate: string;
    fileTemplate: string;
} & AzureDataLakeStorageGen2AuthTypes;

// @public
export type AzureEventHubsDataFeedSource = {
    dataSourceType: "AzureEventHubs";
    connectionString?: string;
    consumerGroup: string;
    authenticationType: "Basic";
};

// @public
export type AzureLogAnalyticsAuthTypes = LogAnalyticsAuthBasic | LogAnalyticsAuthServicePrincipal | LogAnalyticsAuthServicePrincipalInKeyVault;

// @public
export type AzureLogAnalyticsDataFeedSource = {
    dataSourceType: "AzureLogAnalytics";
    tenantId?: string;
    clientId?: string;
    clientSecret?: string;
    workspaceId: string;
    query: string;
} & AzureLogAnalyticsAuthTypes;

// @public
export type AzureTableDataFeedSource = {
    dataSourceType: "AzureTable";
    connectionString: string;
    table: string;
    query: string;
    authenticationType: "Basic";
};

// @public
export type ChangeThresholdConditionUnion = {
    changePercentage: number;
    shiftPoint: number;
    withinRange: true;
    anomalyDetectorDirection: "Both";
    suppressCondition: SuppressCondition;
} | {
    changePercentage: number;
    shiftPoint: number;
    withinRange: false;
    anomalyDetectorDirection: "Up" | "Down" | "Both";
    suppressCondition: SuppressCondition;
};

// @public
export interface CreateDataFeedOptions extends OperationOptions {
}

// @public
export interface CredentialsPageResponse extends Array<DatasourceCredentialUnion> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export type DataFeed = {
    id: string;
    name: string;
    createdOn: Date;
    status: DataFeedStatus;
    isAdmin: boolean;
    creator: string;
    source: DataFeedSource;
    schema: DataFeedSchema;
    metricIds: Record<string, string>;
    granularity: DataFeedGranularity;
    ingestionSettings: DataFeedIngestionSettings;
    description?: string;
    rollupSettings?: DataFeedRollupSettings;
    missingDataPointFillSettings?: DataFeedMissingDataPointFillSettings;
    accessMode?: DataFeedAccessMode;
    adminEmails?: string[];
    viewerEmails?: string[];
    actionLinkTemplate?: string;
};

// @public
export type DataFeedAccessMode = "Private" | "Public";

// @public
export type DataFeedDescriptor = Omit<DataFeed, "id" | "metricIds" | "isAdmin" | "status" | "creator" | "createdOn">;

// @public
export type DataFeedDetailStatus = "Active" | "Paused";

// @public
export interface DataFeedDimension {
    displayName?: string;
    name: string;
}

// @public
export type DataFeedGranularity = {
    granularityType: "Yearly" | "Monthly" | "Weekly" | "Daily" | "Hourly" | "PerMinute" | "PerSecond";
} | {
    granularityType: "Custom";
    customGranularityValue: number;
};

// @public (undocumented)
export interface DataFeedIngestionProgress {
    readonly latestActiveTimestamp?: Date;
    readonly latestSuccessTimestamp?: Date;
}

// @public
export interface DataFeedIngestionSettings {
    dataSourceRequestConcurrency?: number;
    ingestionRetryDelayInSeconds?: number;
    ingestionStartOffsetInSeconds?: number;
    ingestionStartTime: Date;
    stopRetryAfterInSeconds?: number;
}

// @public
export interface DataFeedMetric {
    description?: string;
    displayName?: string;
    readonly id?: string;
    name: string;
}

// @public
export type DataFeedMissingDataPointFillSettings = {
    fillType: "SmartFilling" | "PreviousValue" | "NoFilling";
} | {
    fillType: "CustomValue";
    customFillValue: number;
};

// @public
export type DataFeedPatch = {
    name?: string;
    source: DataFeedSourcePatch;
    schema?: {
        timestampColumn?: string;
    };
    ingestionSettings?: DataFeedIngestionSettings;
    description?: string;
    rollupSettings?: DataFeedRollupSettings;
    missingDataPointFillSettings?: DataFeedMissingDataPointFillSettings;
    accessMode?: DataFeedAccessMode;
    adminEmails?: string[];
    viewerEmails?: string[];
    actionLinkTemplate?: string;
    status?: DataFeedDetailStatus;
};

// @public
export type DataFeedRollupMethod = "None" | "Sum" | "Max" | "Min" | "Avg" | "Count";

// @public
export type DataFeedRollupSettings = {
    rollupType: "NoRollup";
} | {
    rollupType: "AlreadyRollup";
    rollupIdentificationValue?: string;
} | {
    rollupType: "AutoRollup";
    autoRollupGroupByColumnNames?: string[];
    rollupMethod?: DataFeedRollupMethod;
    rollupIdentificationValue?: string;
};

// @public
export interface DataFeedSchema {
    dimensions?: DataFeedDimension[];
    metrics: DataFeedMetric[];
    timestampColumn?: string;
}

// @public
export type DataFeedSource = AzureApplicationInsightsDataFeedSource | AzureBlobDataFeedSource | AzureCosmosDbDataFeedSource | AzureDataExplorerDataFeedSource | AzureDataLakeStorageGen2DataFeedSource | AzureTableDataFeedSource | InfluxDbDataFeedSource | MySqlDataFeedSource | PostgreSqlDataFeedSource | SqlServerDataFeedSource | MongoDbDataFeedSource | AzureLogAnalyticsDataFeedSource | AzureEventHubsDataFeedSource | UnknownDataFeedSource;

// @public
export type DataFeedSourcePatch = Partial<DataFeedSource> & {
    dataSourceType: DataFeedSource["dataSourceType"];
};

// @public
export interface DataFeedsPageResponse extends Array<DataFeed> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export type DataFeedStatus = "Paused" | "Active";

// @public
export interface DataLakeGen2SharedKeyDatasourceCredential extends DatasourceCredential {
    accountKey: string;
    type: "DataLakeGen2SharedKey";
}

// @public
export interface DataLakeGen2SharedKeyDatasourceCredentialPatch {
    accountKey?: string;
    description?: string;
    name?: string;
    type: "DataLakeGen2SharedKey";
}

// @public
export type DataLakeStorageGen2AuthBasic = {
    authenticationType: "Basic";
    accountKey: string;
};

// @public
export type DataLakeStorageGen2AuthManagedIdentity = {
    authenticationType: "ManagedIdentity";
};

// @public
export type DataLakeStorageGen2AuthServicePrincipal = {
    authenticationType: "ServicePrincipal";
    credentialId: string;
};

// @public
export type DataLakeStorageGen2AuthServicePrincipalInKeyVault = {
    authenticationType: "ServicePrincipalInKV";
    credentialId: string;
};

// @public
export type DataLakeStorageGen2AuthSharedKey = {
    authenticationType: "DataLakeGen2SharedKey";
    credentialId: string;
};

// @public
export interface DataPointAnomaly {
    createdOn?: Date;
    readonly dataFeedId?: string;
    detectionConfigurationId: string;
    readonly expectedValue?: number;
    metricId?: string;
    modifiedOn?: Date;
    seriesKey: DimensionKey;
    severity: AnomalySeverity;
    status?: AnomalyStatus;
    timestamp: number;
    readonly value?: number;
}

// @public
export interface DatasourceCredential {
    description?: string;
    readonly id?: string;
    name: string;
}

// @public
export type DatasourceCredentialPatch = SqlServerConnectionStringDatasourceCredentialPatch | DataLakeGen2SharedKeyDatasourceCredentialPatch | ServicePrincipalDatasourceCredentialPatch | ServicePrincipalInKeyVaultDatasourceCredentialPatch;

// @public (undocumented)
export type DatasourceCredentialUnion = SqlServerConnectionStringDatasourceCredential | DataLakeGen2SharedKeyDatasourceCredential | ServicePrincipalDatasourceCredential | ServicePrincipalInKeyVaultDatasourceCredential;

// @public
export type DataSourceType = "AzureApplicationInsights" | "AzureBlob" | "AzureCosmosDB" | "AzureDataExplorer" | "AzureDataLakeStorageGen2" | "AzureEventHubs" | "AzureLogAnalytics" | "AzureTable" | "InfluxDB" | "MongoDB" | "MySql" | "PostgreSql" | "SqlServer";

// @public
export interface DetectionConditionsCommon {
    changeThresholdCondition?: ChangeThresholdConditionUnion;
    conditionOperator?: DetectionConditionsOperator;
    hardThresholdCondition?: HardThresholdConditionUnion;
    smartDetectionCondition?: SmartDetectionCondition;
}

// @public
export interface DetectionConditionsCommonPatch {
    changeThresholdCondition?: Partial<ChangeThresholdConditionUnion>;
    conditionOperator?: DetectionConditionsOperator;
    hardThresholdCondition?: Partial<HardThresholdConditionUnion>;
    smartDetectionCondition?: Partial<SmartDetectionCondition>;
}

// @public
export type DetectionConditionsOperator = "AND" | "OR";

// @public
export interface DetectionConfigurationsPageResponse extends Array<AnomalyDetectionConfiguration> {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export type DimensionKey = Record<string, string>;

// @public
export interface DimensionValuesPageResponse extends Array<string> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public (undocumented)
export interface EmailHookParameter {
    toList: string[];
}

// @public
export type EmailNotificationHook = {
    hookType: "Email";
    hookParameter: EmailHookParameter;
} & NotificationHook;

// @public
export type EmailNotificationHookPatch = {
    hookType: "Email";
    hookParameter?: Partial<EmailHookParameter>;
} & NotificationHookPatch;

// @public (undocumented)
export interface EnrichmentStatus {
    readonly message?: string;
    readonly status?: string;
    readonly timestamp?: number;
}

// @public
export type FeedbackQueryTimeMode = "MetricTimestamp" | "FeedbackCreatedTime";

// @public
export type FeedbackType = "Anomaly" | "ChangePoint" | "Period" | "Comment";

// @public
export type GetAnomalyAlertConfigurationResponse = AnomalyAlertConfiguration & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetAnomalyDetectionConfigurationResponse = AnomalyDetectionConfiguration & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetCredentialEntityResponse = DatasourceCredentialUnion & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetDataFeedResponse = DataFeed & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetFeedbackResponse = MetricFeedbackUnion & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetHookResponse = NotificationHookUnion & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetIncidentRootCauseResponse = {
    rootCauses: IncidentRootCause[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetIngestionProgressResponse = {
    readonly latestSuccessTimestamp?: number;
    readonly latestActiveTimestamp?: number;
} & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export interface GetMetricEnrichedSeriesDataOptions extends OperationOptions {
}

// @public
export interface GetMetricEnrichedSeriesDataResponse extends Array<MetricEnrichedSeriesData> {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export interface GetMetricSeriesDataOptions extends OperationOptions {
}

// @public
export interface GetMetricSeriesDataResponse extends Array<MetricSeriesData> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export type HardThresholdConditionUnion = {
    lowerBound: number;
    anomalyDetectorDirection: "Down";
    suppressCondition: SuppressCondition;
} | {
    upperBound: number;
    anomalyDetectorDirection: "Up";
    suppressCondition: SuppressCondition;
} | {
    lowerBound: number;
    upperBound: number;
    anomalyDetectorDirection: "Both";
    suppressCondition: SuppressCondition;
};

// @public
export interface HooksPageResponse extends Array<NotificationHookUnion> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export interface IncidentRootCause {
    description: string;
    path: string[];
    score: number;
    seriesKey: DimensionKey;
}

// @public
export interface IncidentsPageResponse extends Array<AnomalyIncident> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export type InfluxDbDataFeedSource = {
    dataSourceType: "InfluxDB";
    connectionString: string;
    database: string;
    userName: string;
    password: string;
    query: string;
    authenticationType: "Basic";
};

// @public (undocumented)
export interface IngestionStatus {
    readonly message?: string;
    readonly status?: IngestionStatusType;
    readonly timestamp?: number;
}

// @public
export interface IngestionStatusPageResponse extends Array<IngestionStatus> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export type IngestionStatusType = "NotStarted" | "Scheduled" | "Running" | "Succeeded" | "Failed" | "NoData" | "Error" | "Paused";

// @public
export interface ListAlertsOptions extends OperationOptions {
    skip?: number;
}

// @public
export interface ListAnomaliesForAlertConfigurationOptions extends OperationOptions {
    skip?: number;
}

// @public
export interface ListAnomaliesForDetectionConfigurationOptions extends OperationOptions {
    dimensionFilter?: DimensionKey[];
    severityFilter?: SeverityFilterCondition;
    skip?: number;
}

// @public
export interface ListAnomalyDimensionValuesOptions extends OperationOptions {
    // (undocumented)
    dimensionFilter?: DimensionKey;
    skip?: number;
}

// @public
export interface ListDataFeedIngestionStatusOptions extends OperationOptions {
    skip?: number;
}

// @public
export interface ListDataFeedsOptions extends OperationOptions {
    filter?: {
        dataFeedName?: string;
        dataSourceType?: DataSourceType;
        granularity?: DataFeedGranularity;
        status?: DataFeedStatus;
        creator?: string;
    };
    skip?: number;
}

// @public
export interface ListDatasourceCredentialsOptions extends OperationOptions {
    skip?: number;
}

// @public
export interface ListFeedbackOptions extends OperationOptions {
    filter?: {
        dimensionFilter?: DimensionKey;
        feedbackType?: FeedbackType;
        startTime?: Date | string;
        endTime?: Date | string;
        timeMode?: FeedbackQueryTimeMode;
    };
    skip?: number;
}

// @public
export interface ListHooksOptions extends OperationOptions {
    hookName?: string;
    skip?: number;
}

// @public
export interface ListIncidentsForAlertOptions extends OperationOptions {
    skip?: number;
}

// @public
export interface ListIncidentsForDetectionConfigurationOptions extends OperationOptions {
    dimensionFilter?: DimensionKey[];
}

// @public
export interface ListMetricDimensionValuesOptions extends OperationOptions {
    dimensionValueFilter?: string;
    skip?: number;
}

// @public
export interface ListMetricEnrichmentStatusOptions extends OperationOptions {
    skip?: number;
}

// @public
export interface ListMetricSeriesDefinitionsOptions extends OperationOptions {
    dimensionFilter?: Record<string, string[]>;
    skip?: number;
}

// @public
export type LogAnalyticsAuthBasic = {
    authenticationType: "Basic";
};

// @public
export type LogAnalyticsAuthServicePrincipal = {
    authenticationType: "ServicePrincipal";
    credentialId: string;
};

// @public
export type LogAnalyticsAuthServicePrincipalInKeyVault = {
    authenticationType: "ServicePrincipalInKV";
    credentialId: string;
};

// @public (undocumented)
export interface MetricAlertConfiguration {
    alertConditions?: MetricAnomalyAlertConditions;
    alertScope: MetricAnomalyAlertScope;
    detectionConfigurationId: string;
    negationOperation?: boolean;
    snoozeCondition?: MetricAnomalyAlertSnoozeCondition;
}

// @public (undocumented)
export interface MetricAnomalyAlertConditions {
    metricBoundaryCondition?: MetricBoundaryCondition;
    severityCondition?: SeverityCondition;
}

// @public
export type MetricAnomalyAlertConfigurationsOperator = "AND" | "OR" | "XOR";

// @public
export type MetricAnomalyAlertScope = {
    scopeType: "All";
} | {
    scopeType: "Dimension";
    dimensionAnomalyScope: DimensionKey;
} | {
    scopeType: "TopN";
    topNAnomalyScope: TopNGroupScope;
};

// @public (undocumented)
export interface MetricAnomalyAlertSnoozeCondition {
    autoSnooze: number;
    onlyForSuccessive: boolean;
    snoozeScope: SnoozeScope;
}

// @public
export type MetricAnomalyFeedback = {
    feedbackType: "Anomaly";
    startTime: Date;
    endTime: Date;
    value: "AutoDetect" | "Anomaly" | "NotAnomaly";
    readonly anomalyDetectionConfigurationId?: string;
    readonly anomalyDetectionConfigurationSnapshot?: AnomalyDetectionConfiguration;
} & MetricFeedbackCommon;

// @public
export type MetricBoundaryCondition = {
    direction: "Down";
    lower: number;
    metricId?: string;
    triggerForMissing?: boolean;
    type?: "Value" | "Mean";
} | {
    direction: "Up";
    upper: number;
    metricId?: string;
    triggerForMissing?: boolean;
    type?: "Value" | "Mean";
} | {
    lower: number;
    upper: number;
    direction: "Both";
    metricId?: string;
    triggerForMissing?: boolean;
    type?: "Value" | "Mean";
};

// @public
export type MetricChangePointFeedback = {
    feedbackType: "ChangePoint";
    startTime: Date;
    value: "AutoDetect" | "ChangePoint" | "NotChangePoint";
} & MetricFeedbackCommon;

// @public
export type MetricCommentFeedback = {
    feedbackType: "Comment";
    startTime?: Date;
    endTime?: Date;
    comment: string;
} & MetricFeedbackCommon;

// @public
export type MetricDetectionCondition = DetectionConditionsCommon;

// @public
export type MetricDetectionConditionPatch = DetectionConditionsCommonPatch;

// @public
export interface MetricEnrichedSeriesData {
    expectedValues?: number[];
    isAnomaly?: boolean[];
    lowerBounds?: number[];
    periods?: number[];
    series: DimensionKey;
    timestamps?: Date[];
    upperBounds?: number[];
    values?: number[];
}

// @public
export interface MetricEnrichmentStatusPageResponse extends Array<EnrichmentStatus> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export interface MetricFeedbackCommon {
    readonly createdOn?: Date;
    dimensionKey: DimensionKey;
    readonly id?: string;
    metricId: string;
    readonly userPrincipal?: string;
}

// @public
export interface MetricFeedbackPageResponse extends Array<MetricFeedbackUnion> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export type MetricFeedbackUnion = MetricAnomalyFeedback | MetricChangePointFeedback | MetricCommentFeedback | MetricPeriodFeedback;

// @public
export type MetricPeriodFeedback = {
    feedbackType: "Period";
    periodType: "AutoDetect" | "AssignValue";
    periodValue: number;
} & MetricFeedbackCommon;

// @public
export class MetricsAdvisorAdministrationClient {
    constructor(endpointUrl: string, credential: TokenCredential | MetricsAdvisorKeyCredential, options?: MetricsAdvisorAdministrationClientOptions);
    createAlertConfig(config: Omit<AnomalyAlertConfiguration, "id">, options?: OperationOptions): Promise<GetAnomalyAlertConfigurationResponse>;
    createDataFeed(feed: DataFeedDescriptor, operationOptions?: CreateDataFeedOptions): Promise<GetDataFeedResponse>;
    createDatasourceCredential(datasourceCredential: DatasourceCredentialUnion, options?: OperationOptions): Promise<GetCredentialEntityResponse>;
    createDetectionConfig(config: Omit<AnomalyDetectionConfiguration, "id">, options?: OperationOptions): Promise<GetAnomalyDetectionConfigurationResponse>;
    createHook(hookInfo: EmailNotificationHook | WebNotificationHook, options?: OperationOptions): Promise<GetHookResponse>;
    deleteAlertConfig(id: string, options?: OperationOptions): Promise<RestResponse>;
    deleteDataFeed(id: string, options?: OperationOptions): Promise<RestResponse>;
    deleteDatasourceCredential(id: string, options?: OperationOptions): Promise<RestResponse>;
    deleteDetectionConfig(id: string, options?: OperationOptions): Promise<RestResponse>;
    deleteHook(id: string, options?: OperationOptions): Promise<RestResponse>;
    readonly endpointUrl: string;
    getAlertConfig(id: string, options?: OperationOptions): Promise<GetAnomalyAlertConfigurationResponse>;
    getDataFeed(id: string, options?: OperationOptions): Promise<GetDataFeedResponse>;
    getDataFeedIngestionProgress(dataFeedId: string, options?: {}): Promise<GetIngestionProgressResponse>;
    getDatasourceCredential(id: string, options?: OperationOptions): Promise<GetCredentialEntityResponse>;
    getDetectionConfig(id: string, options?: OperationOptions): Promise<GetAnomalyDetectionConfigurationResponse>;
    getHook(id: string, options?: OperationOptions): Promise<GetHookResponse>;
    listAlertConfigs(detectionConfigId: string, options?: OperationOptions): PagedAsyncIterableIterator<AnomalyAlertConfiguration, AlertConfigurationsPageResponse, undefined>;
    listDataFeedIngestionStatus(dataFeedId: string, startTime: Date | string, endTime: Date | string, options?: ListDataFeedIngestionStatusOptions): PagedAsyncIterableIterator<IngestionStatus, IngestionStatusPageResponse>;
    listDataFeeds(options?: ListDataFeedsOptions): PagedAsyncIterableIterator<DataFeed, DataFeedsPageResponse>;
    listDatasourceCredential(options?: ListDatasourceCredentialsOptions): PagedAsyncIterableIterator<DatasourceCredentialUnion, CredentialsPageResponse>;
    listDetectionConfigs(metricId: string, options?: OperationOptions): PagedAsyncIterableIterator<AnomalyDetectionConfiguration, DetectionConfigurationsPageResponse, undefined>;
    listHooks(options?: ListHooksOptions): PagedAsyncIterableIterator<NotificationHookUnion, HooksPageResponse>;
    refreshDataFeedIngestion(dataFeedId: string, startTime: Date | string, endTime: Date | string, options?: OperationOptions): Promise<RestResponse>;
    updateAlertConfig(id: string, patch: Partial<Omit<AnomalyAlertConfiguration, "id">>, options?: OperationOptions): Promise<RestResponse>;
    updateDataFeed(dataFeedId: string, patch: DataFeedPatch, options?: OperationOptions): Promise<RestResponse>;
    updateDatasourceCredential(id: string, patch: DatasourceCredentialPatch, options?: OperationOptions): Promise<RestResponse>;
    updateDetectionConfig(id: string, patch: AnomalyDetectionConfigurationPatch, options?: OperationOptions): Promise<RestResponse>;
    updateHook(id: string, patch: EmailNotificationHookPatch | WebNotificationHookPatch, options?: OperationOptions): Promise<RestResponse>;
}

// @public
export interface MetricsAdvisorAdministrationClientOptions extends PipelineOptions {
}

// @public
export class MetricsAdvisorClient {
    constructor(endpointUrl: string, credential: TokenCredential | MetricsAdvisorKeyCredential, options?: MetricsAdvisorClientOptions);
    createFeedback(feedback: MetricFeedbackUnion, options?: OperationOptions): Promise<GetFeedbackResponse>;
    readonly endpointUrl: string;
    getFeedback(id: string, options?: OperationOptions): Promise<GetFeedbackResponse>;
    getIncidentRootCauses(detectionConfigId: string, incidentId: string, options?: OperationOptions): Promise<GetIncidentRootCauseResponse>;
    getMetricEnrichedSeriesData(detectionConfigId: string, startTime: Date | string, endTime: Date | string, seriesToFilter: DimensionKey[], options?: GetMetricEnrichedSeriesDataOptions): Promise<GetMetricEnrichedSeriesDataResponse>;
    getMetricSeriesData(metricId: string, startTime: Date | string, endTime: Date | string, seriesToFilter: DimensionKey[], options?: GetMetricSeriesDataOptions): Promise<GetMetricSeriesDataResponse>;
    listAlerts(alertConfigId: string, startTime: Date | string, endTime: Date | string, timeMode: AlertQueryTimeMode, options?: ListAlertsOptions): PagedAsyncIterableIterator<AnomalyAlert, AlertsPageResponse>;
    listAnomalies(alert: AnomalyAlert, options?: ListAnomaliesForAlertConfigurationOptions): PagedAsyncIterableIterator<DataPointAnomaly, AnomaliesPageResponse>;
    listAnomalies(detectionConfigId: string, startTime: Date | string, endTime: Date | string, options?: ListAnomaliesForDetectionConfigurationOptions): PagedAsyncIterableIterator<DataPointAnomaly, AnomaliesPageResponse>;
    listAnomalyDimensionValues(detectionConfigId: string, startTime: Date | string, endTime: Date | string, dimensionName: string, options?: ListAnomalyDimensionValuesOptions): PagedAsyncIterableIterator<string, DimensionValuesPageResponse>;
    listFeedback(metricId: string, options?: ListFeedbackOptions): PagedAsyncIterableIterator<MetricFeedbackUnion, MetricFeedbackPageResponse>;
    listIncidents(alert: AnomalyAlert, options?: ListIncidentsForAlertOptions): PagedAsyncIterableIterator<AnomalyIncident, IncidentsPageResponse>;
    listIncidents(detectionConfigId: string, startTime: Date | string, endTime: Date | string, options?: ListIncidentsForDetectionConfigurationOptions): PagedAsyncIterableIterator<AnomalyIncident, IncidentsPageResponse>;
    listMetricDimensionValues(metricId: string, dimensionName: string, options?: ListMetricDimensionValuesOptions): PagedAsyncIterableIterator<string, DimensionValuesPageResponse>;
    listMetricEnrichmentStatus(metricId: string, startTime: Date | string, endTime: Date | string, options?: ListMetricEnrichmentStatusOptions): PagedAsyncIterableIterator<EnrichmentStatus, MetricEnrichmentStatusPageResponse>;
    listMetricSeriesDefinitions(metricId: string, activeSince: Date | string, options?: ListMetricSeriesDefinitionsOptions): PagedAsyncIterableIterator<MetricSeriesDefinition, MetricSeriesPageResponse>;
    }

// @public
export interface MetricsAdvisorClientOptions extends PipelineOptions {
}

// @public
export class MetricsAdvisorKeyCredential {
    constructor(subscriptionKey: string, apiKey: string);
    get apiKey(): string;
    get subscriptionKey(): string;
    updateKey(metricAdvisorKeys: MetricsAdvisorKeys): void;
}

// @public
export interface MetricsAdvisorKeys {
    apiKey?: string;
    subscriptionKey?: string;
}

// @public
export interface MetricSeriesData {
    definition: MetricSeriesDefinition;
    timestamps?: Date[];
    values?: number[];
}

// @public
export interface MetricSeriesDefinition {
    dimension: Record<string, string>;
    metricId: string;
}

// @public
export type MetricSeriesGroupDetectionCondition = DetectionConditionsCommon & {
    group: DimensionKey;
};

// @public
export interface MetricSeriesPageResponse extends Array<MetricSeriesDefinition> {
    continuationToken?: string;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
}

// @public
export type MetricSingleSeriesDetectionCondition = DetectionConditionsCommon & {
    series: DimensionKey;
};

// @public
export type MongoDbDataFeedSource = {
    dataSourceType: "MongoDB";
    connectionString: string;
    database: string;
    command: string;
    authenticationType: "Basic";
};

// @public
export type MySqlDataFeedSource = {
    dataSourceType: "MySql";
    connectionString?: string;
    query: string;
    authenticationType: "Basic";
};

// @public
export interface NotificationHook {
    readonly adminEmails?: string[];
    description?: string;
    externalLink?: string;
    readonly id?: string;
    name: string;
}

// @public
export type NotificationHookPatch = {
    hookName?: string;
    description?: string;
    externalLink?: string;
};

// @public
export type NotificationHookUnion = EmailNotificationHook | WebNotificationHook;

// @public
export type PostgreSqlDataFeedSource = {
    dataSourceType: "PostgreSql";
    connectionString?: string;
    query: string;
    authenticationType: "Basic";
};

// @public
export interface ServicePrincipalDatasourceCredential extends DatasourceCredential {
    clientId: string;
    clientSecret: string;
    tenantId: string;
    type: "ServicePrincipal";
}

// @public
export interface ServicePrincipalDatasourceCredentialPatch {
    clientId?: string;
    clientSecret?: string;
    description?: string;
    name?: string;
    tenantId?: string;
    type: "ServicePrincipal";
}

// @public
export interface ServicePrincipalInKeyVaultDatasourceCredential extends DatasourceCredential {
    keyVaultClientId: string;
    keyVaultClientSecret: string;
    keyVaultEndpoint: string;
    servicePrincipalIdNameInKV: string;
    servicePrincipalSecretNameInKV: string;
    tenantId: string;
    type: "ServicePrincipalInKV";
}

// @public
export interface ServicePrincipalInKeyVaultDatasourceCredentialPatch {
    description?: string;
    keyVaultClientId?: string;
    keyVaultClientSecret?: string;
    keyVaultEndpoint?: string;
    name?: string;
    servicePrincipalIdNameInKV?: string;
    servicePrincipalSecretNameInKV?: string;
    tenantId?: string;
    type: "ServicePrincipalInKV";
}

// @public
export type Severity = "Low" | "Medium" | "High";

// @public (undocumented)
export interface SeverityCondition {
    maxAlertSeverity: Severity;
    minAlertSeverity: Severity;
}

// @public (undocumented)
export interface SeverityFilterCondition {
    max: Severity;
    min: Severity;
}

// @public (undocumented)
export interface SmartDetectionCondition {
    anomalyDetectorDirection: AnomalyDetectorDirection;
    sensitivity: number;
    // (undocumented)
    suppressCondition: SuppressCondition;
}

// @public
export type SnoozeScope = "Metric" | "Series";

// @public
export interface SqlServerAuthBasic {
    authenticationType: "Basic";
    connectionString: string;
}

// @public
export interface SqlServerAuthConnectionString {
    authenticationType: "AzureSQLConnectionString";
    credentialId: string;
}

// @public
export interface SqlServerAuthManagedIdentity {
    authenticationType: "ManagedIdentity";
    connectionString: string;
}

// @public
export interface SqlServerAuthServicePrincipal {
    authenticationType: "ServicePrincipal";
    connectionString: string;
    credentialId: string;
}

// @public
export interface SqlServerAuthServicePrincipalInKeyVault {
    authenticationType: "ServicePrincipalInKV";
    connectionString: string;
    credentialId: string;
}

// @public
export type SqlServerAuthTypes = SqlServerAuthBasic | SqlServerAuthManagedIdentity | SqlServerAuthConnectionString | SqlServerAuthServicePrincipal | SqlServerAuthServicePrincipalInKeyVault;

// @public
export interface SqlServerConnectionStringDatasourceCredential extends DatasourceCredential {
    connectionString: string;
    type: "AzureSQLConnectionString";
}

// @public
export interface SqlServerConnectionStringDatasourceCredentialPatch {
    connectionString?: string;
    description?: string;
    name?: string;
    type: "AzureSQLConnectionString";
}

// @public
export type SqlServerDataFeedSource = {
    dataSourceType: "SqlServer";
    query: string;
} & SqlServerAuthTypes;

// @public (undocumented)
export interface SuppressCondition {
    minNumber: number;
    minRatio: number;
}

// @public (undocumented)
export interface TopNGroupScope {
    minTopCount: number;
    period: number;
    top: number;
}

// @public
export type UnknownDataFeedSource = {
    dataSourceType: "Unknown";
    dataSourceParameter: unknown;
    authenticationType: "Basic";
};

// @public (undocumented)
export interface WebhookHookParameter {
    certificateKey?: string;
    certificatePassword?: string;
    endpoint: string;
    headers?: {
        [propertyName: string]: string;
    };
    password?: string;
    username?: string;
}

// @public
export type WebNotificationHook = {
    hookType: "Webhook";
    hookParameter: WebhookHookParameter;
} & NotificationHook;

// @public
export type WebNotificationHookPatch = {
    hookType: "Webhook";
    hookParameter?: Partial<WebhookHookParameter>;
} & NotificationHookPatch;


// (No @packageDocumentation comment for this package)

```
