import { HandlerInput, RequestHandler } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
import { UtilsHelper } from "../../util/Helper";
/**
 * delegateFlowForDeny API request handler.
 */
export declare class DelegateFlowForDenyHandler implements RequestHandler {
    private utilsHelper;
    constructor(utilsHelper: UtilsHelper);
    canHandle(handlerInput: HandlerInput): boolean;
    handle(handlerInput: HandlerInput): Promise<Response>;
}
