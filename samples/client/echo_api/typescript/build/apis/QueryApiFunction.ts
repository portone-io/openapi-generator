import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo, ReadableStreamType} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { DataQuery } from '../models/DataQuery';
import { Pet } from '../models/Pet';
import { StringEnumRef } from '../models/StringEnumRef';
import { TestQueryStyleDeepObjectExplodeTrueObjectAllOfQueryObjectParameter } from '../models/TestQueryStyleDeepObjectExplodeTrueObjectAllOfQueryObjectParameter';
import { TestQueryStyleFormExplodeTrueArrayStringQueryObjectParameter } from '../models/TestQueryStyleFormExplodeTrueArrayStringQueryObjectParameter';



/**
[RequestProcessor]
* @deprecated
*
* Test deprecation
* @param name name of pet (@deprecated)
*/
async function deprecatedTestRequestProcessor(options: Configuration,name?: string, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/test/deprecated';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (name !== undefined) {
        requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
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
* @params response Response returned by the server for a request to deprecatedTest
* @throws ApiException if the response code was not in [200, 299]
*/
async function deprecatedTestWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * @deprecated
 *
 * Test deprecation
 * @param configuration The configuration object
 * @param name name of pet (@deprecated)
 */
export async function deprecatedTestWithHttpInfo(
    configuration: Configuration,
    name?: string
): Promise<HttpInfo<string>> {

    const requestContext = await deprecatedTestRequestProcessor(configuration,name);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await deprecatedTestWithHttpInfoResponseProcessor(response);
}

/**
 * @deprecated
 *
 * Test deprecation
 * @param configuration The configuration object
 * @param name name of pet (@deprecated)
 */
export async function deprecatedTest(
    configuration: Configuration,
    name?: string
): Promise<string> {
    const httpInfo = await deprecatedTestWithHttpInfo(configuration, name);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test query parameter(s)
* Test query parameter(s)
* @param enumNonrefStringQuery 
* @param enumRefStringQuery 
*/
async function testEnumRefStringRequestProcessor(options: Configuration,enumNonrefStringQuery?: 'success' | 'failure' | 'unclassified', enumRefStringQuery?: StringEnumRef, ): Promise<RequestContext> {
    let _config = options;



    // Path Params
    const localVarPath = '/query/enum_ref_string';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (enumNonrefStringQuery !== undefined) {
        requestContext.setQueryParam("enum_nonref_string_query", ObjectSerializer.serialize(enumNonrefStringQuery, "'success' | 'failure' | 'unclassified'", ""));
    }

    // Query Params
    if (enumRefStringQuery !== undefined) {
        requestContext.setQueryParam("enum_ref_string_query", ObjectSerializer.serialize(enumRefStringQuery, "StringEnumRef", ""));
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
* @params response Response returned by the server for a request to testEnumRefString
* @throws ApiException if the response code was not in [200, 299]
*/
async function testEnumRefStringWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param enumNonrefStringQuery 
 * @param enumRefStringQuery 
 */
export async function testEnumRefStringWithHttpInfo(
    configuration: Configuration,
    enumNonrefStringQuery?: 'success' | 'failure' | 'unclassified',
    enumRefStringQuery?: StringEnumRef
): Promise<HttpInfo<string>> {

    const requestContext = await testEnumRefStringRequestProcessor(configuration,enumNonrefStringQuery, enumRefStringQuery);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testEnumRefStringWithHttpInfoResponseProcessor(response);
}

/**
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param enumNonrefStringQuery 
 * @param enumRefStringQuery 
 */
export async function testEnumRefString(
    configuration: Configuration,
    enumNonrefStringQuery?: 'success' | 'failure' | 'unclassified',
    enumRefStringQuery?: StringEnumRef
): Promise<string> {
    const httpInfo = await testEnumRefStringWithHttpInfo(configuration, enumNonrefStringQuery, enumRefStringQuery);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test query parameter(s)
* Test query parameter(s)
* @param datetimeQuery 
* @param dateQuery 
* @param stringQuery 
*/
async function testQueryDatetimeDateStringRequestProcessor(options: Configuration,datetimeQuery?: Date, dateQuery?: string, stringQuery?: string, ): Promise<RequestContext> {
    let _config = options;




    // Path Params
    const localVarPath = '/query/datetime/date/string';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (datetimeQuery !== undefined) {
        requestContext.setQueryParam("datetime_query", ObjectSerializer.serialize(datetimeQuery, "Date", "date-time"));
    }

    // Query Params
    if (dateQuery !== undefined) {
        requestContext.setQueryParam("date_query", ObjectSerializer.serialize(dateQuery, "string", "date"));
    }

    // Query Params
    if (stringQuery !== undefined) {
        requestContext.setQueryParam("string_query", ObjectSerializer.serialize(stringQuery, "string", ""));
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
* @params response Response returned by the server for a request to testQueryDatetimeDateString
* @throws ApiException if the response code was not in [200, 299]
*/
async function testQueryDatetimeDateStringWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param datetimeQuery 
 * @param dateQuery 
 * @param stringQuery 
 */
export async function testQueryDatetimeDateStringWithHttpInfo(
    configuration: Configuration,
    datetimeQuery?: Date,
    dateQuery?: string,
    stringQuery?: string
): Promise<HttpInfo<string>> {

    const requestContext = await testQueryDatetimeDateStringRequestProcessor(configuration,datetimeQuery, dateQuery, stringQuery);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testQueryDatetimeDateStringWithHttpInfoResponseProcessor(response);
}

/**
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param datetimeQuery 
 * @param dateQuery 
 * @param stringQuery 
 */
export async function testQueryDatetimeDateString(
    configuration: Configuration,
    datetimeQuery?: Date,
    dateQuery?: string,
    stringQuery?: string
): Promise<string> {
    const httpInfo = await testQueryDatetimeDateStringWithHttpInfo(configuration, datetimeQuery, dateQuery, stringQuery);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test query parameter(s)
* Test query parameter(s)
* @param integerQuery 
* @param booleanQuery 
* @param stringQuery 
*/
async function testQueryIntegerBooleanStringRequestProcessor(options: Configuration,integerQuery?: number, booleanQuery?: boolean, stringQuery?: string, ): Promise<RequestContext> {
    let _config = options;




    // Path Params
    const localVarPath = '/query/integer/boolean/string';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (integerQuery !== undefined) {
        requestContext.setQueryParam("integer_query", ObjectSerializer.serialize(integerQuery, "number", ""));
    }

    // Query Params
    if (booleanQuery !== undefined) {
        requestContext.setQueryParam("boolean_query", ObjectSerializer.serialize(booleanQuery, "boolean", ""));
    }

    // Query Params
    if (stringQuery !== undefined) {
        requestContext.setQueryParam("string_query", ObjectSerializer.serialize(stringQuery, "string", ""));
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
* @params response Response returned by the server for a request to testQueryIntegerBooleanString
* @throws ApiException if the response code was not in [200, 299]
*/
async function testQueryIntegerBooleanStringWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param integerQuery 
 * @param booleanQuery 
 * @param stringQuery 
 */
export async function testQueryIntegerBooleanStringWithHttpInfo(
    configuration: Configuration,
    integerQuery?: number,
    booleanQuery?: boolean,
    stringQuery?: string
): Promise<HttpInfo<string>> {

    const requestContext = await testQueryIntegerBooleanStringRequestProcessor(configuration,integerQuery, booleanQuery, stringQuery);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testQueryIntegerBooleanStringWithHttpInfoResponseProcessor(response);
}

/**
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param integerQuery 
 * @param booleanQuery 
 * @param stringQuery 
 */
export async function testQueryIntegerBooleanString(
    configuration: Configuration,
    integerQuery?: number,
    booleanQuery?: boolean,
    stringQuery?: string
): Promise<string> {
    const httpInfo = await testQueryIntegerBooleanStringWithHttpInfo(configuration, integerQuery, booleanQuery, stringQuery);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test query parameter(s)
* Test query parameter(s)
* @param queryObject 
*/
async function testQueryStyleDeepObjectExplodeTrueObjectRequestProcessor(options: Configuration,queryObject?: Pet, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/query/style_deepObject/explode_true/object';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (queryObject !== undefined) {
        const serializedParams = ObjectSerializer.serialize(queryObject, "Pet", "");
        for (const key of Object.keys(serializedParams)) {
            requestContext.setQueryParam(key, serializedParams[key]);
        }
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
* @params response Response returned by the server for a request to testQueryStyleDeepObjectExplodeTrueObject
* @throws ApiException if the response code was not in [200, 299]
*/
async function testQueryStyleDeepObjectExplodeTrueObjectWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleDeepObjectExplodeTrueObjectWithHttpInfo(
    configuration: Configuration,
    queryObject?: Pet
): Promise<HttpInfo<string>> {

    const requestContext = await testQueryStyleDeepObjectExplodeTrueObjectRequestProcessor(configuration,queryObject);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testQueryStyleDeepObjectExplodeTrueObjectWithHttpInfoResponseProcessor(response);
}

/**
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleDeepObjectExplodeTrueObject(
    configuration: Configuration,
    queryObject?: Pet
): Promise<string> {
    const httpInfo = await testQueryStyleDeepObjectExplodeTrueObjectWithHttpInfo(configuration, queryObject);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test query parameter(s)
* Test query parameter(s)
* @param queryObject 
*/
async function testQueryStyleDeepObjectExplodeTrueObjectAllOfRequestProcessor(options: Configuration,queryObject?: TestQueryStyleDeepObjectExplodeTrueObjectAllOfQueryObjectParameter, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/query/style_deepObject/explode_true/object/allOf';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (queryObject !== undefined) {
        const serializedParams = ObjectSerializer.serialize(queryObject, "TestQueryStyleDeepObjectExplodeTrueObjectAllOfQueryObjectParameter", "");
        for (const key of Object.keys(serializedParams)) {
            requestContext.setQueryParam(key, serializedParams[key]);
        }
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
* @params response Response returned by the server for a request to testQueryStyleDeepObjectExplodeTrueObjectAllOf
* @throws ApiException if the response code was not in [200, 299]
*/
async function testQueryStyleDeepObjectExplodeTrueObjectAllOfWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleDeepObjectExplodeTrueObjectAllOfWithHttpInfo(
    configuration: Configuration,
    queryObject?: TestQueryStyleDeepObjectExplodeTrueObjectAllOfQueryObjectParameter
): Promise<HttpInfo<string>> {

    const requestContext = await testQueryStyleDeepObjectExplodeTrueObjectAllOfRequestProcessor(configuration,queryObject);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testQueryStyleDeepObjectExplodeTrueObjectAllOfWithHttpInfoResponseProcessor(response);
}

/**
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleDeepObjectExplodeTrueObjectAllOf(
    configuration: Configuration,
    queryObject?: TestQueryStyleDeepObjectExplodeTrueObjectAllOfQueryObjectParameter
): Promise<string> {
    const httpInfo = await testQueryStyleDeepObjectExplodeTrueObjectAllOfWithHttpInfo(configuration, queryObject);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test query parameter(s)
* Test query parameter(s)
* @param queryObject 
*/
async function testQueryStyleFormExplodeFalseArrayIntegerRequestProcessor(options: Configuration,queryObject?: Array<number>, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/query/style_form/explode_false/array_integer';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (queryObject !== undefined) {
        requestContext.setQueryParam("query_object", ObjectSerializer.serialize(queryObject, "Array<number>", ""));
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
* @params response Response returned by the server for a request to testQueryStyleFormExplodeFalseArrayInteger
* @throws ApiException if the response code was not in [200, 299]
*/
async function testQueryStyleFormExplodeFalseArrayIntegerWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleFormExplodeFalseArrayIntegerWithHttpInfo(
    configuration: Configuration,
    queryObject?: Array<number>
): Promise<HttpInfo<string>> {

    const requestContext = await testQueryStyleFormExplodeFalseArrayIntegerRequestProcessor(configuration,queryObject);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testQueryStyleFormExplodeFalseArrayIntegerWithHttpInfoResponseProcessor(response);
}

/**
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleFormExplodeFalseArrayInteger(
    configuration: Configuration,
    queryObject?: Array<number>
): Promise<string> {
    const httpInfo = await testQueryStyleFormExplodeFalseArrayIntegerWithHttpInfo(configuration, queryObject);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test query parameter(s)
* Test query parameter(s)
* @param queryObject 
*/
async function testQueryStyleFormExplodeFalseArrayStringRequestProcessor(options: Configuration,queryObject?: Array<string>, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/query/style_form/explode_false/array_string';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (queryObject !== undefined) {
        requestContext.setQueryParam("query_object", ObjectSerializer.serialize(queryObject, "Array<string>", ""));
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
* @params response Response returned by the server for a request to testQueryStyleFormExplodeFalseArrayString
* @throws ApiException if the response code was not in [200, 299]
*/
async function testQueryStyleFormExplodeFalseArrayStringWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleFormExplodeFalseArrayStringWithHttpInfo(
    configuration: Configuration,
    queryObject?: Array<string>
): Promise<HttpInfo<string>> {

    const requestContext = await testQueryStyleFormExplodeFalseArrayStringRequestProcessor(configuration,queryObject);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testQueryStyleFormExplodeFalseArrayStringWithHttpInfoResponseProcessor(response);
}

/**
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleFormExplodeFalseArrayString(
    configuration: Configuration,
    queryObject?: Array<string>
): Promise<string> {
    const httpInfo = await testQueryStyleFormExplodeFalseArrayStringWithHttpInfo(configuration, queryObject);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test query parameter(s)
* Test query parameter(s)
* @param queryObject 
*/
async function testQueryStyleFormExplodeTrueArrayStringRequestProcessor(options: Configuration,queryObject?: TestQueryStyleFormExplodeTrueArrayStringQueryObjectParameter, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/query/style_form/explode_true/array_string';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (queryObject !== undefined) {
        const serializedParams = ObjectSerializer.serialize(queryObject, "TestQueryStyleFormExplodeTrueArrayStringQueryObjectParameter", "");
        for (const key of Object.keys(serializedParams)) {
            requestContext.setQueryParam(key, serializedParams[key]);
        }
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
* @params response Response returned by the server for a request to testQueryStyleFormExplodeTrueArrayString
* @throws ApiException if the response code was not in [200, 299]
*/
async function testQueryStyleFormExplodeTrueArrayStringWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleFormExplodeTrueArrayStringWithHttpInfo(
    configuration: Configuration,
    queryObject?: TestQueryStyleFormExplodeTrueArrayStringQueryObjectParameter
): Promise<HttpInfo<string>> {

    const requestContext = await testQueryStyleFormExplodeTrueArrayStringRequestProcessor(configuration,queryObject);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testQueryStyleFormExplodeTrueArrayStringWithHttpInfoResponseProcessor(response);
}

/**
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleFormExplodeTrueArrayString(
    configuration: Configuration,
    queryObject?: TestQueryStyleFormExplodeTrueArrayStringQueryObjectParameter
): Promise<string> {
    const httpInfo = await testQueryStyleFormExplodeTrueArrayStringWithHttpInfo(configuration, queryObject);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test query parameter(s)
* Test query parameter(s)
* @param queryObject 
*/
async function testQueryStyleFormExplodeTrueObjectRequestProcessor(options: Configuration,queryObject?: Pet, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/query/style_form/explode_true/object';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (queryObject !== undefined) {
        const serializedParams = ObjectSerializer.serialize(queryObject, "Pet", "");
        for (const key of Object.keys(serializedParams)) {
            requestContext.setQueryParam(key, serializedParams[key]);
        }
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
* @params response Response returned by the server for a request to testQueryStyleFormExplodeTrueObject
* @throws ApiException if the response code was not in [200, 299]
*/
async function testQueryStyleFormExplodeTrueObjectWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleFormExplodeTrueObjectWithHttpInfo(
    configuration: Configuration,
    queryObject?: Pet
): Promise<HttpInfo<string>> {

    const requestContext = await testQueryStyleFormExplodeTrueObjectRequestProcessor(configuration,queryObject);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testQueryStyleFormExplodeTrueObjectWithHttpInfoResponseProcessor(response);
}

/**
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleFormExplodeTrueObject(
    configuration: Configuration,
    queryObject?: Pet
): Promise<string> {
    const httpInfo = await testQueryStyleFormExplodeTrueObjectWithHttpInfo(configuration, queryObject);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test query parameter(s)
* Test query parameter(s)
* @param queryObject 
*/
async function testQueryStyleFormExplodeTrueObjectAllOfRequestProcessor(options: Configuration,queryObject?: DataQuery, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/query/style_form/explode_true/object/allOf';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (queryObject !== undefined) {
        const serializedParams = ObjectSerializer.serialize(queryObject, "DataQuery", "");
        for (const key of Object.keys(serializedParams)) {
            requestContext.setQueryParam(key, serializedParams[key]);
        }
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
* @params response Response returned by the server for a request to testQueryStyleFormExplodeTrueObjectAllOf
* @throws ApiException if the response code was not in [200, 299]
*/
async function testQueryStyleFormExplodeTrueObjectAllOfWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleFormExplodeTrueObjectAllOfWithHttpInfo(
    configuration: Configuration,
    queryObject?: DataQuery
): Promise<HttpInfo<string>> {

    const requestContext = await testQueryStyleFormExplodeTrueObjectAllOfRequestProcessor(configuration,queryObject);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testQueryStyleFormExplodeTrueObjectAllOfWithHttpInfoResponseProcessor(response);
}

/**
 * Test query parameter(s)
 * Test query parameter(s)
 * @param configuration The configuration object
 * @param queryObject 
 */
export async function testQueryStyleFormExplodeTrueObjectAllOf(
    configuration: Configuration,
    queryObject?: DataQuery
): Promise<string> {
    const httpInfo = await testQueryStyleFormExplodeTrueObjectAllOfWithHttpInfo(configuration, queryObject);
    return httpInfo.data;
}

