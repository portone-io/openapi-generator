import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo, ReadableStreamType} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { TestFormObjectMultipartRequestMarker } from '../models/TestFormObjectMultipartRequestMarker';



/**
[RequestProcessor]
* Test form parameter(s)
* Test form parameter(s)
* @param integerForm 
* @param booleanForm 
* @param stringForm 
*/
async function testFormIntegerBooleanStringRequestProcessor(options: Configuration,integerForm?: number, booleanForm?: boolean, stringForm?: string, ): Promise<RequestContext> {
    let _config = options;




    // Path Params
    const localVarPath = '/form/integer/boolean/string';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Form Params
    const useForm = canConsumeForm([
        'application/x-www-form-urlencoded',
    ]);

    let localVarFormParams
    if (useForm) {
        localVarFormParams = new FormData();
    } else {
        localVarFormParams = new URLSearchParams();
    }

    if (integerForm !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('integer_form', integerForm as any);
    }
    if (booleanForm !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('boolean_form', booleanForm as any);
    }
    if (stringForm !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('string_form', stringForm as any);
    }

    requestContext.setBody(localVarFormParams);

    if(!useForm) {
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
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
* @params response Response returned by the server for a request to testFormIntegerBooleanString
* @throws ApiException if the response code was not in [200, 299]
*/
async function testFormIntegerBooleanStringWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test form parameter(s)
 * Test form parameter(s)
 * @param configuration The configuration object
 * @param integerForm 
 * @param booleanForm 
 * @param stringForm 
 */
export async function testFormIntegerBooleanStringWithHttpInfo(
    configuration: Configuration,
    integerForm?: number,
    booleanForm?: boolean,
    stringForm?: string
): Promise<HttpInfo<string>> {

    const requestContext = await testFormIntegerBooleanStringRequestProcessor(configuration,integerForm, booleanForm, stringForm);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testFormIntegerBooleanStringWithHttpInfoResponseProcessor(response);
}

/**
 * Test form parameter(s)
 * Test form parameter(s)
 * @param configuration The configuration object
 * @param integerForm 
 * @param booleanForm 
 * @param stringForm 
 */
export async function testFormIntegerBooleanString(
    configuration: Configuration,
    integerForm?: number,
    booleanForm?: boolean,
    stringForm?: string
): Promise<string> {
    const httpInfo = await testFormIntegerBooleanStringWithHttpInfo(configuration, integerForm, booleanForm, stringForm);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test form parameter(s) for multipart schema
* Test form parameter(s) for multipart schema
* @param marker 
*/
async function testFormObjectMultipartRequestProcessor(options: Configuration,marker: TestFormObjectMultipartRequestMarker, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'marker' is not null or undefined
    if (marker === null || marker === undefined) {
        throw new RequiredError("FormApi", "testFormObjectMultipart", "marker");
    }


    // Path Params
    const localVarPath = '/form/object/multipart';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Form Params
    const useForm = canConsumeForm([
        'multipart/form-data',
    ]);

    let localVarFormParams
    if (useForm) {
        localVarFormParams = new FormData();
    } else {
        localVarFormParams = new URLSearchParams();
    }

    if (marker !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('marker', marker as any);
    }

    requestContext.setBody(localVarFormParams);

    if(!useForm) {
        const contentType = ObjectSerializer.getPreferredMediaType([
            "multipart/form-data"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
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
* @params response Response returned by the server for a request to testFormObjectMultipart
* @throws ApiException if the response code was not in [200, 299]
*/
async function testFormObjectMultipartWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test form parameter(s) for multipart schema
 * Test form parameter(s) for multipart schema
 * @param configuration The configuration object
 * @param marker 
 */
export async function testFormObjectMultipartWithHttpInfo(
    configuration: Configuration,
    marker: TestFormObjectMultipartRequestMarker
): Promise<HttpInfo<string>> {

    const requestContext = await testFormObjectMultipartRequestProcessor(configuration,marker);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testFormObjectMultipartWithHttpInfoResponseProcessor(response);
}

/**
 * Test form parameter(s) for multipart schema
 * Test form parameter(s) for multipart schema
 * @param configuration The configuration object
 * @param marker 
 */
export async function testFormObjectMultipart(
    configuration: Configuration,
    marker: TestFormObjectMultipartRequestMarker
): Promise<string> {
    const httpInfo = await testFormObjectMultipartWithHttpInfo(configuration, marker);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test form parameter(s) for oneOf schema
* Test form parameter(s) for oneOf schema
* @param form1 
* @param form2 
* @param form3 
* @param form4 
* @param id 
* @param name 
*/
async function testFormOneofRequestProcessor(options: Configuration,form1?: string, form2?: number, form3?: string, form4?: boolean, id?: number, name?: string, ): Promise<RequestContext> {
    let _config = options;







    // Path Params
    const localVarPath = '/form/oneof';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Form Params
    const useForm = canConsumeForm([
        'application/x-www-form-urlencoded',
    ]);

    let localVarFormParams
    if (useForm) {
        localVarFormParams = new FormData();
    } else {
        localVarFormParams = new URLSearchParams();
    }

    if (form1 !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('form1', form1 as any);
    }
    if (form2 !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('form2', form2 as any);
    }
    if (form3 !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('form3', form3 as any);
    }
    if (form4 !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('form4', form4 as any);
    }
    if (id !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('id', id as any);
    }
    if (name !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('name', name as any);
    }

    requestContext.setBody(localVarFormParams);

    if(!useForm) {
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
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
* @params response Response returned by the server for a request to testFormOneof
* @throws ApiException if the response code was not in [200, 299]
*/
async function testFormOneofWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test form parameter(s) for oneOf schema
 * Test form parameter(s) for oneOf schema
 * @param configuration The configuration object
 * @param form1 
 * @param form2 
 * @param form3 
 * @param form4 
 * @param id 
 * @param name 
 */
export async function testFormOneofWithHttpInfo(
    configuration: Configuration,
    form1?: string,
    form2?: number,
    form3?: string,
    form4?: boolean,
    id?: number,
    name?: string
): Promise<HttpInfo<string>> {

    const requestContext = await testFormOneofRequestProcessor(configuration,form1, form2, form3, form4, id, name);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testFormOneofWithHttpInfoResponseProcessor(response);
}

/**
 * Test form parameter(s) for oneOf schema
 * Test form parameter(s) for oneOf schema
 * @param configuration The configuration object
 * @param form1 
 * @param form2 
 * @param form3 
 * @param form4 
 * @param id 
 * @param name 
 */
export async function testFormOneof(
    configuration: Configuration,
    form1?: string,
    form2?: number,
    form3?: string,
    form4?: boolean,
    id?: number,
    name?: string
): Promise<string> {
    const httpInfo = await testFormOneofWithHttpInfo(configuration, form1, form2, form3, form4, id, name);
    return httpInfo.data;
}

