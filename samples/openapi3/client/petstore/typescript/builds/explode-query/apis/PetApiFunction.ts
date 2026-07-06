import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo, ReadableStreamType} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiResponse } from '../models/ApiResponse';
import { Pet } from '../models/Pet';



/**
[RequestProcessor]
* 
* Add a new pet to the store
* @param pet Pet object that needs to be added to the store
*/
async function addPetRequestProcessor(options: Configuration,pet: Pet, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'pet' is not null or undefined
    if (pet === null || pet === undefined) {
        throw new RequiredError("PetApi", "addPet", "pet");
    }


    // Path Params
    const localVarPath = '/pet';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
        "application/json",
    
        "application/xml"
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
        ObjectSerializer.serialize(pet, "Pet", ""),
        contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["petstore_auth"]
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
* @params response Response returned by the server for a request to addPet
* @throws ApiException if the response code was not in [200, 299]
*/
async function addPetWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<void >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
}
if (isCodeInRange("405", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Invalid input", undefined, response.headers);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: void = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "void", ""
) as void;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * 
 * Add a new pet to the store
 * @param configuration The configuration object
 * @param pet Pet object that needs to be added to the store
 */
export async function addPetWithHttpInfo(
    configuration: Configuration,
    pet: Pet
): Promise<HttpInfo<void>> {

    const requestContext = await addPetRequestProcessor(configuration,pet);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await addPetWithHttpInfoResponseProcessor(response);
}

/**
 * 
 * Add a new pet to the store
 * @param configuration The configuration object
 * @param pet Pet object that needs to be added to the store
 */
export async function addPet(
    configuration: Configuration,
    pet: Pet
): Promise<void> {
    const httpInfo = await addPetWithHttpInfo(configuration, pet);
    return httpInfo.data;
}


/**
[RequestProcessor]
* 
* Deletes a pet
* @param petId Pet id to delete
* @param apiKey 
*/
async function deletePetRequestProcessor(options: Configuration,petId: number, apiKey?: string, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'petId' is not null or undefined
    if (petId === null || petId === undefined) {
        throw new RequiredError("PetApi", "deletePet", "petId");
    }



    // Path Params
    const localVarPath = '/pet/{petId}'
        .replace('{' + 'petId' + '}', encodeURIComponent(String(petId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Header Params
    requestContext.setHeaderParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));


    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["petstore_auth"]
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
* @params response Response returned by the server for a request to deletePet
* @throws ApiException if the response code was not in [200, 299]
*/
async function deletePetWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<void >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
}
if (isCodeInRange("400", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Invalid pet value", undefined, response.headers);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: void = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "void", ""
) as void;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * 
 * Deletes a pet
 * @param configuration The configuration object
 * @param petId Pet id to delete
 * @param apiKey 
 */
export async function deletePetWithHttpInfo(
    configuration: Configuration,
    petId: number,
    apiKey?: string
): Promise<HttpInfo<void>> {

    const requestContext = await deletePetRequestProcessor(configuration,petId, apiKey);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await deletePetWithHttpInfoResponseProcessor(response);
}

/**
 * 
 * Deletes a pet
 * @param configuration The configuration object
 * @param petId Pet id to delete
 * @param apiKey 
 */
export async function deletePet(
    configuration: Configuration,
    petId: number,
    apiKey?: string
): Promise<void> {
    const httpInfo = await deletePetWithHttpInfo(configuration, petId, apiKey);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Multiple status values can be provided with comma separated strings
* Finds Pets by status
* @param status Status values that need to be considered for filter (@deprecated)
*/
async function findPetsByStatusRequestProcessor(options: Configuration,status: Array<'available' | 'pending' | 'sold'>, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'status' is not null or undefined
    if (status === null || status === undefined) {
        throw new RequiredError("PetApi", "findPetsByStatus", "status");
    }


    // Path Params
    const localVarPath = '/pet/findByStatus';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (status !== undefined) {
        requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'available' | 'pending' | 'sold'>", ""));
    }


    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["petstore_auth"]
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
* @params response Response returned by the server for a request to findPetsByStatus
* @throws ApiException if the response code was not in [200, 299]
*/
async function findPetsByStatusWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<Array<Pet> >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: Array<Pet> = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Array<Pet>", ""
) as Array<Pet>;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}
if (isCodeInRange("400", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Invalid status value", undefined, response.headers);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: Array<Pet> = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Array<Pet>", ""
) as Array<Pet>;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * @param configuration The configuration object
 * @param status Status values that need to be considered for filter (@deprecated)
 */
export async function findPetsByStatusWithHttpInfo(
    configuration: Configuration,
    status: Array<'available' | 'pending' | 'sold'>
): Promise<HttpInfo<Array<Pet>>> {

    const requestContext = await findPetsByStatusRequestProcessor(configuration,status);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await findPetsByStatusWithHttpInfoResponseProcessor(response);
}

/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * @param configuration The configuration object
 * @param status Status values that need to be considered for filter (@deprecated)
 */
export async function findPetsByStatus(
    configuration: Configuration,
    status: Array<'available' | 'pending' | 'sold'>
): Promise<Array<Pet>> {
    const httpInfo = await findPetsByStatusWithHttpInfo(configuration, status);
    return httpInfo.data;
}


/**
[RequestProcessor]
* @deprecated
*
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
* Finds Pets by tags
* @param tags Tags to filter by
*/
async function findPetsByTagsRequestProcessor(options: Configuration,tags: Set<string>, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'tags' is not null or undefined
    if (tags === null || tags === undefined) {
        throw new RequiredError("PetApi", "findPetsByTags", "tags");
    }


    // Path Params
    const localVarPath = '/pet/findByTags';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Query Params
    if (tags !== undefined) {
        requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "Set<string>", ""));
    }


    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["petstore_auth"]
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
* @params response Response returned by the server for a request to findPetsByTags
* @throws ApiException if the response code was not in [200, 299]
*/
async function findPetsByTagsWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<Set<Pet> >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: Set<Pet> = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Set<Pet>", ""
) as Set<Pet>;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}
if (isCodeInRange("400", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Invalid tag value", undefined, response.headers);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: Set<Pet> = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Set<Pet>", ""
) as Set<Pet>;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * @deprecated
 *
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * Finds Pets by tags
 * @param configuration The configuration object
 * @param tags Tags to filter by
 */
export async function findPetsByTagsWithHttpInfo(
    configuration: Configuration,
    tags: Set<string>
): Promise<HttpInfo<Set<Pet>>> {

    const requestContext = await findPetsByTagsRequestProcessor(configuration,tags);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await findPetsByTagsWithHttpInfoResponseProcessor(response);
}

/**
 * @deprecated
 *
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * Finds Pets by tags
 * @param configuration The configuration object
 * @param tags Tags to filter by
 */
export async function findPetsByTags(
    configuration: Configuration,
    tags: Set<string>
): Promise<Set<Pet>> {
    const httpInfo = await findPetsByTagsWithHttpInfo(configuration, tags);
    return httpInfo.data;
}


/**
[RequestProcessor]
* Returns a single pet
* Find pet by ID
* @param petId ID of pet to return
*/
async function getPetByIdRequestProcessor(options: Configuration,petId: number, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'petId' is not null or undefined
    if (petId === null || petId === undefined) {
        throw new RequiredError("PetApi", "getPetById", "petId");
    }


    // Path Params
    const localVarPath = '/pet/{petId}'
        .replace('{' + 'petId' + '}', encodeURIComponent(String(petId)));

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
* @params response Response returned by the server for a request to getPetById
* @throws ApiException if the response code was not in [200, 299]
*/
async function getPetByIdWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<Pet >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: Pet = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "Pet", ""
) as Pet;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}
if (isCodeInRange("400", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Invalid ID supplied", undefined, response.headers);
}
if (isCodeInRange("404", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Pet not found", undefined, response.headers);
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
 * Returns a single pet
 * Find pet by ID
 * @param configuration The configuration object
 * @param petId ID of pet to return
 */
export async function getPetByIdWithHttpInfo(
    configuration: Configuration,
    petId: number
): Promise<HttpInfo<Pet>> {

    const requestContext = await getPetByIdRequestProcessor(configuration,petId);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await getPetByIdWithHttpInfoResponseProcessor(response);
}

/**
 * Returns a single pet
 * Find pet by ID
 * @param configuration The configuration object
 * @param petId ID of pet to return
 */
export async function getPetById(
    configuration: Configuration,
    petId: number
): Promise<Pet> {
    const httpInfo = await getPetByIdWithHttpInfo(configuration, petId);
    return httpInfo.data;
}


/**
[RequestProcessor]
* 
* Update an existing pet
* @param pet Pet object that needs to be added to the store
*/
async function updatePetRequestProcessor(options: Configuration,pet: Pet, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'pet' is not null or undefined
    if (pet === null || pet === undefined) {
        throw new RequiredError("PetApi", "updatePet", "pet");
    }


    // Path Params
    const localVarPath = '/pet';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
        "application/json",
    
        "application/xml"
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
        ObjectSerializer.serialize(pet, "Pet", ""),
        contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["petstore_auth"]
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
* @params response Response returned by the server for a request to updatePet
* @throws ApiException if the response code was not in [200, 299]
*/
async function updatePetWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<void >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
}
if (isCodeInRange("400", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Invalid ID supplied", undefined, response.headers);
}
if (isCodeInRange("404", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Pet not found", undefined, response.headers);
}
if (isCodeInRange("405", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Validation exception", undefined, response.headers);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: void = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "void", ""
) as void;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * 
 * Update an existing pet
 * @param configuration The configuration object
 * @param pet Pet object that needs to be added to the store
 */
export async function updatePetWithHttpInfo(
    configuration: Configuration,
    pet: Pet
): Promise<HttpInfo<void>> {

    const requestContext = await updatePetRequestProcessor(configuration,pet);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await updatePetWithHttpInfoResponseProcessor(response);
}

/**
 * 
 * Update an existing pet
 * @param configuration The configuration object
 * @param pet Pet object that needs to be added to the store
 */
export async function updatePet(
    configuration: Configuration,
    pet: Pet
): Promise<void> {
    const httpInfo = await updatePetWithHttpInfo(configuration, pet);
    return httpInfo.data;
}


/**
[RequestProcessor]
* 
* Updates a pet in the store with form data
* @param petId ID of pet that needs to be updated
* @param name Updated name of the pet
* @param status Updated status of the pet
*/
async function updatePetWithFormRequestProcessor(options: Configuration,petId: number, name?: string, status?: string, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'petId' is not null or undefined
    if (petId === null || petId === undefined) {
        throw new RequiredError("PetApi", "updatePetWithForm", "petId");
    }




    // Path Params
    const localVarPath = '/pet/{petId}'
        .replace('{' + 'petId' + '}', encodeURIComponent(String(petId)));

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

    if (name !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('name', name as any);
    }
    if (status !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('status', status as any);
    }

    requestContext.setBody(localVarFormParams);

    if(!useForm) {
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["petstore_auth"]
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
* @params response Response returned by the server for a request to updatePetWithForm
* @throws ApiException if the response code was not in [200, 299]
*/
async function updatePetWithFormWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<void >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
}
if (isCodeInRange("405", response.httpStatusCode)) {
throw new ApiException<undefined>(response.httpStatusCode, "Invalid input", undefined, response.headers);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: void = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "void", ""
) as void;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * 
 * Updates a pet in the store with form data
 * @param configuration The configuration object
 * @param petId ID of pet that needs to be updated
 * @param name Updated name of the pet
 * @param status Updated status of the pet
 */
export async function updatePetWithFormWithHttpInfo(
    configuration: Configuration,
    petId: number,
    name?: string,
    status?: string
): Promise<HttpInfo<void>> {

    const requestContext = await updatePetWithFormRequestProcessor(configuration,petId, name, status);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await updatePetWithFormWithHttpInfoResponseProcessor(response);
}

/**
 * 
 * Updates a pet in the store with form data
 * @param configuration The configuration object
 * @param petId ID of pet that needs to be updated
 * @param name Updated name of the pet
 * @param status Updated status of the pet
 */
export async function updatePetWithForm(
    configuration: Configuration,
    petId: number,
    name?: string,
    status?: string
): Promise<void> {
    const httpInfo = await updatePetWithFormWithHttpInfo(configuration, petId, name, status);
    return httpInfo.data;
}


/**
[RequestProcessor]
* 
* uploads an image
* @param petId ID of pet to update
* @param additionalMetadata Additional data to pass to server
* @param file file to upload
*/
async function uploadFileRequestProcessor(options: Configuration,petId: number, additionalMetadata?: string, file?: HttpFile, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'petId' is not null or undefined
    if (petId === null || petId === undefined) {
        throw new RequiredError("PetApi", "uploadFile", "petId");
    }




    // Path Params
    const localVarPath = '/pet/{petId}/uploadImage'
        .replace('{' + 'petId' + '}', encodeURIComponent(String(petId)));

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

    if (additionalMetadata !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('additionalMetadata', additionalMetadata as any);
    }
    if (file !== undefined) {
            // TODO: replace .append with .set
            if (localVarFormParams instanceof FormData) {
                localVarFormParams.append('file', file.data, file.name);
            }
    }

    requestContext.setBody(localVarFormParams);

    if(!useForm) {
        const contentType = ObjectSerializer.getPreferredMediaType([
            "multipart/form-data"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["petstore_auth"]
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
* @params response Response returned by the server for a request to uploadFile
* @throws ApiException if the response code was not in [200, 299]
*/
async function uploadFileWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<ApiResponse >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: ApiResponse = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "ApiResponse", ""
) as ApiResponse;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: ApiResponse = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "ApiResponse", ""
) as ApiResponse;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * 
 * uploads an image
 * @param configuration The configuration object
 * @param petId ID of pet to update
 * @param additionalMetadata Additional data to pass to server
 * @param file file to upload
 */
export async function uploadFileWithHttpInfo(
    configuration: Configuration,
    petId: number,
    additionalMetadata?: string,
    file?: HttpFile
): Promise<HttpInfo<ApiResponse>> {

    const requestContext = await uploadFileRequestProcessor(configuration,petId, additionalMetadata, file);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await uploadFileWithHttpInfoResponseProcessor(response);
}

/**
 * 
 * uploads an image
 * @param configuration The configuration object
 * @param petId ID of pet to update
 * @param additionalMetadata Additional data to pass to server
 * @param file file to upload
 */
export async function uploadFile(
    configuration: Configuration,
    petId: number,
    additionalMetadata?: string,
    file?: HttpFile
): Promise<ApiResponse> {
    const httpInfo = await uploadFileWithHttpInfo(configuration, petId, additionalMetadata, file);
    return httpInfo.data;
}


/**
[RequestProcessor]
* 
* uploads an image (required)
* @param petId ID of pet to update
* @param requiredFile file to upload
* @param additionalMetadata Additional data to pass to server
*/
async function uploadFileWithRequiredFileRequestProcessor(options: Configuration,petId: number, requiredFile: HttpFile, additionalMetadata?: string, ): Promise<RequestContext> {
    let _config = options;

    // verify required parameter 'petId' is not null or undefined
    if (petId === null || petId === undefined) {
        throw new RequiredError("PetApi", "uploadFileWithRequiredFile", "petId");
    }


    // verify required parameter 'requiredFile' is not null or undefined
    if (requiredFile === null || requiredFile === undefined) {
        throw new RequiredError("PetApi", "uploadFileWithRequiredFile", "requiredFile");
    }



    // Path Params
    const localVarPath = '/fake/{petId}/uploadImageWithRequiredFile'
        .replace('{' + 'petId' + '}', encodeURIComponent(String(petId)));

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

    if (additionalMetadata !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('additionalMetadata', additionalMetadata as any);
    }
    if (requiredFile !== undefined) {
            // TODO: replace .append with .set
            if (localVarFormParams instanceof FormData) {
                localVarFormParams.append('requiredFile', requiredFile.data, requiredFile.name);
            }
    }

    requestContext.setBody(localVarFormParams);

    if(!useForm) {
        const contentType = ObjectSerializer.getPreferredMediaType([
            "multipart/form-data"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["petstore_auth"]
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
* @params response Response returned by the server for a request to uploadFileWithRequiredFile
* @throws ApiException if the response code was not in [200, 299]
*/
async function uploadFileWithRequiredFileWithHttpInfoResponseProcessor(response: ResponseContext): Promise<HttpInfo<ApiResponse >> {
const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
if (isCodeInRange("200", response.httpStatusCode)) {
const body: ApiResponse = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "ApiResponse", ""
) as ApiResponse;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

// Work around for missing responses in specification, e.g. for petstore.yaml
if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
const body: ApiResponse = ObjectSerializer.deserialize(
    ObjectSerializer.parse(await response.body.text(), contentType),
    "ApiResponse", ""
) as ApiResponse;
return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
}

throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
}

/**
 * 
 * uploads an image (required)
 * @param configuration The configuration object
 * @param petId ID of pet to update
 * @param requiredFile file to upload
 * @param additionalMetadata Additional data to pass to server
 */
export async function uploadFileWithRequiredFileWithHttpInfo(
    configuration: Configuration,
    petId: number,
    requiredFile: HttpFile,
    additionalMetadata?: string
): Promise<HttpInfo<ApiResponse>> {

    const requestContext = await uploadFileWithRequiredFileRequestProcessor(configuration,petId, requiredFile, additionalMetadata);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await uploadFileWithRequiredFileWithHttpInfoResponseProcessor(response);
}

/**
 * 
 * uploads an image (required)
 * @param configuration The configuration object
 * @param petId ID of pet to update
 * @param requiredFile file to upload
 * @param additionalMetadata Additional data to pass to server
 */
export async function uploadFileWithRequiredFile(
    configuration: Configuration,
    petId: number,
    requiredFile: HttpFile,
    additionalMetadata?: string
): Promise<ApiResponse> {
    const httpInfo = await uploadFileWithRequiredFileWithHttpInfo(configuration, petId, requiredFile, additionalMetadata);
    return httpInfo.data;
}

