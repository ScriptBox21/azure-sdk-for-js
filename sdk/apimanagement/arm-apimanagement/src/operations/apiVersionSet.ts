/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/apiVersionSetMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ApiVersionSet. */
export class ApiVersionSet {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ApiVersionSet.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a collection of API Version Sets in the specified service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiVersionSetListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: Models.ApiVersionSetListByServiceOptionalParams): Promise<Models.ApiVersionSetListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.ApiVersionSetCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: Models.ApiVersionSetListByServiceOptionalParams, callback: msRest.ServiceCallback<Models.ApiVersionSetCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: Models.ApiVersionSetListByServiceOptionalParams | msRest.ServiceCallback<Models.ApiVersionSetCollection>, callback?: msRest.ServiceCallback<Models.ApiVersionSetCollection>): Promise<Models.ApiVersionSetListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.ApiVersionSetListByServiceResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the Api Version Set specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiVersionSetGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, versionSetId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiVersionSetGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, versionSetId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, versionSetId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, versionSetId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ApiVersionSetGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        versionSetId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.ApiVersionSetGetEntityTagResponse>;
  }

  /**
   * Gets the details of the Api Version Set specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiVersionSetGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, versionSetId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiVersionSetGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, versionSetId: string, callback: msRest.ServiceCallback<Models.ApiVersionSetContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, versionSetId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiVersionSetContract>): void;
  get(resourceGroupName: string, serviceName: string, versionSetId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiVersionSetContract>, callback?: msRest.ServiceCallback<Models.ApiVersionSetContract>): Promise<Models.ApiVersionSetGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        versionSetId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApiVersionSetGetResponse>;
  }

  /**
   * Creates or Updates a Api Version Set.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param parameters Create or update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiVersionSetCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, versionSetId: string, parameters: Models.ApiVersionSetContract, options?: Models.ApiVersionSetCreateOrUpdateOptionalParams): Promise<Models.ApiVersionSetCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param parameters Create or update parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, versionSetId: string, parameters: Models.ApiVersionSetContract, callback: msRest.ServiceCallback<Models.ApiVersionSetContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param parameters Create or update parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, versionSetId: string, parameters: Models.ApiVersionSetContract, options: Models.ApiVersionSetCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.ApiVersionSetContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, versionSetId: string, parameters: Models.ApiVersionSetContract, options?: Models.ApiVersionSetCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.ApiVersionSetContract>, callback?: msRest.ServiceCallback<Models.ApiVersionSetContract>): Promise<Models.ApiVersionSetCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        versionSetId,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ApiVersionSetCreateOrUpdateResponse>;
  }

  /**
   * Updates the details of the Api VersionSet specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiVersionSetUpdateResponse>
   */
  update(resourceGroupName: string, serviceName: string, versionSetId: string, parameters: Models.ApiVersionSetUpdateParameters, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiVersionSetUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, versionSetId: string, parameters: Models.ApiVersionSetUpdateParameters, ifMatch: string, callback: msRest.ServiceCallback<Models.ApiVersionSetContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, versionSetId: string, parameters: Models.ApiVersionSetUpdateParameters, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiVersionSetContract>): void;
  update(resourceGroupName: string, serviceName: string, versionSetId: string, parameters: Models.ApiVersionSetUpdateParameters, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiVersionSetContract>, callback?: msRest.ServiceCallback<Models.ApiVersionSetContract>): Promise<Models.ApiVersionSetUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        versionSetId,
        parameters,
        ifMatch,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ApiVersionSetUpdateResponse>;
  }

  /**
   * Deletes specific Api Version Set.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, versionSetId: string, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, versionSetId: string, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management
   * service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, versionSetId: string, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, versionSetId: string, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        versionSetId,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists a collection of API Version Sets in the specified service instance.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiVersionSetListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: Models.ApiVersionSetListByServiceNextOptionalParams): Promise<Models.ApiVersionSetListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApiVersionSetCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: Models.ApiVersionSetListByServiceNextOptionalParams, callback: msRest.ServiceCallback<Models.ApiVersionSetCollection>): void;
  listByServiceNext(nextPageLink: string, options?: Models.ApiVersionSetListByServiceNextOptionalParams | msRest.ServiceCallback<Models.ApiVersionSetCollection>, callback?: msRest.ServiceCallback<Models.ApiVersionSetCollection>): Promise<Models.ApiVersionSetListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.ApiVersionSetListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApiVersionSetCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets/{versionSetId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.versionSetId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.ApiVersionSetGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ApiVersionSetGetEntityTagHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets/{versionSetId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.versionSetId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApiVersionSetContract,
      headersMapper: Mappers.ApiVersionSetGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ApiVersionSetGetHeaders
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets/{versionSetId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.versionSetId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApiVersionSetContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiVersionSetContract,
      headersMapper: Mappers.ApiVersionSetCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.ApiVersionSetContract,
      headersMapper: Mappers.ApiVersionSetCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ApiVersionSetCreateOrUpdateHeaders
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets/{versionSetId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.versionSetId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApiVersionSetUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiVersionSetContract,
      headersMapper: Mappers.ApiVersionSetUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ApiVersionSetUpdateHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets/{versionSetId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.versionSetId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByServiceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApiVersionSetCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
