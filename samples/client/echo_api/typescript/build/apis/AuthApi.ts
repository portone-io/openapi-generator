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
 * no description
 */
export class AuthApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * To test HTTP basic authentication
     * To test HTTP basic authentication
     */
    public async testAuthHttpBasic(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
     * To test HTTP bearer authentication
     * To test HTTP bearer authentication
     */
    public async testAuthHttpBearer(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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

}

export class AuthApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testAuthHttpBasic
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testAuthHttpBasicWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testAuthHttpBearer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testAuthHttpBearerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
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

}

/**
 * To test HTTP basic authentication
 * To test HTTP basic authentication
 * @param configuration The configuration object
 */
export async function testAuthHttpBasicWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<string>> {
    const requestFactory = new AuthApiRequestFactory(configuration);
    const responseProcessor = new AuthApiResponseProcessor();

    const requestContext = await requestFactory.testAuthHttpBasic();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testAuthHttpBasicWithHttpInfo(response);
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
 * To test HTTP bearer authentication
 * To test HTTP bearer authentication
 * @param configuration The configuration object
 */
export async function testAuthHttpBearerWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<string>> {
    const requestFactory = new AuthApiRequestFactory(configuration);
    const responseProcessor = new AuthApiResponseProcessor();

    const requestContext = await requestFactory.testAuthHttpBearer();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testAuthHttpBearerWithHttpInfo(response);
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

