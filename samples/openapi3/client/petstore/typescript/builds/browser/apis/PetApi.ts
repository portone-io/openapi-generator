// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiResponse } from '../models/ApiResponse';
import { Pet } from '../models/Pet';

/**
 * no description
 */
export class PetApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * 
     * Add a new pet to the store
     * @param pet Pet object that needs to be added to the store
     */
    public async addPet(pet: Pet, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
     * 
     * Deletes a pet
     * @param petId Pet id to delete
     * @param apiKey 
     */
    public async deletePet(petId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new RequiredError("PetApi", "deletePet", "petId");
        }



        // Path Params
        const localVarPath = '/pet/{petId}'
            .replace('{petId}', encodeURIComponent(String(petId)));

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
     * Multiple status values can be provided with comma separated strings
     * Finds Pets by status
     * @param status Status values that need to be considered for filter (@deprecated)
     */
    public async findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
     * @deprecated
     *
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * Finds Pets by tags
     * @param tags Tags to filter by
     */
    public async findPetsByTags(tags: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "Array<string>", ""));
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
     * Returns a single pet
     * Find pet by ID
     * @param petId ID of pet to return
     */
    public async getPetById(petId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new RequiredError("PetApi", "getPetById", "petId");
        }


        // Path Params
        const localVarPath = '/pet/{petId}'
            .replace('{petId}', encodeURIComponent(String(petId)));

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
     * 
     * Update an existing pet
     * @param pet Pet object that needs to be added to the store
     */
    public async updatePet(pet: Pet, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
     * 
     * Updates a pet in the store with form data
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     */
    public async updatePetWithForm(petId: number, name?: string, status?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new RequiredError("PetApi", "updatePetWithForm", "petId");
        }




        // Path Params
        const localVarPath = '/pet/{petId}'
            .replace('{petId}', encodeURIComponent(String(petId)));

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
     * 
     * uploads an image
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     */
    public async uploadFile(petId: number, additionalMetadata?: string, file?: HttpFile, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new RequiredError("PetApi", "uploadFile", "petId");
        }




        // Path Params
        const localVarPath = '/pet/{petId}/uploadImage'
            .replace('{petId}', encodeURIComponent(String(petId)));

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
                 localVarFormParams.append('file', file, file.name);
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

}

export class PetApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addPet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addPetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Pet >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Pet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Pet", ""
            ) as Pet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("405", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid input", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Pet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Pet", ""
            ) as Pet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePetWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid pet value", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to findPetsByStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async findPetsByStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Pet> >> {
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

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to findPetsByTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async findPetsByTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Pet> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Pet> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Pet>", ""
            ) as Array<Pet>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid tag value", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Pet> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Pet>", ""
            ) as Array<Pet>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPetById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPetByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Pet >> {
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

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Pet >> {
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
        if (isCodeInRange("405", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Validation exception", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Pet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Pet", ""
            ) as Pet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePetWithForm
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePetWithFormWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("405", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid input", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadFileWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponse >> {
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

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

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
): Promise<HttpInfo<Pet>> {
    const requestFactory = new PetApiRequestFactory(configuration);
    const responseProcessor = new PetApiResponseProcessor();

    const requestContext = await requestFactory.addPet(pet);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.addPetWithHttpInfo(response);
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
): Promise<Pet> {
    const httpInfo = await addPetWithHttpInfo(configuration, pet);
    return httpInfo.data;
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
    const requestFactory = new PetApiRequestFactory(configuration);
    const responseProcessor = new PetApiResponseProcessor();

    const requestContext = await requestFactory.deletePet(petId, apiKey);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.deletePetWithHttpInfo(response);
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
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * @param configuration The configuration object
 * @param status Status values that need to be considered for filter (@deprecated)
 */
export async function findPetsByStatusWithHttpInfo(
    configuration: Configuration,
    status: Array<'available' | 'pending' | 'sold'>
): Promise<HttpInfo<Array<Pet>>> {
    const requestFactory = new PetApiRequestFactory(configuration);
    const responseProcessor = new PetApiResponseProcessor();

    const requestContext = await requestFactory.findPetsByStatus(status);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.findPetsByStatusWithHttpInfo(response);
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
 * @deprecated
 *
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * Finds Pets by tags
 * @param configuration The configuration object
 * @param tags Tags to filter by
 */
export async function findPetsByTagsWithHttpInfo(
    configuration: Configuration,
    tags: Array<string>
): Promise<HttpInfo<Array<Pet>>> {
    const requestFactory = new PetApiRequestFactory(configuration);
    const responseProcessor = new PetApiResponseProcessor();

    const requestContext = await requestFactory.findPetsByTags(tags);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.findPetsByTagsWithHttpInfo(response);
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
    tags: Array<string>
): Promise<Array<Pet>> {
    const httpInfo = await findPetsByTagsWithHttpInfo(configuration, tags);
    return httpInfo.data;
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
    const requestFactory = new PetApiRequestFactory(configuration);
    const responseProcessor = new PetApiResponseProcessor();

    const requestContext = await requestFactory.getPetById(petId);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.getPetByIdWithHttpInfo(response);
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
 * 
 * Update an existing pet
 * @param configuration The configuration object
 * @param pet Pet object that needs to be added to the store
 */
export async function updatePetWithHttpInfo(
    configuration: Configuration,
    pet: Pet
): Promise<HttpInfo<Pet>> {
    const requestFactory = new PetApiRequestFactory(configuration);
    const responseProcessor = new PetApiResponseProcessor();

    const requestContext = await requestFactory.updatePet(pet);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.updatePetWithHttpInfo(response);
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
): Promise<Pet> {
    const httpInfo = await updatePetWithHttpInfo(configuration, pet);
    return httpInfo.data;
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
    const requestFactory = new PetApiRequestFactory(configuration);
    const responseProcessor = new PetApiResponseProcessor();

    const requestContext = await requestFactory.updatePetWithForm(petId, name, status);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.updatePetWithFormWithHttpInfo(response);
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
    const requestFactory = new PetApiRequestFactory(configuration);
    const responseProcessor = new PetApiResponseProcessor();

    const requestContext = await requestFactory.uploadFile(petId, additionalMetadata, file);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.uploadFileWithHttpInfo(response);
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

