import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Pet } from '../models/Pet';
import { StringEnumRef } from '../models/StringEnumRef';
import { Tag } from '../models/Tag';



/**
[RequestProcessor]
* Test binary (gif) response body
* Test binary (gif) response body
*/
async function testBinaryGifRequestProcessor(options: Configuration,): Promise<RequestContext> {
    let _config = options;

    // Path Params
    const localVarPath = '/binary/gif';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
* @params response Response returned by the server for a request to testBinaryGif
* @throws ApiException if the response code was not in [200, 299]
*/
async function testBinaryGifWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<HttpFile >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: HttpFile = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "HttpFile", "binary"
) as HttpFile;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * Test binary (gif) response body
 * Test binary (gif) response body
 * @param configuration The configuration object
 */
export async function testBinaryGifWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<HttpFile>> {

    const requestContext = await testBinaryGifRequestProcessor(configuration,);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testBinaryGifWithHttpInfoResponseProcessor(response);
}

/**
 * Test binary (gif) response body
 * Test binary (gif) response body
 * @param configuration The configuration object
 */
export async function testBinaryGif(
    configuration: Configuration
): Promise<HttpFile> {
    const httpInfo = await testBinaryGifWithHttpInfo(configuration);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test body parameter(s)
* Test body parameter(s)
* @param body 
*/
async function testBodyApplicationOctetstreamBinaryRequestProcessor(options: Configuration,body?: HttpFile, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/body/application/octetstream/binary';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
        "application/octet-stream"
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
        ObjectSerializer.serialize(body, "HttpFile", ""),
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
* @params response Response returned by the server for a request to testBodyApplicationOctetstreamBinary
* @throws ApiException if the response code was not in [200, 299]
*/
async function testBodyApplicationOctetstreamBinaryWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test body parameter(s)
 * Test body parameter(s)
 * @param configuration The configuration object
 * @param body 
 */
export async function testBodyApplicationOctetstreamBinaryWithHttpInfo(
    configuration: Configuration,
    body?: HttpFile
): Promise<HttpInfo<string>> {

    const requestContext = await testBodyApplicationOctetstreamBinaryRequestProcessor(configuration,body);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testBodyApplicationOctetstreamBinaryWithHttpInfoResponseProcessor(response);
}

/**
 * Test body parameter(s)
 * Test body parameter(s)
 * @param configuration The configuration object
 * @param body 
 */
export async function testBodyApplicationOctetstreamBinary(
    configuration: Configuration,
    body?: HttpFile
): Promise<string> {
    const httpInfo = await testBodyApplicationOctetstreamBinaryWithHttpInfo(configuration, body);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test array of binary in multipart mime
* Test array of binary in multipart mime
* @param files 
*/
async function testBodyMultipartFormdataArrayOfBinaryRequestProcessor(options: Configuration,files: Array<HttpFile>, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'files' is not null or undefined
    if (files === null || files === undefined) {
        throw new RequiredError("BodyApi", "testBodyMultipartFormdataArrayOfBinary", "files");
    }


    // Path Params
    const localVarPath = '/body/application/octetstream/array_of_binary';

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

    if (files) {
        // TODO: replace .append with .set
        localVarFormParams.append('files', files.join(COLLECTION_FORMATS["csv"]));
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
* @params response Response returned by the server for a request to testBodyMultipartFormdataArrayOfBinary
* @throws ApiException if the response code was not in [200, 299]
*/
async function testBodyMultipartFormdataArrayOfBinaryWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test array of binary in multipart mime
 * Test array of binary in multipart mime
 * @param configuration The configuration object
 * @param files 
 */
export async function testBodyMultipartFormdataArrayOfBinaryWithHttpInfo(
    configuration: Configuration,
    files: Array<HttpFile>
): Promise<HttpInfo<string>> {

    const requestContext = await testBodyMultipartFormdataArrayOfBinaryRequestProcessor(configuration,files);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testBodyMultipartFormdataArrayOfBinaryWithHttpInfoResponseProcessor(response);
}

/**
 * Test array of binary in multipart mime
 * Test array of binary in multipart mime
 * @param configuration The configuration object
 * @param files 
 */
export async function testBodyMultipartFormdataArrayOfBinary(
    configuration: Configuration,
    files: Array<HttpFile>
): Promise<string> {
    const httpInfo = await testBodyMultipartFormdataArrayOfBinaryWithHttpInfo(configuration, files);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test single binary in multipart mime
* Test single binary in multipart mime
* @param myFile 
*/
async function testBodyMultipartFormdataSingleBinaryRequestProcessor(options: Configuration,myFile?: HttpFile, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/body/application/octetstream/single_binary';

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

    if (myFile !== undefined) {
            // TODO: replace .append with .set
            if (localVarFormParams instanceof FormData) {
                localVarFormParams.append('my-file', myFile.data, myFile.name);
            }
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
* @params response Response returned by the server for a request to testBodyMultipartFormdataSingleBinary
* @throws ApiException if the response code was not in [200, 299]
*/
async function testBodyMultipartFormdataSingleBinaryWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test single binary in multipart mime
 * Test single binary in multipart mime
 * @param configuration The configuration object
 * @param myFile 
 */
export async function testBodyMultipartFormdataSingleBinaryWithHttpInfo(
    configuration: Configuration,
    myFile?: HttpFile
): Promise<HttpInfo<string>> {

    const requestContext = await testBodyMultipartFormdataSingleBinaryRequestProcessor(configuration,myFile);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testBodyMultipartFormdataSingleBinaryWithHttpInfoResponseProcessor(response);
}

/**
 * Test single binary in multipart mime
 * Test single binary in multipart mime
 * @param configuration The configuration object
 * @param myFile 
 */
export async function testBodyMultipartFormdataSingleBinary(
    configuration: Configuration,
    myFile?: HttpFile
): Promise<string> {
    const httpInfo = await testBodyMultipartFormdataSingleBinaryWithHttpInfo(configuration, myFile);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test body parameter(s)
* Test body parameter(s)
* @param pet Pet object that needs to be added to the store
*/
async function testEchoBodyAllOfPetRequestProcessor(options: Configuration,pet?: Pet, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/echo/body/allOf/Pet';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
        "application/json"
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
        ObjectSerializer.serialize(pet, "Pet", ""),
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
* @params response Response returned by the server for a request to testEchoBodyAllOfPet
* @throws ApiException if the response code was not in [200, 299]
*/
async function testEchoBodyAllOfPetWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<Pet >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: Pet = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Pet", ""
) as Pet;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: Pet = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Pet", ""
) as Pet;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * Test body parameter(s)
 * Test body parameter(s)
 * @param configuration The configuration object
 * @param pet Pet object that needs to be added to the store
 */
export async function testEchoBodyAllOfPetWithHttpInfo(
    configuration: Configuration,
    pet?: Pet
): Promise<HttpInfo<Pet>> {

    const requestContext = await testEchoBodyAllOfPetRequestProcessor(configuration,pet);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testEchoBodyAllOfPetWithHttpInfoResponseProcessor(response);
}

/**
 * Test body parameter(s)
 * Test body parameter(s)
 * @param configuration The configuration object
 * @param pet Pet object that needs to be added to the store
 */
export async function testEchoBodyAllOfPet(
    configuration: Configuration,
    pet?: Pet
): Promise<Pet> {
    const httpInfo = await testEchoBodyAllOfPetWithHttpInfo(configuration, pet);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test free form object
* Test free form object
* @param body Free form object
*/
async function testEchoBodyFreeFormObjectResponseStringRequestProcessor(options: Configuration,body?: any, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/echo/body/FreeFormObject/response_string';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
        "application/json"
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
        ObjectSerializer.serialize(body, "any", ""),
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
* @params response Response returned by the server for a request to testEchoBodyFreeFormObjectResponseString
* @throws ApiException if the response code was not in [200, 299]
*/
async function testEchoBodyFreeFormObjectResponseStringWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test free form object
 * Test free form object
 * @param configuration The configuration object
 * @param body Free form object
 */
export async function testEchoBodyFreeFormObjectResponseStringWithHttpInfo(
    configuration: Configuration,
    body?: any
): Promise<HttpInfo<string>> {

    const requestContext = await testEchoBodyFreeFormObjectResponseStringRequestProcessor(configuration,body);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testEchoBodyFreeFormObjectResponseStringWithHttpInfoResponseProcessor(response);
}

/**
 * Test free form object
 * Test free form object
 * @param configuration The configuration object
 * @param body Free form object
 */
export async function testEchoBodyFreeFormObjectResponseString(
    configuration: Configuration,
    body?: any
): Promise<string> {
    const httpInfo = await testEchoBodyFreeFormObjectResponseStringWithHttpInfo(configuration, body);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test body parameter(s)
* Test body parameter(s)
* @param pet Pet object that needs to be added to the store
*/
async function testEchoBodyPetRequestProcessor(options: Configuration,pet?: Pet, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/echo/body/Pet';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
        "application/json"
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
        ObjectSerializer.serialize(pet, "Pet", ""),
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
* @params response Response returned by the server for a request to testEchoBodyPet
* @throws ApiException if the response code was not in [200, 299]
*/
async function testEchoBodyPetWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<Pet >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: Pet = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Pet", ""
) as Pet;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: Pet = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Pet", ""
) as Pet;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * Test body parameter(s)
 * Test body parameter(s)
 * @param configuration The configuration object
 * @param pet Pet object that needs to be added to the store
 */
export async function testEchoBodyPetWithHttpInfo(
    configuration: Configuration,
    pet?: Pet
): Promise<HttpInfo<Pet>> {

    const requestContext = await testEchoBodyPetRequestProcessor(configuration,pet);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testEchoBodyPetWithHttpInfoResponseProcessor(response);
}

/**
 * Test body parameter(s)
 * Test body parameter(s)
 * @param configuration The configuration object
 * @param pet Pet object that needs to be added to the store
 */
export async function testEchoBodyPet(
    configuration: Configuration,
    pet?: Pet
): Promise<Pet> {
    const httpInfo = await testEchoBodyPetWithHttpInfo(configuration, pet);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test empty response body
* Test empty response body
* @param pet Pet object that needs to be added to the store
*/
async function testEchoBodyPetResponseStringRequestProcessor(options: Configuration,pet?: Pet, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/echo/body/Pet/response_string';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
        "application/json"
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
        ObjectSerializer.serialize(pet, "Pet", ""),
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
* @params response Response returned by the server for a request to testEchoBodyPetResponseString
* @throws ApiException if the response code was not in [200, 299]
*/
async function testEchoBodyPetResponseStringWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test empty response body
 * Test empty response body
 * @param configuration The configuration object
 * @param pet Pet object that needs to be added to the store
 */
export async function testEchoBodyPetResponseStringWithHttpInfo(
    configuration: Configuration,
    pet?: Pet
): Promise<HttpInfo<string>> {

    const requestContext = await testEchoBodyPetResponseStringRequestProcessor(configuration,pet);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testEchoBodyPetResponseStringWithHttpInfoResponseProcessor(response);
}

/**
 * Test empty response body
 * Test empty response body
 * @param configuration The configuration object
 * @param pet Pet object that needs to be added to the store
 */
export async function testEchoBodyPetResponseString(
    configuration: Configuration,
    pet?: Pet
): Promise<string> {
    const httpInfo = await testEchoBodyPetResponseStringWithHttpInfo(configuration, pet);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test string enum response body
* Test string enum response body
* @param body String enum
*/
async function testEchoBodyStringEnumRequestProcessor(options: Configuration,body?: string, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/echo/body/string_enum';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
        "application/json"
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
        ObjectSerializer.serialize(body, "string", ""),
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
* @params response Response returned by the server for a request to testEchoBodyStringEnum
* @throws ApiException if the response code was not in [200, 299]
*/
async function testEchoBodyStringEnumWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<StringEnumRef >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: StringEnumRef = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "StringEnumRef", ""
) as StringEnumRef;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: StringEnumRef = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "StringEnumRef", ""
) as StringEnumRef;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * Test string enum response body
 * Test string enum response body
 * @param configuration The configuration object
 * @param body String enum
 */
export async function testEchoBodyStringEnumWithHttpInfo(
    configuration: Configuration,
    body?: string
): Promise<HttpInfo<StringEnumRef>> {

    const requestContext = await testEchoBodyStringEnumRequestProcessor(configuration,body);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testEchoBodyStringEnumWithHttpInfoResponseProcessor(response);
}

/**
 * Test string enum response body
 * Test string enum response body
 * @param configuration The configuration object
 * @param body String enum
 */
export async function testEchoBodyStringEnum(
    configuration: Configuration,
    body?: string
): Promise<StringEnumRef> {
    const httpInfo = await testEchoBodyStringEnumWithHttpInfo(configuration, body);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Test empty json (request body)
* Test empty json (request body)
* @param tag Tag object
*/
async function testEchoBodyTagResponseStringRequestProcessor(options: Configuration,tag?: Tag, ): Promise<RequestContext> {
    let _config = options;


    // Path Params
    const localVarPath = '/echo/body/Tag/response_string';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
        "application/json"
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
        ObjectSerializer.serialize(tag, "Tag", ""),
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
* @params response Response returned by the server for a request to testEchoBodyTagResponseString
* @throws ApiException if the response code was not in [200, 299]
*/
async function testEchoBodyTagResponseStringWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<string >> {
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
 * Test empty json (request body)
 * Test empty json (request body)
 * @param configuration The configuration object
 * @param tag Tag object
 */
export async function testEchoBodyTagResponseStringWithHttpInfo(
    configuration: Configuration,
    tag?: Tag
): Promise<HttpInfo<string>> {

    const requestContext = await testEchoBodyTagResponseStringRequestProcessor(configuration,tag);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await testEchoBodyTagResponseStringWithHttpInfoResponseProcessor(response);
}

/**
 * Test empty json (request body)
 * Test empty json (request body)
 * @param configuration The configuration object
 * @param tag Tag object
 */
export async function testEchoBodyTagResponseString(
    configuration: Configuration,
    tag?: Tag
): Promise<string> {
    const httpInfo = await testEchoBodyTagResponseStringWithHttpInfo(configuration, tag);
    return httpInfo.data;
}

