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


import { FooGetDefaultResponse } from '../models/FooGetDefaultResponse';



/**
[RequestProcessor]
*/
async function fooGetRequestProcessor(options: Configuration,): Promise<RequestContext> {
    let _config = options;

    // Path Params
    const localVarPath = '/foo';

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
* @params response Response returned by the server for a request to fooGet
* @throws ApiException if the response code was not in [200, 299]
*/
async function fooGetWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo< void>> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("0", response.httpStatusCode)) {
const body: FooGetDefaultResponse = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "FooGetDefaultResponse", ""
) as FooGetDefaultResponse;
throw new ApiException<FooGetDefaultResponse>(response.httpStatusCode, "response", body, response.headers);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * @param configuration The configuration object
 */
export async function fooGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<void>> {

    const requestContext = await fooGetRequestProcessor(configuration,);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await fooGetWithHttpInfoResponseProcessor(response);
}

/**
 * @param configuration The configuration object
 */
export async function fooGet(
    configuration: Configuration
): Promise<void> {
    const httpInfo = await fooGetWithHttpInfo(configuration);
    return httpInfo.data;
}

