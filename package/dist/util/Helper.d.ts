import { HandlerInput } from 'ask-sdk-core';
/**
 * This is a RequestUtils class.
 */
export declare class UtilsHelper {
    /**
     * Check if the request type is [Dialog.API.Invoked] and its name is same as given api name.
     */
    isApiRequest(handlerInput: HandlerInput, apiName: string): boolean;
    /**
     * Check if a request matches the given type.
     */
    isRequestWithType(handlerInput: HandlerInput, requestType: string): boolean;
    /**
    * Returns locale from @see {HandlerInput}.
    */
    getLocale(handlerInput: HandlerInput): string;
}
