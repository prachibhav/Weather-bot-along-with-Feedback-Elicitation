var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Constants } from "../../util/Constants";
import { DelegateHelper } from '../../util/DelegateHelper';
var ResumeResponseHandler = /** @class */ (function () {
    function ResumeResponseHandler(utilsHelper) {
        this.utilsHelper = utilsHelper;
    }
    ResumeResponseHandler.prototype.canHandle = function (handlerInput) {
        return this.utilsHelper.isRequestWithType(handlerInput, Constants.ISP_CONNECTIONS_RESPONSE);
    };
    ResumeResponseHandler.prototype.handle = function (handlerInput) {
        return __awaiter(this, void 0, void 0, function () {
            var connectionsResponseRequest, payload, name, sessionAttributes;
            return __generator(this, function (_a) {
                console.log('Calling Handler for {}', Constants.RESUME_RESPONSE);
                connectionsResponseRequest = handlerInput.requestEnvelope.request;
                payload = connectionsResponseRequest.payload;
                name = connectionsResponseRequest.name;
                sessionAttributes = {
                    name: name,
                    purchaseResult: payload === null || payload === void 0 ? void 0 : payload.purchaseResult
                };
                handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
                return [2 /*return*/, new DelegateHelper().proceedToAlexaConversationsEvent(handlerInput, Constants.RESUME_EVENT)];
            });
        });
    };
    return ResumeResponseHandler;
}());
export { ResumeResponseHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdW1lLXJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2luc2tpbGxwdXJjaGFzZXJldXNhYmxlY29tcG9uZW50L2hhbmRsZXJzL2NvbnZlcnNhdGlvbnMvcmVzdW1lLXJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUlqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHM0Q7SUFHSSwrQkFBWSxXQUF3QjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQseUNBQVMsR0FBVCxVQUFVLFlBQTBCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDL0YsQ0FBQztJQUVLLHNDQUFNLEdBQVosVUFBYSxZQUEwQjs7OztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBRTNELDBCQUEwQixHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBOEIsQ0FBQztnQkFDekYsT0FBTyxHQUFHLDBCQUEwQixDQUFDLE9BQU8sQ0FBQztnQkFDN0MsSUFBSSxHQUFHLDBCQUEwQixDQUFDLElBQUksQ0FBQztnQkFFdkMsaUJBQWlCLEdBQUc7b0JBQ3RCLElBQUksRUFBRSxJQUFJO29CQUNWLGNBQWMsRUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsY0FBYztpQkFDcEIsQ0FBQztnQkFDeEIsWUFBWSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3ZFLHNCQUFPLElBQUksY0FBYyxFQUFFLENBQUMsZ0NBQWdDLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBQzs7O0tBQ3RHO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFuZGxlcklucHV0LCBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2Fzay1zZGstY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSwgaW50ZXJmYWNlcyB9IGZyb20gJ2Fzay1zZGstbW9kZWwnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWwvQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBVdGlsc0hlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsL0hlbHBlclwiO1xuaW1wb3J0IENvbm5lY3Rpb25zUmVzcG9uc2UgPSBpbnRlcmZhY2VzLmNvbm5lY3Rpb25zLkNvbm5lY3Rpb25zUmVzcG9uc2U7XG5pbXBvcnQgeyBJU1BSZXNwb25zZVNlc3Npb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvSVNQUmVzcG9uc2VTZXNzaW9uJztcbmltcG9ydCB7IERlbGVnYXRlSGVscGVyIH0gZnJvbSAnLi4vLi4vdXRpbC9EZWxlZ2F0ZUhlbHBlcic7XG5cblxuZXhwb3J0IGNsYXNzIFJlc3VtZVJlc3BvbnNlSGFuZGxlciBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyIHtcbiAgICBwcml2YXRlIHV0aWxzSGVscGVyOiBVdGlsc0hlbHBlcjtcblxuICAgIGNvbnN0cnVjdG9yKHV0aWxzSGVscGVyOiBVdGlsc0hlbHBlcikge1xuICAgICAgICB0aGlzLnV0aWxzSGVscGVyID0gdXRpbHNIZWxwZXI7XG4gICAgfVxuXG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dDogSGFuZGxlcklucHV0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0aWxzSGVscGVyLmlzUmVxdWVzdFdpdGhUeXBlKGhhbmRsZXJJbnB1dCwgQ29uc3RhbnRzLklTUF9DT05ORUNUSU9OU19SRVNQT05TRSlcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGUoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDYWxsaW5nIEhhbmRsZXIgZm9yIHt9JywgQ29uc3RhbnRzLlJFU1VNRV9SRVNQT05TRSk7XG5cbiAgICAgICAgY29uc3QgY29ubmVjdGlvbnNSZXNwb25zZVJlcXVlc3QgPSBoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlLnJlcXVlc3QgYXMgQ29ubmVjdGlvbnNSZXNwb25zZTtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGNvbm5lY3Rpb25zUmVzcG9uc2VSZXF1ZXN0LnBheWxvYWQ7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb25uZWN0aW9uc1Jlc3BvbnNlUmVxdWVzdC5uYW1lO1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb25BdHRyaWJ1dGVzID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHB1cmNoYXNlUmVzdWx0OiBwYXlsb2FkPy5wdXJjaGFzZVJlc3VsdFxuICAgICAgICB9IGFzIElTUFJlc3BvbnNlU2Vzc2lvbjtcbiAgICAgICAgaGFuZGxlcklucHV0LmF0dHJpYnV0ZXNNYW5hZ2VyLnNldFNlc3Npb25BdHRyaWJ1dGVzKHNlc3Npb25BdHRyaWJ1dGVzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEZWxlZ2F0ZUhlbHBlcigpLnByb2NlZWRUb0FsZXhhQ29udmVyc2F0aW9uc0V2ZW50KGhhbmRsZXJJbnB1dCwgQ29uc3RhbnRzLlJFU1VNRV9FVkVOVCk7XG4gICAgfVxufSJdfQ==