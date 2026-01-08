import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Order } from '../models/Order.ts';



/**
[RequestProcessor]
* For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
* Delete purchase order by ID
* @param orderId ID of the order that needs to be deleted
*/
async function deleteOrderRequestProcessor(options: Configuration,orderId: string, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'orderId' is not null or undefined
    if (orderId === null || orderId === undefined) {
        throw new RequiredError("StoreApi", "deleteOrder", "orderId");
    }


    // Path Params
    const localVarPath = '/store/order/{orderId}'
        .replace('{' + 'orderId' + '}', encodeURIComponent(String(orderId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    
    const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
        await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
}

/**
[ResponseProcessor]
* Unwraps the actual response sent by the server from the response context and deserializes the response content
* to the expected objects
*
* @params response Response returned by the server for a request to deleteOrder
* @throws ApiException if the response code was not in [200, 299]
*/
async function deleteOrderWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo< void>> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("400", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Invalid ID supplied", undefined, response.headers);
}
if (isCodeInRange("404", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Order not found", undefined, response.headers);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
}

throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * Delete purchase order by ID
 * @param configuration The configuration object
 * @param orderId ID of the order that needs to be deleted
 */
export async function deleteOrderWithHttpInfo(
    configuration: Configuration,
    orderId: string
): Promise<HttpInfo<void>> {

    const requestContext = await deleteOrderRequestProcessor(configuration,orderId);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await deleteOrderWithHttpInfoResponseProcessor(response);
}

/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * Delete purchase order by ID
 * @param configuration The configuration object
 * @param orderId ID of the order that needs to be deleted
 */
export async function deleteOrder(
    configuration: Configuration,
    orderId: string
): Promise<void> {
    const httpInfo = await deleteOrderWithHttpInfo(configuration, orderId);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Returns a map of status codes to quantities
* Returns pet inventories by status
*/
async function getInventoryRequestProcessor(options: Configuration,): Promise<RequestContext> {
    let _config = options;

    // Path Params
    const localVarPath = '/store/inventory';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["api_key"]
    if (authMethod?.applySecurityAuthentication) {
        await authMethod?.applySecurityAuthentication(requestContext);
    }
    
    const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
        await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
}

/**
[ResponseProcessor]
* Unwraps the actual response sent by the server from the response context and deserializes the response content
* to the expected objects
*
* @params response Response returned by the server for a request to getInventory
* @throws ApiException if the response code was not in [200, 299]
*/
async function getInventoryWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<{ [key: string]: number; } >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: { [key: string]: number; } = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "{ [key: string]: number; }", "int32"
) as { [key: string]: number; };
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: { [key: string]: number; } = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "{ [key: string]: number; }", "int32"
) as { [key: string]: number; };
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * @param configuration The configuration object
 */
export async function getInventoryWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<{ [key: string]: number; }>> {

    const requestContext = await getInventoryRequestProcessor(configuration,);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await getInventoryWithHttpInfoResponseProcessor(response);
}

/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * @param configuration The configuration object
 */
export async function getInventory(
    configuration: Configuration
): Promise<{ [key: string]: number; }> {
    const httpInfo = await getInventoryWithHttpInfo(configuration);
    return httpInfo.data;
}


/**
[RequestProcessor]
* For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions
* Find purchase order by ID
* @param orderId ID of pet that needs to be fetched
*/
async function getOrderByIdRequestProcessor(options: Configuration,orderId: number, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'orderId' is not null or undefined
    if (orderId === null || orderId === undefined) {
        throw new RequiredError("StoreApi", "getOrderById", "orderId");
    }


    // Path Params
    const localVarPath = '/store/order/{orderId}'
        .replace('{' + 'orderId' + '}', encodeURIComponent(String(orderId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    
    const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
        await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
}

/**
[ResponseProcessor]
* Unwraps the actual response sent by the server from the response context and deserializes the response content
* to the expected objects
*
* @params response Response returned by the server for a request to getOrderById
* @throws ApiException if the response code was not in [200, 299]
*/
async function getOrderByIdWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<Order >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: Order = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Order", ""
) as Order;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}
if (isCodeInRange("400", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Invalid ID supplied", undefined, response.headers);
}
if (isCodeInRange("404", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Order not found", undefined, response.headers);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: Order = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Order", ""
) as Order;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions
 * Find purchase order by ID
 * @param configuration The configuration object
 * @param orderId ID of pet that needs to be fetched
 */
export async function getOrderByIdWithHttpInfo(
    configuration: Configuration,
    orderId: number
): Promise<HttpInfo<Order>> {

    const requestContext = await getOrderByIdRequestProcessor(configuration,orderId);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await getOrderByIdWithHttpInfoResponseProcessor(response);
}

/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions
 * Find purchase order by ID
 * @param configuration The configuration object
 * @param orderId ID of pet that needs to be fetched
 */
export async function getOrderById(
    configuration: Configuration,
    orderId: number
): Promise<Order> {
    const httpInfo = await getOrderByIdWithHttpInfo(configuration, orderId);
    return httpInfo.data;
}


/**
[RequestProcessor]
* 
* Place an order for a pet
* @param order order placed for purchasing the pet
*/
async function placeOrderRequestProcessor(options: Configuration,order: Order, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'order' is not null or undefined
    if (order === null || order === undefined) {
        throw new RequiredError("StoreApi", "placeOrder", "order");
    }


    // Path Params
    const localVarPath = '/store/order';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
        "application/json"
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
        ObjectSerializer.serialize(order, "Order", ""),
        contentType
    );
    requestContext.setBody(serializedBody);

    
    const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
        await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
}

/**
[ResponseProcessor]
* Unwraps the actual response sent by the server from the response context and deserializes the response content
* to the expected objects
*
* @params response Response returned by the server for a request to placeOrder
* @throws ApiException if the response code was not in [200, 299]
*/
async function placeOrderWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<Order >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: Order = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Order", ""
) as Order;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}
if (isCodeInRange("400", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Invalid Order", undefined, response.headers);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: Order = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Order", ""
) as Order;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * 
 * Place an order for a pet
 * @param configuration The configuration object
 * @param order order placed for purchasing the pet
 */
export async function placeOrderWithHttpInfo(
    configuration: Configuration,
    order: Order
): Promise<HttpInfo<Order>> {

    const requestContext = await placeOrderRequestProcessor(configuration,order);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await placeOrderWithHttpInfoResponseProcessor(response);
}

/**
 * 
 * Place an order for a pet
 * @param configuration The configuration object
 * @param order order placed for purchasing the pet
 */
export async function placeOrder(
    configuration: Configuration,
    order: Order
): Promise<Order> {
    const httpInfo = await placeOrderWithHttpInfo(configuration, order);
    return httpInfo.data;
}

