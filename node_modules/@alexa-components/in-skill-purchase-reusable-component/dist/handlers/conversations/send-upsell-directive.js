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
import { MonetizationServiceClientException } from '../../exception/MonetizationServiceClientException';
var SendUpsellDirectiveHandler = /** @class */ (function () {
    function SendUpsellDirectiveHandler(utilsHelper) {
        this.utilsHelper = utilsHelper;
    }
    SendUpsellDirectiveHandler.prototype.canHandle = function (handlerInput) {
        return this.utilsHelper.isApiRequest(handlerInput, Constants.SEND_UPSELL_DIRECTIVE_API);
    };
    SendUpsellDirectiveHandler.prototype.handle = function (handlerInput) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var apiInvocationRequest, upsellMessage, productName, locale, serviceClientFactory;
            return __generator(this, function (_e) {
                console.log('Calling Handler for {}', Constants.SEND_UPSELL_DIRECTIVE_API);
                apiInvocationRequest = handlerInput.requestEnvelope.request;
                upsellMessage = (_b = (_a = apiInvocationRequest.apiRequest) === null || _a === void 0 ? void 0 : _a.arguments) === null || _b === void 0 ? void 0 : _b.upsellMessage;
                productName = (_d = (_c = apiInvocationRequest.apiRequest) === null || _c === void 0 ? void 0 : _c.arguments) === null || _d === void 0 ? void 0 : _d.productName;
                locale = this.utilsHelper.getLocale(handlerInput);
                serviceClientFactory = handlerInput.serviceClientFactory;
                if (serviceClientFactory) {
                    return [2 /*return*/, serviceClientFactory.getMonetizationServiceClient()
                            .getInSkillProducts(locale)
                            .then(function (result) {
                            var product = result.inSkillProducts.find(function (product) {
                                return product.name.toLowerCase() == productName.toLowerCase();
                            });
                            return handlerInput.responseBuilder
                                .withApiResponse({})
                                .addDirective({
                                type: Constants.SEND_REQUEST,
                                name: Constants.UPSELL,
                                payload: {
                                    InSkillProduct: {
                                        productId: product === null || product === void 0 ? void 0 : product.productId,
                                    },
                                    upsellMessage: upsellMessage,
                                },
                                token: "correlationToken",
                            })
                                .withShouldEndSession(true)
                                .getResponse();
                        })
                            .catch(function (error) {
                            throw new MonetizationServiceClientException('Failed in getting in skill product list, error:' + error);
                        })];
                }
                else {
                    throw new MonetizationServiceClientException("There is no valid monetizationClient. Please add default api client in SkillBuilder.");
                }
                return [2 /*return*/];
            });
        });
    };
    return SendUpsellDirectiveHandler;
}());
export { SendUpsellDirectiveHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC11cHNlbGwtZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2luc2tpbGxwdXJjaGFzZXJldXNhYmxlY29tcG9uZW50L2hhbmRsZXJzL2NvbnZlcnNhdGlvbnMvc2VuZC11cHNlbGwtZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUl4RztJQUdJLG9DQUFZLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCw4Q0FBUyxHQUFULFVBQVUsWUFBMEI7UUFDaEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVJLDJDQUFNLEdBQVosVUFBYSxZQUEwQjs7Ozs7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQ3JFLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBK0IsQ0FBQztnQkFDcEYsYUFBYSxHQUFHLE1BQUEsTUFBQSxvQkFBb0IsQ0FBQyxVQUFVLDBDQUFFLFNBQVMsMENBQUUsYUFBYSxDQUFDO2dCQUMxRSxXQUFXLEdBQUcsTUFBQSxNQUFBLG9CQUFvQixDQUFDLFVBQVUsMENBQUUsU0FBUywwQ0FBRSxXQUFXLENBQUM7Z0JBQ3RFLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDbEQsb0JBQW9CLEdBQUcsWUFBWSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvRCxJQUFJLG9CQUFvQixFQUFFO29CQUN0QixzQkFBTyxvQkFBb0IsQ0FBQyw0QkFBNEIsRUFBRTs2QkFDckQsa0JBQWtCLENBQUMsTUFBTSxDQUFDOzZCQUMxQixJQUFJLENBQUMsVUFBQyxNQUFNOzRCQUNULElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztnQ0FDL0MsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs0QkFDbkUsQ0FBQyxDQUFDLENBQUE7NEJBRUYsT0FBTyxZQUFZLENBQUMsZUFBZTtpQ0FDOUIsZUFBZSxDQUFDLEVBQUUsQ0FBQztpQ0FDbkIsWUFBWSxDQUFDO2dDQUNWLElBQUksRUFBRSxTQUFTLENBQUMsWUFBWTtnQ0FDNUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO2dDQUN0QixPQUFPLEVBQUU7b0NBQ0wsY0FBYyxFQUFFO3dDQUNaLFNBQVMsRUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsU0FBUztxQ0FDaEM7b0NBQ0QsYUFBYSxFQUFFLGFBQWE7aUNBQy9CO2dDQUNELEtBQUssRUFBRSxrQkFBa0I7NkJBQzVCLENBQUM7aUNBQ0Qsb0JBQW9CLENBQUMsSUFBSSxDQUFDO2lDQUMxQixXQUFXLEVBQUUsQ0FBQzt3QkFDdkIsQ0FBQyxDQUFDOzZCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7NEJBQ1QsTUFBTSxJQUFJLGtDQUFrQyxDQUFDLGlEQUFpRCxHQUFHLEtBQUssQ0FBQyxDQUFDO3dCQUM1RyxDQUFDLENBQUMsRUFBQztpQkFDVjtxQkFDSTtvQkFDRCxNQUFNLElBQUksa0NBQWtDLENBQUMsc0ZBQXNGLENBQUMsQ0FBQztpQkFDeEk7Ozs7S0FDSjtJQUNMLGlDQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhbmRsZXJJbnB1dCwgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdhc2stc2RrLWNvcmUnO1xuaW1wb3J0IHsgaW50ZXJmYWNlcywgUmVzcG9uc2UgfSBmcm9tICdhc2stc2RrLW1vZGVsJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi8uLi91dGlsL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVXRpbHNIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbC9IZWxwZXJcIjtcbmltcG9ydCB7IE1vbmV0aXphdGlvblNlcnZpY2VDbGllbnRFeGNlcHRpb24gfSBmcm9tICcuLi8uLi9leGNlcHRpb24vTW9uZXRpemF0aW9uU2VydmljZUNsaWVudEV4Y2VwdGlvbic7XG5cbmltcG9ydCBBUElJbnZvY2F0aW9uUmVxdWVzdCA9IGludGVyZmFjZXMuY29udmVyc2F0aW9ucy5BUElJbnZvY2F0aW9uUmVxdWVzdDtcblxuZXhwb3J0IGNsYXNzIFNlbmRVcHNlbGxEaXJlY3RpdmVIYW5kbGVyIGltcGxlbWVudHMgUmVxdWVzdEhhbmRsZXIge1xuICAgIHByaXZhdGUgdXRpbHNIZWxwZXI6IFV0aWxzSGVscGVyO1xuXG4gICAgY29uc3RydWN0b3IodXRpbHNIZWxwZXI6IFV0aWxzSGVscGVyKSB7XG4gICAgICAgIHRoaXMudXRpbHNIZWxwZXIgPSB1dGlsc0hlbHBlcjtcbiAgICB9XG5cbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbHNIZWxwZXIuaXNBcGlSZXF1ZXN0KGhhbmRsZXJJbnB1dCwgQ29uc3RhbnRzLlNFTkRfVVBTRUxMX0RJUkVDVElWRV9BUEkpO1xuICAgIH1cblxuICAgYXN5bmMgaGFuZGxlKGhhbmRsZXJJbnB1dDogSGFuZGxlcklucHV0KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGluZyBIYW5kbGVyIGZvciB7fScsIENvbnN0YW50cy5TRU5EX1VQU0VMTF9ESVJFQ1RJVkVfQVBJKTtcbiAgICAgICAgY29uc3QgYXBpSW52b2NhdGlvblJlcXVlc3QgPSBoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlLnJlcXVlc3QgYXMgQVBJSW52b2NhdGlvblJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IHVwc2VsbE1lc3NhZ2UgPSBhcGlJbnZvY2F0aW9uUmVxdWVzdC5hcGlSZXF1ZXN0Py5hcmd1bWVudHM/LnVwc2VsbE1lc3NhZ2U7XG4gICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gYXBpSW52b2NhdGlvblJlcXVlc3QuYXBpUmVxdWVzdD8uYXJndW1lbnRzPy5wcm9kdWN0TmFtZTtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy51dGlsc0hlbHBlci5nZXRMb2NhbGUoaGFuZGxlcklucHV0KTtcbiAgICAgICAgY29uc3Qgc2VydmljZUNsaWVudEZhY3RvcnkgPSBoYW5kbGVySW5wdXQuc2VydmljZUNsaWVudEZhY3Rvcnk7XG4gICAgICAgIGlmIChzZXJ2aWNlQ2xpZW50RmFjdG9yeSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2VDbGllbnRGYWN0b3J5LmdldE1vbmV0aXphdGlvblNlcnZpY2VDbGllbnQoKVxuICAgICAgICAgICAgICAgIC5nZXRJblNraWxsUHJvZHVjdHMobG9jYWxlKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHJlc3VsdC5pblNraWxsUHJvZHVjdHMuZmluZChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKSA9PSBwcm9kdWN0TmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAud2l0aEFwaVJlc3BvbnNlKHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZERpcmVjdGl2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uc3RhbnRzLlNFTkRfUkVRVUVTVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBDb25zdGFudHMuVVBTRUxMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5Ta2lsbFByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdD8ucHJvZHVjdElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cHNlbGxNZXNzYWdlOiB1cHNlbGxNZXNzYWdlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiBcImNvcnJlbGF0aW9uVG9rZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAud2l0aFNob3VsZEVuZFNlc3Npb24odHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IE1vbmV0aXphdGlvblNlcnZpY2VDbGllbnRFeGNlcHRpb24oJ0ZhaWxlZCBpbiBnZXR0aW5nIGluIHNraWxsIHByb2R1Y3QgbGlzdCwgZXJyb3I6JyArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTW9uZXRpemF0aW9uU2VydmljZUNsaWVudEV4Y2VwdGlvbihcIlRoZXJlIGlzIG5vIHZhbGlkIG1vbmV0aXphdGlvbkNsaWVudC4gUGxlYXNlIGFkZCBkZWZhdWx0IGFwaSBjbGllbnQgaW4gU2tpbGxCdWlsZGVyLlwiKTtcbiAgICAgICAgfSAgXG4gICAgfVxufSJdfQ==