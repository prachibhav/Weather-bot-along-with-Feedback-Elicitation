import { HandlerInput, RequestHandler } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
import { UtilsHelper } from "../../util/Helper";
/**
 * Get in-skill product list API Call
 */
export declare class GetInSkillProductListHandler implements RequestHandler {
    private utilsHelper;
    constructor(utilsHelper: UtilsHelper);
    canHandle(handlerInput: HandlerInput): boolean;
    handle(handlerInput: HandlerInput): Promise<Response>;
}
