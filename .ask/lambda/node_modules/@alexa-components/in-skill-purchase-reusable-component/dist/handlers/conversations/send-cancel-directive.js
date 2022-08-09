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
 * Send Cancel Directive Call
 * Receives productID as input
 */
var SendCancelDirectiveHandler = /** @class */ (function () {
    function SendCancelDirectiveHandler(utilsHelper) {
        this.utilsHelper = utilsHelper;
    }
    SendCancelDirectiveHandler.prototype.canHandle = function (handlerInput) {
        return this.utilsHelper.isApiRequest(handlerInput, Constants.SEND_CANCEL_DIRECTIVE_API);
    };
    SendCancelDirectiveHandler.prototype.handle = function (handlerInput) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var apiInvocationRequest, productId;
            return __generator(this, function (_c) {
                console.log('Calling Handler for {}', Constants.SEND_CANCEL_DIRECTIVE_API);
                apiInvocationRequest = handlerInput.requestEnvelope.request;
                productId = (_b = (_a = apiInvocationRequest.apiRequest) === null || _a === void 0 ? void 0 : _a.arguments) === null || _b === void 0 ? void 0 : _b.productId;
                return [2 /*return*/, handlerInput.responseBuilder
                        .withApiResponse({})
                        .addDirective({
                        type: "Connections.SendRequest",
                        name: "Cancel",
                        payload: {
                            InSkillProduct: {
                                productId: productId,
                            },
                        },
                        token: "correlationToken",
                    })
                        .withShouldEndSession(true)
                        .getResponse()];
            });
        });
    };
    return SendCancelDirectiveHandler;
}());
export { SendCancelDirectiveHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1jYW5jZWwtZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2luc2tpbGxwdXJjaGFzZXJldXNhYmxlY29tcG9uZW50L2hhbmRsZXJzL2NvbnZlcnNhdGlvbnMvc2VuZC1jYW5jZWwtZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUlqRDs7O0dBR0c7QUFDSDtJQUdJLG9DQUFZLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCw4Q0FBUyxHQUFULFVBQVUsWUFBMEI7UUFDaEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVJLDJDQUFNLEdBQVosVUFBYSxZQUEwQjs7Ozs7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBRXJFLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBK0IsQ0FBQztnQkFDcEYsU0FBUyxHQUFHLE1BQUEsTUFBQSxvQkFBb0IsQ0FBQyxVQUFVLDBDQUFFLFNBQVMsMENBQUUsU0FBUyxDQUFDO2dCQUV4RSxzQkFBTyxZQUFZLENBQUMsZUFBZTt5QkFDOUIsZUFBZSxDQUFDLEVBQUUsQ0FBQzt5QkFDbkIsWUFBWSxDQUFDO3dCQUNWLElBQUksRUFBRSx5QkFBeUI7d0JBQy9CLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRTs0QkFDTCxjQUFjLEVBQUU7Z0NBQ1osU0FBUyxFQUFFLFNBQVM7NkJBQ3ZCO3lCQUNKO3dCQUNELEtBQUssRUFBRSxrQkFBa0I7cUJBQzVCLENBQUM7eUJBQ0Qsb0JBQW9CLENBQUMsSUFBSSxDQUFDO3lCQUMxQixXQUFXLEVBQUUsRUFBQzs7O0tBQ3RCO0lBQ0wsaUNBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFuZGxlcklucHV0LCBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2Fzay1zZGstY29yZSc7XG5pbXBvcnQgeyBpbnRlcmZhY2VzLCBSZXNwb25zZSB9IGZyb20gJ2Fzay1zZGstbW9kZWwnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWwvQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBVdGlsc0hlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsL0hlbHBlclwiO1xuXG5pbXBvcnQgQVBJSW52b2NhdGlvblJlcXVlc3QgPSBpbnRlcmZhY2VzLmNvbnZlcnNhdGlvbnMuQVBJSW52b2NhdGlvblJlcXVlc3Q7XG4vKipcbiAqIFNlbmQgQ2FuY2VsIERpcmVjdGl2ZSBDYWxsXG4gKiBSZWNlaXZlcyBwcm9kdWN0SUQgYXMgaW5wdXRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbmRDYW5jZWxEaXJlY3RpdmVIYW5kbGVyIGltcGxlbWVudHMgUmVxdWVzdEhhbmRsZXIge1xuICAgIHByaXZhdGUgdXRpbHNIZWxwZXI6IFV0aWxzSGVscGVyO1xuXG4gICAgY29uc3RydWN0b3IodXRpbHNIZWxwZXI6IFV0aWxzSGVscGVyKSB7XG4gICAgICAgIHRoaXMudXRpbHNIZWxwZXIgPSB1dGlsc0hlbHBlcjtcbiAgICB9XG5cbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbHNIZWxwZXIuaXNBcGlSZXF1ZXN0KGhhbmRsZXJJbnB1dCwgQ29uc3RhbnRzLlNFTkRfQ0FOQ0VMX0RJUkVDVElWRV9BUEkpO1xuICAgIH1cblxuICAgYXN5bmMgaGFuZGxlKGhhbmRsZXJJbnB1dDogSGFuZGxlcklucHV0KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGluZyBIYW5kbGVyIGZvciB7fScsIENvbnN0YW50cy5TRU5EX0NBTkNFTF9ESVJFQ1RJVkVfQVBJKTtcblxuICAgICAgICBjb25zdCBhcGlJbnZvY2F0aW9uUmVxdWVzdCA9IGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUucmVxdWVzdCBhcyBBUElJbnZvY2F0aW9uUmVxdWVzdDtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gYXBpSW52b2NhdGlvblJlcXVlc3QuYXBpUmVxdWVzdD8uYXJndW1lbnRzPy5wcm9kdWN0SWQ7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXJcbiAgICAgICAgICAgIC53aXRoQXBpUmVzcG9uc2Uoe30pXG4gICAgICAgICAgICAuYWRkRGlyZWN0aXZlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkNvbm5lY3Rpb25zLlNlbmRSZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDYW5jZWxcIixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIEluU2tpbGxQcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3RJZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRva2VuOiBcImNvcnJlbGF0aW9uVG9rZW5cIixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2l0aFNob3VsZEVuZFNlc3Npb24odHJ1ZSlcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn0iXX0=