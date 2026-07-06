// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';





/**
[RequestProcessor]
* To test HTTP basic authentication
* To test HTTP basic authentication
*/
async function testAuthHttpBasicRequestProcessor(options: Configuration,): Promise<RequestContext> {
    let _config = options;

    // Path Params
    const localVarPath = '/auth/http/basic';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["http_auth"]
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
* @params response Response returned by the server for a request to testAuthHttpBasic
* @throws ApiException if the response code was not in [200, 299]
*/
async function testAuthHttpBasicWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: string = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "string", ""
) as string;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: string = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "string", ""
) as string;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * To test HTTP basic authentication
 * To test HTTP basic authentication
 * @param configuration The configuration object
 */
export async function testAuthHttpBasicWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<string>> {

    const requestContext = await testAuthHttpBasicRequestProcessor(configuration,);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testAuthHttpBasicWithHttpInfoResponseProcessor(response);
}

/**
 * To test HTTP basic authentication
 * To test HTTP basic authentication
 * @param configuration The configuration object
 */
export async function testAuthHttpBasic(
    configuration: Configuration
): Promise<string> {
    const httpInfo = await testAuthHttpBasicWithHttpInfo(configuration);
    return httpInfo.data;
}


/**
[RequestProcessor]
* To test HTTP bearer authentication
* To test HTTP bearer authentication
*/
async function testAuthHttpBearerRequestProcessor(options: Configuration,): Promise<RequestContext> {
    let _config = options;

    // Path Params
    const localVarPath = '/auth/http/bearer';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["http_bearer_auth"]
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
* @params response Response returned by the server for a request to testAuthHttpBearer
* @throws ApiException if the response code was not in [200, 299]
*/
async function testAuthHttpBearerWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: string = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "string", ""
) as string;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: string = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "string", ""
) as string;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * To test HTTP bearer authentication
 * To test HTTP bearer authentication
 * @param configuration The configuration object
 */
export async function testAuthHttpBearerWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<string>> {

    const requestContext = await testAuthHttpBearerRequestProcessor(configuration,);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testAuthHttpBearerWithHttpInfoResponseProcessor(response);
}

/**
 * To test HTTP bearer authentication
 * To test HTTP bearer authentication
 * @param configuration The configuration object
 */
export async function testAuthHttpBearer(
    configuration: Configuration
): Promise<string> {
    const httpInfo = await testAuthHttpBearerWithHttpInfo(configuration);
    return httpInfo.data;
}

