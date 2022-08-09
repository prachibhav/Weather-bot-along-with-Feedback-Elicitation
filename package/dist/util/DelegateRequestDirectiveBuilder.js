/**
 * Creates a directive to delegate control to target
 */
var DelegateRequestDirectiveBuilder = /** @class */ (function () {
    function DelegateRequestDirectiveBuilder() {
    }
    DelegateRequestDirectiveBuilder.prototype.withTarget = function (target) {
        this.target = target;
        return this;
    };
    DelegateRequestDirectiveBuilder.prototype.withUpdateRequest = function (updateRequest) {
        this.updateRequest = updateRequest;
        return this;
    };
    DelegateRequestDirectiveBuilder.transformSlot = function (slots) {
        var transformedSlots = {};
        slots.forEach(function (slot) {
            transformedSlots[slot.name] = slot;
        });
        return transformedSlots;
    };
    DelegateRequestDirectiveBuilder.prototype.build = function () {
        var period = {
            until: 'EXPLICIT_RETURN'
        };
        var delegateRequestDirective = {
            target: this.target,
            period: period,
            updatedRequest: this.updateRequest,
            type: 'Dialog.DelegateRequest'
        };
        return delegateRequestDirective;
    };
    DelegateRequestDirectiveBuilder.ALEXA_CONVERSATIONS_TARGET = 'AMAZON.Conversations';
    DelegateRequestDirectiveBuilder.SKILL_TARGET = 'skill';
    DelegateRequestDirectiveBuilder.DIALOG_INPUT_REQUEST_TYPE = 'Dialog.InputRequest';
    return DelegateRequestDirectiveBuilder;
}());
export { DelegateRequestDirectiveBuilder };
/**
 * Creates a {@link UpdatedInputRequest} update request
 */
var UpdatedInputRequestBuilder = /** @class */ (function () {
    function UpdatedInputRequestBuilder() {
    }
    UpdatedInputRequestBuilder.prototype.withInputName = function (inputName) {
        this.inputName = inputName;
        return this;
    };
    UpdatedInputRequestBuilder.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    UpdatedInputRequestBuilder.prototype.build = function () {
        var updatedInputRequest = {
            input: {
                name: this.inputName,
                slots: this.slots
            },
            type: 'Dialog.InputRequest'
        };
        return updatedInputRequest;
    };
    return UpdatedInputRequestBuilder;
}());
export { UpdatedInputRequestBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZWdhdGVSZXF1ZXN0RGlyZWN0aXZlQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnNraWxscHVyY2hhc2VyZXVzYWJsZWNvbXBvbmVudC91dGlsL0RlbGVnYXRlUmVxdWVzdERpcmVjdGl2ZUJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7O0dBRUc7QUFDSDtJQUFBO0lBdUNBLENBQUM7SUFoQ0csb0RBQVUsR0FBVixVQUFXLE1BQWM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDJEQUFpQixHQUFqQixVQUFrQixhQUF5RDtRQUN2RSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sNkNBQWEsR0FBcEIsVUFBcUIsS0FBYTtRQUM5QixJQUFNLGdCQUFnQixHQUE0QixFQUFFLENBQUM7UUFDckQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDZixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBRUQsK0NBQUssR0FBTDtRQUNJLElBQU0sTUFBTSxHQUFxQjtZQUM3QixLQUFLLEVBQUUsaUJBQWlCO1NBQzNCLENBQUM7UUFFRixJQUFNLHdCQUF3QixHQUE2QjtZQUN2RCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLE1BQU07WUFDZCxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDbEMsSUFBSSxFQUFFLHdCQUF3QjtTQUNqQyxDQUFDO1FBRUYsT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBbkNlLDBEQUEwQixHQUFXLHNCQUFzQixDQUFDO0lBQzVELDRDQUFZLEdBQVcsT0FBTyxDQUFDO0lBQy9CLHlEQUF5QixHQUFHLHFCQUFxQixDQUFDO0lBa0N0RSxzQ0FBQztDQUFBLEFBdkNELElBdUNDO1NBdkNZLCtCQUErQjtBQXlDNUM7O0dBRUc7QUFDSDtJQUFBO0lBeUJBLENBQUM7SUFyQkcsa0RBQWEsR0FBYixVQUFjLFNBQWlCO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4Q0FBUyxHQUFULFVBQVUsS0FBOEI7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDBDQUFLLEdBQUw7UUFDSSxJQUFNLG1CQUFtQixHQUFHO1lBQ3hCLEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNYO1lBQ1YsSUFBSSxFQUFFLHFCQUFxQjtTQUNQLENBQUM7UUFFekIsT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDO0lBQ0wsaUNBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlhbG9nLCBTbG90IH0gZnJvbSBcImFzay1zZGstbW9kZWxcIjtcbmltcG9ydCBEZWxlZ2F0ZVJlcXVlc3REaXJlY3RpdmUgPSBkaWFsb2cuRGVsZWdhdGVSZXF1ZXN0RGlyZWN0aXZlO1xuaW1wb3J0IERlbGVnYXRpb25QZXJpb2QgPSBkaWFsb2cuRGVsZWdhdGlvblBlcmlvZDtcbmltcG9ydCBVcGRhdGVkSW5wdXRSZXF1ZXN0ID0gZGlhbG9nLlVwZGF0ZWRJbnB1dFJlcXVlc3Q7XG5pbXBvcnQgVXBkYXRlZEludGVudFJlcXVlc3QgPSBkaWFsb2cuVXBkYXRlZEludGVudFJlcXVlc3Q7XG5pbXBvcnQgSW5wdXQgPSBkaWFsb2cuSW5wdXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRpcmVjdGl2ZSB0byBkZWxlZ2F0ZSBjb250cm9sIHRvIHRhcmdldFxuICovXG5leHBvcnQgY2xhc3MgRGVsZWdhdGVSZXF1ZXN0RGlyZWN0aXZlQnVpbGRlciB7XG4gICAgcHJpdmF0ZSB0YXJnZXQ6IHN0cmluZztcbiAgICBwcml2YXRlIHVwZGF0ZVJlcXVlc3Q6IFVwZGF0ZWRJbnB1dFJlcXVlc3QgfCBVcGRhdGVkSW50ZW50UmVxdWVzdDtcbiAgICBzdGF0aWMgcmVhZG9ubHkgQUxFWEFfQ09OVkVSU0FUSU9OU19UQVJHRVQ6IHN0cmluZyA9ICdBTUFaT04uQ29udmVyc2F0aW9ucyc7XG4gICAgc3RhdGljIHJlYWRvbmx5IFNLSUxMX1RBUkdFVDogc3RyaW5nID0gJ3NraWxsJztcbiAgICBzdGF0aWMgcmVhZG9ubHkgRElBTE9HX0lOUFVUX1JFUVVFU1RfVFlQRSA9ICdEaWFsb2cuSW5wdXRSZXF1ZXN0JztcblxuICAgIHdpdGhUYXJnZXQodGFyZ2V0OiBzdHJpbmcpOiBEZWxlZ2F0ZVJlcXVlc3REaXJlY3RpdmVCdWlsZGVyIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHdpdGhVcGRhdGVSZXF1ZXN0KHVwZGF0ZVJlcXVlc3Q6IFVwZGF0ZWRJbnB1dFJlcXVlc3QgfCBVcGRhdGVkSW50ZW50UmVxdWVzdCk6IERlbGVnYXRlUmVxdWVzdERpcmVjdGl2ZUJ1aWxkZXIge1xuICAgICAgICB0aGlzLnVwZGF0ZVJlcXVlc3QgPSB1cGRhdGVSZXF1ZXN0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgdHJhbnNmb3JtU2xvdChzbG90czogU2xvdFtdKTogeyBba2V5OiBzdHJpbmddOiBTbG90IH0ge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZFNsb3RzOiB7IFtrZXk6IHN0cmluZ106IFNsb3QgfSA9IHt9O1xuICAgICAgICBzbG90cy5mb3JFYWNoKChzbG90KSA9PiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZFNsb3RzW3Nsb3QubmFtZV0gPSBzbG90O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVkU2xvdHM7XG4gICAgfVxuXG4gICAgYnVpbGQoKTogRGVsZWdhdGVSZXF1ZXN0RGlyZWN0aXZlIHtcbiAgICAgICAgY29uc3QgcGVyaW9kOiBEZWxlZ2F0aW9uUGVyaW9kID0ge1xuICAgICAgICAgICAgdW50aWw6ICdFWFBMSUNJVF9SRVRVUk4nXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVsZWdhdGVSZXF1ZXN0RGlyZWN0aXZlOiBEZWxlZ2F0ZVJlcXVlc3REaXJlY3RpdmUgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0LFxuICAgICAgICAgICAgcGVyaW9kOiBwZXJpb2QsXG4gICAgICAgICAgICB1cGRhdGVkUmVxdWVzdDogdGhpcy51cGRhdGVSZXF1ZXN0LFxuICAgICAgICAgICAgdHlwZTogJ0RpYWxvZy5EZWxlZ2F0ZVJlcXVlc3QnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVxdWVzdERpcmVjdGl2ZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBVcGRhdGVkSW5wdXRSZXF1ZXN0fSB1cGRhdGUgcmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgVXBkYXRlZElucHV0UmVxdWVzdEJ1aWxkZXIge1xuICAgIHByaXZhdGUgaW5wdXROYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzbG90czogeyBba2V5OiBzdHJpbmddOiBTbG90IH07XG5cbiAgICB3aXRoSW5wdXROYW1lKGlucHV0TmFtZTogc3RyaW5nKTogVXBkYXRlZElucHV0UmVxdWVzdEJ1aWxkZXIge1xuICAgICAgICB0aGlzLmlucHV0TmFtZSA9IGlucHV0TmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgd2l0aFNsb3RzKHNsb3RzOiB7IFtrZXk6IHN0cmluZ106IFNsb3QgfSk6IFVwZGF0ZWRJbnB1dFJlcXVlc3RCdWlsZGVyIHtcbiAgICAgICAgdGhpcy5zbG90cyA9IHNsb3RzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpOiBVcGRhdGVkSW5wdXRSZXF1ZXN0IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZElucHV0UmVxdWVzdCA9IHtcbiAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5pbnB1dE5hbWUsXG4gICAgICAgICAgICAgICAgc2xvdHM6IHRoaXMuc2xvdHNcbiAgICAgICAgICAgIH0gYXMgSW5wdXQsXG4gICAgICAgICAgICB0eXBlOiAnRGlhbG9nLklucHV0UmVxdWVzdCdcbiAgICAgICAgfSBhcyBVcGRhdGVkSW5wdXRSZXF1ZXN0O1xuXG4gICAgICAgIHJldHVybiB1cGRhdGVkSW5wdXRSZXF1ZXN0O1xuICAgIH1cbn1cbiJdfQ==