import { getRequestType } from 'ask-sdk-core';
/**
 * This is a RequestUtils class.
 */
var UtilsHelper = /** @class */ (function () {
    function UtilsHelper() {
    }
    /**
     * Check if the request type is [Dialog.API.Invoked] and its name is same as given api name.
     */
    UtilsHelper.prototype.isApiRequest = function (handlerInput, apiName) {
        var _a;
        if (getRequestType(handlerInput.requestEnvelope) !== 'Dialog.API.Invoked') {
            return false;
        }
        var apiRequestName = (_a = handlerInput.requestEnvelope.request.apiRequest) === null || _a === void 0 ? void 0 : _a.name;
        return apiRequestName === apiName;
    };
    /**
     * Check if a request matches the given type.
     */
    UtilsHelper.prototype.isRequestWithType = function (handlerInput, requestType) {
        return getRequestType(handlerInput.requestEnvelope) === requestType;
    };
    /**
    * Returns locale from @see {HandlerInput}.
    */
    UtilsHelper.prototype.getLocale = function (handlerInput) {
        var locale = handlerInput.requestEnvelope.request.locale;
        if (locale) {
            return locale;
        }
        else {
            throw new Error('Missing locale.');
        }
    };
    return UtilsHelper;
}());
export { UtilsHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2luc2tpbGxwdXJjaGFzZXJldXNhYmxlY29tcG9uZW50L3V0aWwvSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWdCLE1BQU0sY0FBYyxDQUFDO0FBSTVEOztHQUVHO0FBQ0g7SUFBQTtJQWdDQSxDQUFDO0lBOUJHOztPQUVHO0lBQ0gsa0NBQVksR0FBWixVQUFhLFlBQTBCLEVBQUUsT0FBZTs7UUFDcEQsSUFBSSxjQUFjLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLG9CQUFvQixFQUFFO1lBQ3ZFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBTSxjQUFjLEdBQUcsTUFBQyxZQUFZLENBQUMsZUFBZSxDQUFDLE9BQWdDLENBQUMsVUFBVSwwQ0FBRSxJQUFJLENBQUM7UUFDdkcsT0FBTyxjQUFjLEtBQUssT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNGLHVDQUFpQixHQUFqQixVQUFrQixZQUEwQixFQUFFLFdBQW1CO1FBQzlELE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSyxXQUFXLENBQUM7SUFDeEUsQ0FBQztJQUVBOztNQUVFO0lBQ0QsK0JBQVMsR0FBVCxVQUFVLFlBQTBCO1FBQ2xDLElBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUMzRCxJQUFJLE1BQU0sRUFBRTtZQUNSLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UmVxdWVzdFR5cGUsIEhhbmRsZXJJbnB1dCB9IGZyb20gJ2Fzay1zZGstY29yZSc7XG5pbXBvcnQgeyBpbnRlcmZhY2VzIH0gZnJvbSBcImFzay1zZGstbW9kZWxcIjtcbmltcG9ydCBBUElJbnZvY2F0aW9uUmVxdWVzdCA9IGludGVyZmFjZXMuY29udmVyc2F0aW9ucy5BUElJbnZvY2F0aW9uUmVxdWVzdDtcblxuLyoqXG4gKiBUaGlzIGlzIGEgUmVxdWVzdFV0aWxzIGNsYXNzLlxuICovXG5leHBvcnQgY2xhc3MgVXRpbHNIZWxwZXIge1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHJlcXVlc3QgdHlwZSBpcyBbRGlhbG9nLkFQSS5JbnZva2VkXSBhbmQgaXRzIG5hbWUgaXMgc2FtZSBhcyBnaXZlbiBhcGkgbmFtZS5cbiAgICAgKi9cbiAgICBpc0FwaVJlcXVlc3QoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQsIGFwaU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZ2V0UmVxdWVzdFR5cGUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgIT09ICdEaWFsb2cuQVBJLkludm9rZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcGlSZXF1ZXN0TmFtZSA9IChoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlLnJlcXVlc3QgYXMgQVBJSW52b2NhdGlvblJlcXVlc3QpLmFwaVJlcXVlc3Q/Lm5hbWU7XG4gICAgICAgIHJldHVybiBhcGlSZXF1ZXN0TmFtZSA9PT0gYXBpTmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIHJlcXVlc3QgbWF0Y2hlcyB0aGUgZ2l2ZW4gdHlwZS5cbiAgICAgKi9cbiAgICAgaXNSZXF1ZXN0V2l0aFR5cGUoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQsIHJlcXVlc3RUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGdldFJlcXVlc3RUeXBlKGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUpID09PSByZXF1ZXN0VHlwZTtcbiAgICB9XG5cbiAgICAgLyoqXG4gICAgICogUmV0dXJucyBsb2NhbGUgZnJvbSBAc2VlIHtIYW5kbGVySW5wdXR9LlxuICAgICAqL1xuICAgICAgZ2V0TG9jYWxlKGhhbmRsZXJJbnB1dDogSGFuZGxlcklucHV0KTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZS5yZXF1ZXN0LmxvY2FsZTtcbiAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTsgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBsb2NhbGUuJyk7XG4gICAgICAgIH1cbiAgICB9XG59Il19