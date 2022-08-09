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
/**
 * Send buy directive API Call
 */
var SendBuyDirectiveHandler = /** @class */ (function () {
    function SendBuyDirectiveHandler(utilsHelper) {
        this.utilsHelper = utilsHelper;
    }
    SendBuyDirectiveHandler.prototype.canHandle = function (handlerInput) {
        return this.utilsHelper.isApiRequest(handlerInput, Constants.SEND_BUY_DIRECTIVE_API);
    };
    SendBuyDirectiveHandler.prototype.handle = function (handlerInput) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var apiInvocationRequest, productId;
            return __generator(this, function (_c) {
                console.log('Calling Handler for {}', Constants.SEND_BUY_DIRECTIVE_API);
                apiInvocationRequest = handlerInput.requestEnvelope.request;
                productId = (_b = (_a = apiInvocationRequest.apiRequest) === null || _a === void 0 ? void 0 : _a.arguments) === null || _b === void 0 ? void 0 : _b.productId;
                return [2 /*return*/, handlerInput.responseBuilder
                        .withApiResponse({})
                        .addDirective({
                        type: Constants.SEND_REQUEST,
                        name: Constants.BUY,
                        payload: {
                            InSkillProduct: {
                                productId: productId
                            }
                        },
                        token: "correlationToken"
                    })
                        .withShouldEndSession(true)
                        .getResponse()];
            });
        });
    };
    return SendBuyDirectiveHandler;
}());
export { SendBuyDirectiveHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1idXktZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2luc2tpbGxwdXJjaGFzZXJldXNhYmxlY29tcG9uZW50L2hhbmRsZXJzL2NvbnZlcnNhdGlvbnMvc2VuZC1idXktZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUlqRDs7R0FFRztBQUNIO0lBR0ksaUNBQVksV0FBd0I7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVELDJDQUFTLEdBQVQsVUFBVSxZQUEwQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUN4RixDQUFDO0lBRUksd0NBQU0sR0FBWixVQUFhLFlBQTBCOzs7OztnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFFbEUsb0JBQW9CLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUErQixDQUFDO2dCQUNwRixTQUFTLEdBQUcsTUFBQSxNQUFBLG9CQUFvQixDQUFDLFVBQVUsMENBQUUsU0FBUywwQ0FBRSxTQUFTLENBQUM7Z0JBRXhFLHNCQUFPLFlBQVksQ0FBQyxlQUFlO3lCQUMxQixlQUFlLENBQUMsRUFBRSxDQUFDO3lCQUNuQixZQUFZLENBQUM7d0JBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxZQUFZO3dCQUM1QixJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUc7d0JBQ25CLE9BQU8sRUFBRTs0QkFDTCxjQUFjLEVBQUU7Z0NBQ1osU0FBUyxFQUFFLFNBQVM7NkJBQ3ZCO3lCQUNKO3dCQUNELEtBQUssRUFBRSxrQkFBa0I7cUJBQzVCLENBQUM7eUJBQ0Qsb0JBQW9CLENBQUMsSUFBSSxDQUFDO3lCQUMxQixXQUFXLEVBQUUsRUFBQzs7O0tBQzFCO0lBQ0wsOEJBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFuZGxlcklucHV0LCBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2Fzay1zZGstY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSwgaW50ZXJmYWNlcyB9IGZyb20gJ2Fzay1zZGstbW9kZWwnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWwvQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBVdGlsc0hlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsL0hlbHBlclwiO1xuaW1wb3J0IEFQSUludm9jYXRpb25SZXF1ZXN0ID0gaW50ZXJmYWNlcy5jb252ZXJzYXRpb25zLkFQSUludm9jYXRpb25SZXF1ZXN0O1xuXG4vKipcbiAqIFNlbmQgYnV5IGRpcmVjdGl2ZSBBUEkgQ2FsbFxuICovXG5leHBvcnQgY2xhc3MgU2VuZEJ1eURpcmVjdGl2ZUhhbmRsZXIgaW1wbGVtZW50cyBSZXF1ZXN0SGFuZGxlciB7XG4gICAgcHJpdmF0ZSB1dGlsc0hlbHBlcjogVXRpbHNIZWxwZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih1dGlsc0hlbHBlcjogVXRpbHNIZWxwZXIpIHtcbiAgICAgICAgdGhpcy51dGlsc0hlbHBlciA9IHV0aWxzSGVscGVyO1xuICAgIH1cblxuICAgIGNhbkhhbmRsZShoYW5kbGVySW5wdXQ6IEhhbmRsZXJJbnB1dCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy51dGlsc0hlbHBlci5pc0FwaVJlcXVlc3QoaGFuZGxlcklucHV0LCBDb25zdGFudHMuU0VORF9CVVlfRElSRUNUSVZFX0FQSSlcbiAgICB9XG5cbiAgIGFzeW5jIGhhbmRsZShoYW5kbGVySW5wdXQ6IEhhbmRsZXJJbnB1dCk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhbGxpbmcgSGFuZGxlciBmb3Ige30nLCBDb25zdGFudHMuU0VORF9CVVlfRElSRUNUSVZFX0FQSSk7XG5cbiAgICAgICAgY29uc3QgYXBpSW52b2NhdGlvblJlcXVlc3QgPSBoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlLnJlcXVlc3QgYXMgQVBJSW52b2NhdGlvblJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IGFwaUludm9jYXRpb25SZXF1ZXN0LmFwaVJlcXVlc3Q/LmFyZ3VtZW50cz8ucHJvZHVjdElkO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAgICAgLndpdGhBcGlSZXNwb25zZSh7fSlcbiAgICAgICAgICAgICAgICAuYWRkRGlyZWN0aXZlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uc3RhbnRzLlNFTkRfUkVRVUVTVCwgIFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBDb25zdGFudHMuQlVZLCAgICBcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogeyAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIEluU2tpbGxQcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0SWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IFwiY29ycmVsYXRpb25Ub2tlblwiICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC53aXRoU2hvdWxkRW5kU2Vzc2lvbih0cnVlKVxuICAgICAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn0iXX0=