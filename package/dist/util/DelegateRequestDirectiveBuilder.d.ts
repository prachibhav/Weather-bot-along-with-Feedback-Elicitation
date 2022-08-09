import { dialog, Slot } from "ask-sdk-model";
import DelegateRequestDirective = dialog.DelegateRequestDirective;
import UpdatedInputRequest = dialog.UpdatedInputRequest;
import UpdatedIntentRequest = dialog.UpdatedIntentRequest;
/**
 * Creates a directive to delegate control to target
 */
export declare class DelegateRequestDirectiveBuilder {
    private target;
    private updateRequest;
    static readonly ALEXA_CONVERSATIONS_TARGET: string;
    static readonly SKILL_TARGET: string;
    static readonly DIALOG_INPUT_REQUEST_TYPE = "Dialog.InputRequest";
    withTarget(target: string): DelegateRequestDirectiveBuilder;
    withUpdateRequest(updateRequest: UpdatedInputRequest | UpdatedIntentRequest): DelegateRequestDirectiveBuilder;
    static transformSlot(slots: Slot[]): {
        [key: string]: Slot;
    };
    build(): DelegateRequestDirective;
}
/**
 * Creates a {@link UpdatedInputRequest} update request
 */
export declare class UpdatedInputRequestBuilder {
    private inputName;
    private slots;
    withInputName(inputName: string): UpdatedInputRequestBuilder;
    withSlots(slots: {
        [key: string]: Slot;
    }): UpdatedInputRequestBuilder;
    build(): UpdatedInputRequest;
}
