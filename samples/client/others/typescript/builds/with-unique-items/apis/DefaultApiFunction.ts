import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo, ReadableStreamType} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Response } from '../models/Response';



/**
[RequestProcessor]
*/
async function uniqueItemsRequestProcessor(options: Configuration,): Promise<RequestContext> {
    let _config = options;

    // Path Params
    const localVarPath = '/unique-items';

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
* @params response Response returned by the server for a request to uniqueItems
* @throws ApiException if the response code was not in [200, 299]
*/
async function uniqueItemsWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<Response >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: Response = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Response", ""
) as Response;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: Response = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Response", ""
) as Response;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * @param configuration The configuration object
 */
export async function uniqueItemsWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<Response>> {

    const requestContext = await uniqueItemsRequestProcessor(configuration,);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await uniqueItemsWithHttpInfoResponseProcessor(response);
}

/**
 * @param configuration The configuration object
 */
export async function uniqueItems(
    configuration: Configuration
): Promise<Response> {
    const httpInfo = await uniqueItemsWithHttpInfo(configuration);
    return httpInfo.data;
}

