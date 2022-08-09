import { HandlerInput, RequestHandler } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
import { UtilsHelper } from "../../util/Helper";
/**
 * Get product ID API Call
 */
export declare class GetProductIdHandler implements RequestHandler {
    private utilsHelper;
    constructor(utilsHelper: UtilsHelper);
    canHandle(handlerInput: HandlerInput): boolean;
    handle(handlerInput: HandlerInput): Promise<Response>;
}
