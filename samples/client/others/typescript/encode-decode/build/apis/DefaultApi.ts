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


import { ComplexObject } from '../models/ComplexObject';
import { CompositeObject } from '../models/CompositeObject';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     */
    public async testDecodeArrayOfArraysGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/array-of-arrays';

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
     */
    public async testDecodeArrayOfGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/array-of';

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
     */
    public async testDecodeArrayOfMapsOfObjectsGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/array-of/maps-of/objects';

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
     */
    public async testDecodeArrayOfNullableGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/array-of/nullable';

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
     */
    public async testDecodeArrayOfNullableObjectsGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/array-of/nullable-objects';

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
     */
    public async testDecodeCompositeObjectsGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/composite-objects';

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
     */
    public async testDecodeMapOfMapsOfObjectsGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/map-of/maps-of/objects';

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
     */
    public async testDecodeMapOfObjectsGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/map-of/objects';

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
     */
    public async testDecodeMapOfPrimitiveGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/map-of/primitive';

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
     */
    public async testDecodeNullableArrayGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/nullable-array';

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
     */
    public async testDecodeNullableGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/nullable';

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
     */
    public async testDecodeObjectGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/object';

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
     */
    public async testDecodePrimitiveBooleanGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/primitive/boolean';

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
     */
    public async testDecodePrimitiveIntegerGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/primitive/integer';

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
     */
    public async testDecodePrimitiveNumberGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/primitive/number';

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
     */
    public async testDecodePrimitiveStringGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/test/decode/primitive/string';

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
     * @param requestBody 
     */
    public async testEncodeArrayOfArraysPost(requestBody: Array<Array<string>>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("DefaultApi", "testEncodeArrayOfArraysPost", "requestBody");
        }


        // Path Params
        const localVarPath = '/test/encode/array-of-arrays';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "Array<Array<string>>", ""),
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
     * @param complexObject 
     */
    public async testEncodeArrayOfMapsOfObjectsPost(complexObject: Array<{ [key: string]: ComplexObject; }>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'complexObject' is not null or undefined
        if (complexObject === null || complexObject === undefined) {
            throw new RequiredError("DefaultApi", "testEncodeArrayOfMapsOfObjectsPost", "complexObject");
        }


        // Path Params
        const localVarPath = '/test/encode/array-of/maps-of/objects';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(complexObject, "Array<{ [key: string]: ComplexObject; }>", ""),
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
     * @param complexObject 
     */
    public async testEncodeArrayOfNullableObjectsPost(complexObject: Array<ComplexObject | null>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'complexObject' is not null or undefined
        if (complexObject === null || complexObject === undefined) {
            throw new RequiredError("DefaultApi", "testEncodeArrayOfNullableObjectsPost", "complexObject");
        }


        // Path Params
        const localVarPath = '/test/encode/array-of/nullable-objects';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(complexObject, "Array<ComplexObject | null>", ""),
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
     * @param requestBody 
     */
    public async testEncodeArrayOfNullablePost(requestBody: Array<string | null>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("DefaultApi", "testEncodeArrayOfNullablePost", "requestBody");
        }


        // Path Params
        const localVarPath = '/test/encode/array-of/nullable';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "Array<string | null>", ""),
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
     * @param requestBody 
     */
    public async testEncodeArrayOfPost(requestBody: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("DefaultApi", "testEncodeArrayOfPost", "requestBody");
        }


        // Path Params
        const localVarPath = '/test/encode/array-of';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "Array<string>", ""),
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
     * @param compositeObject 
     */
    public async testEncodeCompositeObjectsPost(compositeObject: CompositeObject, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'compositeObject' is not null or undefined
        if (compositeObject === null || compositeObject === undefined) {
            throw new RequiredError("DefaultApi", "testEncodeCompositeObjectsPost", "compositeObject");
        }


        // Path Params
        const localVarPath = '/test/encode/composite-objects';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(compositeObject, "CompositeObject", ""),
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
     * @param requestBody 
     */
    public async testEncodeMapOfMapsOfObjectsPost(requestBody: { [key: string]: { [key: string]: ComplexObject; }; }, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("DefaultApi", "testEncodeMapOfMapsOfObjectsPost", "requestBody");
        }


        // Path Params
        const localVarPath = '/test/encode/map-of/maps-of/objects';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "{ [key: string]: { [key: string]: ComplexObject; }; }", ""),
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
     * @param requestBody 
     */
    public async testEncodeMapOfObjectsPost(requestBody: { [key: string]: ComplexObject | null; }, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("DefaultApi", "testEncodeMapOfObjectsPost", "requestBody");
        }


        // Path Params
        const localVarPath = '/test/encode/map-of/objects';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "{ [key: string]: ComplexObject | null; }", ""),
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
     * @param requestBody 
     */
    public async testEncodeMapOfPrimitivePost(requestBody: { [key: string]: string; }, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("DefaultApi", "testEncodeMapOfPrimitivePost", "requestBody");
        }


        // Path Params
        const localVarPath = '/test/encode/map-of/primitive';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "{ [key: string]: string; }", ""),
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
     * @param requestBody 
     */
    public async testEncodeNullableArrayPost(requestBody?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/test/encode/nullable-array';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "Array<string>", ""),
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
     * @param body 
     */
    public async testEncodeNullablePost(body?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/test/encode/nullable';

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
     * @param complexObject 
     */
    public async testEncodeObjectPost(complexObject: ComplexObject, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'complexObject' is not null or undefined
        if (complexObject === null || complexObject === undefined) {
            throw new RequiredError("DefaultApi", "testEncodeObjectPost", "complexObject");
        }


        // Path Params
        const localVarPath = '/test/encode/object';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(complexObject, "ComplexObject", ""),
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
     * @param body 
     */
    public async testEncodePrimitiveBooleanPost(body: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DefaultApi", "testEncodePrimitiveBooleanPost", "body");
        }


        // Path Params
        const localVarPath = '/test/encode/primitive/boolean';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "boolean", ""),
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
     * @param body 
     */
    public async testEncodePrimitiveIntegerPost(body: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DefaultApi", "testEncodePrimitiveIntegerPost", "body");
        }


        // Path Params
        const localVarPath = '/test/encode/primitive/integer';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "number", ""),
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
     * @param body 
     */
    public async testEncodePrimitiveNumberPost(body: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DefaultApi", "testEncodePrimitiveNumberPost", "body");
        }


        // Path Params
        const localVarPath = '/test/encode/primitive/number';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "number", ""),
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
     * @param body 
     */
    public async testEncodePrimitiveStringPost(body: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DefaultApi", "testEncodePrimitiveStringPost", "body");
        }


        // Path Params
        const localVarPath = '/test/encode/primitive/string';

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

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodeArrayOfArraysGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeArrayOfArraysGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Array<string>> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Array<string>> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Array<string>>", ""
            ) as Array<Array<string>>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Array<string>> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Array<string>>", ""
            ) as Array<Array<string>>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodeArrayOfGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeArrayOfGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<string> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodeArrayOfMapsOfObjectsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeArrayOfMapsOfObjectsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<{ [key: string]: ComplexObject; }> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<{ [key: string]: ComplexObject; }> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<{ [key: string]: ComplexObject; }>", ""
            ) as Array<{ [key: string]: ComplexObject; }>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<{ [key: string]: ComplexObject; }> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<{ [key: string]: ComplexObject; }>", ""
            ) as Array<{ [key: string]: ComplexObject; }>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodeArrayOfNullableGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeArrayOfNullableGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<string | null> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string | null> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string | null>", ""
            ) as Array<string | null>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string | null> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string | null>", ""
            ) as Array<string | null>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodeArrayOfNullableObjectsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeArrayOfNullableObjectsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ComplexObject | null> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ComplexObject | null> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ComplexObject | null>", ""
            ) as Array<ComplexObject | null>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ComplexObject | null> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ComplexObject | null>", ""
            ) as Array<ComplexObject | null>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodeCompositeObjectsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeCompositeObjectsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CompositeObject >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CompositeObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompositeObject", ""
            ) as CompositeObject;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CompositeObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompositeObject", ""
            ) as CompositeObject;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodeMapOfMapsOfObjectsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeMapOfMapsOfObjectsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: { [key: string]: ComplexObject; }; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: { [key: string]: ComplexObject; }; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: { [key: string]: ComplexObject; }; }", ""
            ) as { [key: string]: { [key: string]: ComplexObject; }; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: { [key: string]: ComplexObject; }; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: { [key: string]: ComplexObject; }; }", ""
            ) as { [key: string]: { [key: string]: ComplexObject; }; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodeMapOfObjectsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeMapOfObjectsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: ComplexObject | null; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: ComplexObject | null; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: ComplexObject | null; }", ""
            ) as { [key: string]: ComplexObject | null; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: ComplexObject | null; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: ComplexObject | null; }", ""
            ) as { [key: string]: ComplexObject | null; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodeMapOfPrimitiveGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeMapOfPrimitiveGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: string; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: string; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: string; }", ""
            ) as { [key: string]: string; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: string; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: string; }", ""
            ) as { [key: string]: string; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodeNullableArrayGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeNullableArrayGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<string> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodeNullableGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeNullableGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
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
     * @params response Response returned by the server for a request to testDecodeObjectGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodeObjectGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ComplexObject >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ComplexObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ComplexObject", ""
            ) as ComplexObject;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ComplexObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ComplexObject", ""
            ) as ComplexObject;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodePrimitiveBooleanGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodePrimitiveBooleanGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<boolean >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodePrimitiveIntegerGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodePrimitiveIntegerGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<number >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: number = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "number", ""
            ) as number;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: number = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "number", ""
            ) as number;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodePrimitiveNumberGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodePrimitiveNumberGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<number >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: number = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "number", ""
            ) as number;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: number = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "number", ""
            ) as number;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testDecodePrimitiveStringGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testDecodePrimitiveStringGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
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
     * @params response Response returned by the server for a request to testEncodeArrayOfArraysPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeArrayOfArraysPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodeArrayOfMapsOfObjectsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeArrayOfMapsOfObjectsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodeArrayOfNullableObjectsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeArrayOfNullableObjectsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodeArrayOfNullablePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeArrayOfNullablePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodeArrayOfPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeArrayOfPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodeCompositeObjectsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeCompositeObjectsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodeMapOfMapsOfObjectsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeMapOfMapsOfObjectsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodeMapOfObjectsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeMapOfObjectsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodeMapOfPrimitivePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeMapOfPrimitivePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodeNullableArrayPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeNullableArrayPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodeNullablePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeNullablePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodeObjectPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodeObjectPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodePrimitiveBooleanPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodePrimitiveBooleanPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodePrimitiveIntegerPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodePrimitiveIntegerPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodePrimitiveNumberPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodePrimitiveNumberPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEncodePrimitiveStringPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testEncodePrimitiveStringPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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

}

/**
 * @param configuration The configuration object
 */
export async function testDecodeArrayOfArraysGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<Array<Array<string>>>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeArrayOfArraysGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeArrayOfArraysGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeArrayOfArraysGet(
    configuration: Configuration
): Promise<Array<Array<string>>> {
    const httpInfo = await testDecodeArrayOfArraysGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeArrayOfGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<Array<string>>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeArrayOfGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeArrayOfGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeArrayOfGet(
    configuration: Configuration
): Promise<Array<string>> {
    const httpInfo = await testDecodeArrayOfGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeArrayOfMapsOfObjectsGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<Array<{ [key: string]: ComplexObject; }>>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeArrayOfMapsOfObjectsGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeArrayOfMapsOfObjectsGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeArrayOfMapsOfObjectsGet(
    configuration: Configuration
): Promise<Array<{ [key: string]: ComplexObject; }>> {
    const httpInfo = await testDecodeArrayOfMapsOfObjectsGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeArrayOfNullableGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<Array<string | null>>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeArrayOfNullableGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeArrayOfNullableGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeArrayOfNullableGet(
    configuration: Configuration
): Promise<Array<string | null>> {
    const httpInfo = await testDecodeArrayOfNullableGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeArrayOfNullableObjectsGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<Array<ComplexObject>>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeArrayOfNullableObjectsGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeArrayOfNullableObjectsGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeArrayOfNullableObjectsGet(
    configuration: Configuration
): Promise<Array<ComplexObject>> {
    const httpInfo = await testDecodeArrayOfNullableObjectsGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeCompositeObjectsGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<CompositeObject>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeCompositeObjectsGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeCompositeObjectsGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeCompositeObjectsGet(
    configuration: Configuration
): Promise<CompositeObject> {
    const httpInfo = await testDecodeCompositeObjectsGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeMapOfMapsOfObjectsGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<{ [key: string]: { [key: string]: ComplexObject; }; }>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeMapOfMapsOfObjectsGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeMapOfMapsOfObjectsGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeMapOfMapsOfObjectsGet(
    configuration: Configuration
): Promise<{ [key: string]: { [key: string]: ComplexObject; }; }> {
    const httpInfo = await testDecodeMapOfMapsOfObjectsGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeMapOfObjectsGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<{ [key: string]: ComplexObject | null; }>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeMapOfObjectsGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeMapOfObjectsGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeMapOfObjectsGet(
    configuration: Configuration
): Promise<{ [key: string]: ComplexObject | null; }> {
    const httpInfo = await testDecodeMapOfObjectsGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeMapOfPrimitiveGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<{ [key: string]: string; }>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeMapOfPrimitiveGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeMapOfPrimitiveGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeMapOfPrimitiveGet(
    configuration: Configuration
): Promise<{ [key: string]: string; }> {
    const httpInfo = await testDecodeMapOfPrimitiveGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeNullableArrayGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<Array<string>>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeNullableArrayGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeNullableArrayGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeNullableArrayGet(
    configuration: Configuration
): Promise<Array<string>> {
    const httpInfo = await testDecodeNullableArrayGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeNullableGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<string>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeNullableGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeNullableGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeNullableGet(
    configuration: Configuration
): Promise<string> {
    const httpInfo = await testDecodeNullableGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeObjectGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<ComplexObject>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodeObjectGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodeObjectGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodeObjectGet(
    configuration: Configuration
): Promise<ComplexObject> {
    const httpInfo = await testDecodeObjectGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodePrimitiveBooleanGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<boolean>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodePrimitiveBooleanGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodePrimitiveBooleanGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodePrimitiveBooleanGet(
    configuration: Configuration
): Promise<boolean> {
    const httpInfo = await testDecodePrimitiveBooleanGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodePrimitiveIntegerGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<number>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodePrimitiveIntegerGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodePrimitiveIntegerGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodePrimitiveIntegerGet(
    configuration: Configuration
): Promise<number> {
    const httpInfo = await testDecodePrimitiveIntegerGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodePrimitiveNumberGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<number>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodePrimitiveNumberGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodePrimitiveNumberGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodePrimitiveNumberGet(
    configuration: Configuration
): Promise<number> {
    const httpInfo = await testDecodePrimitiveNumberGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 */
export async function testDecodePrimitiveStringGetWithHttpInfo(
    configuration: Configuration
): Promise<HttpInfo<string>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testDecodePrimitiveStringGet();
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testDecodePrimitiveStringGetWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 */
export async function testDecodePrimitiveStringGet(
    configuration: Configuration
): Promise<string> {
    const httpInfo = await testDecodePrimitiveStringGetWithHttpInfo(configuration);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeArrayOfArraysPostWithHttpInfo(
    configuration: Configuration,
    requestBody: Array<Array<string>>
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeArrayOfArraysPost(requestBody);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeArrayOfArraysPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeArrayOfArraysPost(
    configuration: Configuration,
    requestBody: Array<Array<string>>
): Promise<void> {
    const httpInfo = await testEncodeArrayOfArraysPostWithHttpInfo(configuration, requestBody);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param complexObject 
 */
export async function testEncodeArrayOfMapsOfObjectsPostWithHttpInfo(
    configuration: Configuration,
    complexObject: Array<{ [key: string]: ComplexObject; }>
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeArrayOfMapsOfObjectsPost(complexObject);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeArrayOfMapsOfObjectsPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param complexObject 
 */
export async function testEncodeArrayOfMapsOfObjectsPost(
    configuration: Configuration,
    complexObject: Array<{ [key: string]: ComplexObject; }>
): Promise<void> {
    const httpInfo = await testEncodeArrayOfMapsOfObjectsPostWithHttpInfo(configuration, complexObject);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param complexObject 
 */
export async function testEncodeArrayOfNullableObjectsPostWithHttpInfo(
    configuration: Configuration,
    complexObject: Array<ComplexObject>
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeArrayOfNullableObjectsPost(complexObject);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeArrayOfNullableObjectsPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param complexObject 
 */
export async function testEncodeArrayOfNullableObjectsPost(
    configuration: Configuration,
    complexObject: Array<ComplexObject>
): Promise<void> {
    const httpInfo = await testEncodeArrayOfNullableObjectsPostWithHttpInfo(configuration, complexObject);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeArrayOfNullablePostWithHttpInfo(
    configuration: Configuration,
    requestBody: Array<string | null>
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeArrayOfNullablePost(requestBody);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeArrayOfNullablePostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeArrayOfNullablePost(
    configuration: Configuration,
    requestBody: Array<string | null>
): Promise<void> {
    const httpInfo = await testEncodeArrayOfNullablePostWithHttpInfo(configuration, requestBody);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeArrayOfPostWithHttpInfo(
    configuration: Configuration,
    requestBody: Array<string>
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeArrayOfPost(requestBody);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeArrayOfPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeArrayOfPost(
    configuration: Configuration,
    requestBody: Array<string>
): Promise<void> {
    const httpInfo = await testEncodeArrayOfPostWithHttpInfo(configuration, requestBody);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param compositeObject 
 */
export async function testEncodeCompositeObjectsPostWithHttpInfo(
    configuration: Configuration,
    compositeObject: CompositeObject
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeCompositeObjectsPost(compositeObject);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeCompositeObjectsPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param compositeObject 
 */
export async function testEncodeCompositeObjectsPost(
    configuration: Configuration,
    compositeObject: CompositeObject
): Promise<void> {
    const httpInfo = await testEncodeCompositeObjectsPostWithHttpInfo(configuration, compositeObject);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeMapOfMapsOfObjectsPostWithHttpInfo(
    configuration: Configuration,
    requestBody: { [key: string]: { [key: string]: ComplexObject; }; }
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeMapOfMapsOfObjectsPost(requestBody);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeMapOfMapsOfObjectsPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeMapOfMapsOfObjectsPost(
    configuration: Configuration,
    requestBody: { [key: string]: { [key: string]: ComplexObject; }; }
): Promise<void> {
    const httpInfo = await testEncodeMapOfMapsOfObjectsPostWithHttpInfo(configuration, requestBody);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeMapOfObjectsPostWithHttpInfo(
    configuration: Configuration,
    requestBody: { [key: string]: ComplexObject | null; }
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeMapOfObjectsPost(requestBody);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeMapOfObjectsPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeMapOfObjectsPost(
    configuration: Configuration,
    requestBody: { [key: string]: ComplexObject | null; }
): Promise<void> {
    const httpInfo = await testEncodeMapOfObjectsPostWithHttpInfo(configuration, requestBody);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeMapOfPrimitivePostWithHttpInfo(
    configuration: Configuration,
    requestBody: { [key: string]: string; }
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeMapOfPrimitivePost(requestBody);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeMapOfPrimitivePostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeMapOfPrimitivePost(
    configuration: Configuration,
    requestBody: { [key: string]: string; }
): Promise<void> {
    const httpInfo = await testEncodeMapOfPrimitivePostWithHttpInfo(configuration, requestBody);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeNullableArrayPostWithHttpInfo(
    configuration: Configuration,
    requestBody?: Array<string>
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeNullableArrayPost(requestBody);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeNullableArrayPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param requestBody 
 */
export async function testEncodeNullableArrayPost(
    configuration: Configuration,
    requestBody?: Array<string>
): Promise<void> {
    const httpInfo = await testEncodeNullableArrayPostWithHttpInfo(configuration, requestBody);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param body 
 */
export async function testEncodeNullablePostWithHttpInfo(
    configuration: Configuration,
    body?: string
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeNullablePost(body);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeNullablePostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param body 
 */
export async function testEncodeNullablePost(
    configuration: Configuration,
    body?: string
): Promise<void> {
    const httpInfo = await testEncodeNullablePostWithHttpInfo(configuration, body);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param complexObject 
 */
export async function testEncodeObjectPostWithHttpInfo(
    configuration: Configuration,
    complexObject: ComplexObject
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodeObjectPost(complexObject);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodeObjectPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param complexObject 
 */
export async function testEncodeObjectPost(
    configuration: Configuration,
    complexObject: ComplexObject
): Promise<void> {
    const httpInfo = await testEncodeObjectPostWithHttpInfo(configuration, complexObject);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param body 
 */
export async function testEncodePrimitiveBooleanPostWithHttpInfo(
    configuration: Configuration,
    body: boolean
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodePrimitiveBooleanPost(body);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodePrimitiveBooleanPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param body 
 */
export async function testEncodePrimitiveBooleanPost(
    configuration: Configuration,
    body: boolean
): Promise<void> {
    const httpInfo = await testEncodePrimitiveBooleanPostWithHttpInfo(configuration, body);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param body 
 */
export async function testEncodePrimitiveIntegerPostWithHttpInfo(
    configuration: Configuration,
    body: number
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodePrimitiveIntegerPost(body);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodePrimitiveIntegerPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param body 
 */
export async function testEncodePrimitiveIntegerPost(
    configuration: Configuration,
    body: number
): Promise<void> {
    const httpInfo = await testEncodePrimitiveIntegerPostWithHttpInfo(configuration, body);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param body 
 */
export async function testEncodePrimitiveNumberPostWithHttpInfo(
    configuration: Configuration,
    body: number
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodePrimitiveNumberPost(body);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodePrimitiveNumberPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param body 
 */
export async function testEncodePrimitiveNumberPost(
    configuration: Configuration,
    body: number
): Promise<void> {
    const httpInfo = await testEncodePrimitiveNumberPostWithHttpInfo(configuration, body);
    return httpInfo.data;
}

/**
 * @param configuration The configuration object
 * @param body 
 */
export async function testEncodePrimitiveStringPostWithHttpInfo(
    configuration: Configuration,
    body: string
): Promise<HttpInfo<void>> {
    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    const requestContext = await requestFactory.testEncodePrimitiveStringPost(body);
    const response = await configuration.httpApi.send(requestContext).toPromise();

    return await responseProcessor.testEncodePrimitiveStringPostWithHttpInfo(response);
}

/**
 * @param configuration The configuration object
 * @param body 
 */
export async function testEncodePrimitiveStringPost(
    configuration: Configuration,
    body: string
): Promise<void> {
    const httpInfo = await testEncodePrimitiveStringPostWithHttpInfo(configuration, body);
    return httpInfo.data;
}

