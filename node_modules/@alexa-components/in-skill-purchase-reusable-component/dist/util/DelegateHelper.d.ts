import { HandlerInput } from "ask-sdk-core";
import { Response } from "ask-sdk-model";
/**
 * Helper for the management of skill experience delegation
 */
export declare class DelegateHelper {
    /**
     * Delegate management back to Alexa Conversation.
     */
    proceedToAlexaConversationsEvent(handlerInput: HandlerInput, eventName: string): Response;
}
