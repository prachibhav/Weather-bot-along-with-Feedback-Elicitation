import { HandlerInput, RequestHandler } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
import { UtilsHelper } from "../../util/Helper";
/**
 * Get purchase result API Call
 */
export declare class GetPurchaseResultHandler implements RequestHandler {
    private utilsHelper;
    constructor(utilsHelper: UtilsHelper);
    canHandle(handlerInput: HandlerInput): boolean;
    handle(handlerInput: HandlerInput): Promise<Response>;
}
