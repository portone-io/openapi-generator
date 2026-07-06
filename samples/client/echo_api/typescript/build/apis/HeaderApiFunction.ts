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


import { StringEnumRef } from '../models/StringEnumRef';



/**
[RequestProcessor]
* Test header parameter(s)
* Test header parameter(s)
* @param integerHeader 
* @param booleanHeader 
* @param stringHeader 
* @param enumNonrefStringHeader 
* @param enumRefStringHeader 
*/
async function testHeaderIntegerBooleanStringEnumsRequestProcessor(options: Configuration,integerHeader?: number, booleanHeader?: boolean, stringHeader?: string, enumNonrefStringHeader?: 'success' | 'failure' | 'unclassified', enumRefStringHeader?: StringEnumRef, ): Promise<RequestContext> {
    let _config = options;






    // Path Params
    const localVarPath = '/header/integer/boolean/string/enums';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Header Params
    requestContext.setHeaderParam("integer_header", ObjectSerializer.serialize(integerHeader, "number", ""));

    // Header Params
    requestContext.setHeaderParam("boolean_header", ObjectSerializer.serialize(booleanHeader, "boolean", ""));

    // Header Params
    requestContext.setHeaderParam("string_header", ObjectSerializer.serialize(stringHeader, "string", ""));

    // Header Params
    requestContext.setHeaderParam("enum_nonref_string_header", ObjectSerializer.serialize(enumNonrefStringHeader, "'success' | 'failure' | 'unclassified'", ""));

    // Header Params
    requestContext.setHeaderParam("enum_ref_string_header", ObjectSerializer.serialize(enumRefStringHeader, "StringEnumRef", ""));


    
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
* @params response Response returned by the server for a request to testHeaderIntegerBooleanStringEnums
* @throws ApiException if the response code was not in [200, 299]
*/
async function testHeaderIntegerBooleanStringEnumsWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test header parameter(s)
 * Test header parameter(s)
 * @param configuration The configuration object
 * @param integerHeader 
 * @param booleanHeader 
 * @param stringHeader 
 * @param enumNonrefStringHeader 
 * @param enumRefStringHeader 
 */
export async function testHeaderIntegerBooleanStringEnumsWithHttpInfo(
    configuration: Configuration,
    integerHeader?: number,
    booleanHeader?: boolean,
    stringHeader?: string,
    enumNonrefStringHeader?: 'success' | 'failure' | 'unclassified',
    enumRefStringHeader?: StringEnumRef
): Promise<HttpInfo<string>> {

    const requestContext = await testHeaderIntegerBooleanStringEnumsRequestProcessor(configuration,integerHeader, booleanHeader, stringHeader, enumNonrefStringHeader, enumRefStringHeader);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testHeaderIntegerBooleanStringEnumsWithHttpInfoResponseProcessor(response);
}

/**
 * Test header parameter(s)
 * Test header parameter(s)
 * @param configuration The configuration object
 * @param integerHeader 
 * @param booleanHeader 
 * @param stringHeader 
 * @param enumNonrefStringHeader 
 * @param enumRefStringHeader 
 */
export async function testHeaderIntegerBooleanStringEnums(
    configuration: Configuration,
    integerHeader?: number,
    booleanHeader?: boolean,
    stringHeader?: string,
    enumNonrefStringHeader?: 'success' | 'failure' | 'unclassified',
    enumRefStringHeader?: StringEnumRef
): Promise<string> {
    const httpInfo = await testHeaderIntegerBooleanStringEnumsWithHttpInfo(configuration, integerHeader, booleanHeader, stringHeader, enumNonrefStringHeader, enumRefStringHeader);
    return httpInfo.data;
}

