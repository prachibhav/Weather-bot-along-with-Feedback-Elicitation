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
import { MonetizationServiceClientException } from '../../exception/MonetizationServiceClientException';
import { Constants } from "../../util/Constants";
/**
 * Get product ID API Call
 */
var GetProductIdHandler = /** @class */ (function () {
    function GetProductIdHandler(utilsHelper) {
        this.utilsHelper = utilsHelper;
    }
    GetProductIdHandler.prototype.canHandle = function (handlerInput) {
        return this.utilsHelper.isApiRequest(handlerInput, Constants.GET_PRODUCT_ID_API);
    };
    GetProductIdHandler.prototype.handle = function (handlerInput) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var apiInvocationRequest, productName, locale, serviceClientFactory;
            return __generator(this, function (_c) {
                console.log('Calling Handler for {}', Constants.GET_PRODUCT_ID_API);
                apiInvocationRequest = handlerInput.requestEnvelope.request;
                productName = (_b = (_a = apiInvocationRequest.apiRequest) === null || _a === void 0 ? void 0 : _a.arguments) === null || _b === void 0 ? void 0 : _b.productName;
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
                                .withApiResponse({
                                purchasable: String(product != undefined),
                                productId: product === null || product === void 0 ? void 0 : product.productId
                            })
                                .withShouldEndSession(false)
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
    return GetProductIdHandler;
}());
export { GetProductIdHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXByb2R1Y3QtaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5za2lsbHB1cmNoYXNlcmV1c2FibGVjb21wb25lbnQvaGFuZGxlcnMvY29udmVyc2F0aW9ucy9nZXQtcHJvZHVjdC1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJakQ7O0dBRUc7QUFDSDtJQUdJLDZCQUFZLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsWUFBMEI7UUFDaEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDcEYsQ0FBQztJQUVLLG9DQUFNLEdBQVosVUFBYSxZQUEwQjs7Ozs7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBRTlELG9CQUFvQixHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBK0IsQ0FBQztnQkFDcEYsV0FBVyxHQUFHLE1BQUEsTUFBQSxvQkFBb0IsQ0FBQyxVQUFVLDBDQUFFLFNBQVMsMENBQUUsV0FBVyxDQUFDO2dCQUV0RSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2xELG9CQUFvQixHQUFHLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztnQkFFL0QsSUFBRyxvQkFBb0IsRUFBRTtvQkFDckIsc0JBQU8sb0JBQW9CLENBQUMsNEJBQTRCLEVBQUU7NkJBQ3JELGtCQUFrQixDQUFDLE1BQU0sQ0FBQzs2QkFDMUIsSUFBSSxDQUFDLFVBQUMsTUFBTTs0QkFDVCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87Z0NBQy9DLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7NEJBQ25FLENBQUMsQ0FBQyxDQUFBOzRCQUVGLE9BQU8sWUFBWSxDQUFDLGVBQWU7aUNBQzlCLGVBQWUsQ0FBQztnQ0FDYixXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUM7Z0NBQ3pDLFNBQVMsRUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsU0FBUzs2QkFDaEMsQ0FBQztpQ0FDRCxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7aUNBQzNCLFdBQVcsRUFBRSxDQUFDO3dCQUN2QixDQUFDLENBQUM7NkJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSzs0QkFDVCxNQUFNLElBQUksa0NBQWtDLENBQUMsaURBQWlELEdBQUcsS0FBSyxDQUFDLENBQUM7d0JBQzVHLENBQUMsQ0FBQyxFQUFDO2lCQUNWO3FCQUFNO29CQUNILE1BQU0sSUFBSSxrQ0FBa0MsQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDO2lCQUN4STs7OztLQUNKO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBM0NELElBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFuZGxlcklucHV0LCBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2Fzay1zZGstY29yZSc7XG5pbXBvcnQgeyBpbnRlcmZhY2VzLCBSZXNwb25zZSB9IGZyb20gJ2Fzay1zZGstbW9kZWwnO1xuaW1wb3J0IHsgTW9uZXRpemF0aW9uU2VydmljZUNsaWVudEV4Y2VwdGlvbiB9IGZyb20gJy4uLy4uL2V4Y2VwdGlvbi9Nb25ldGl6YXRpb25TZXJ2aWNlQ2xpZW50RXhjZXB0aW9uJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi8uLi91dGlsL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVXRpbHNIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbC9IZWxwZXJcIjtcbmltcG9ydCBBUElJbnZvY2F0aW9uUmVxdWVzdCA9IGludGVyZmFjZXMuY29udmVyc2F0aW9ucy5BUElJbnZvY2F0aW9uUmVxdWVzdDtcblxuLyoqXG4gKiBHZXQgcHJvZHVjdCBJRCBBUEkgQ2FsbFxuICovXG5leHBvcnQgY2xhc3MgR2V0UHJvZHVjdElkSGFuZGxlciBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyIHtcbiAgICBwcml2YXRlIHV0aWxzSGVscGVyOiBVdGlsc0hlbHBlcjtcblxuICAgIGNvbnN0cnVjdG9yKHV0aWxzSGVscGVyOiBVdGlsc0hlbHBlcikge1xuICAgICAgICB0aGlzLnV0aWxzSGVscGVyID0gdXRpbHNIZWxwZXI7XG4gICAgfVxuXG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dDogSGFuZGxlcklucHV0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0aWxzSGVscGVyLmlzQXBpUmVxdWVzdChoYW5kbGVySW5wdXQsIENvbnN0YW50cy5HRVRfUFJPRFVDVF9JRF9BUEkpXG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlKGhhbmRsZXJJbnB1dDogSGFuZGxlcklucHV0KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGluZyBIYW5kbGVyIGZvciB7fScsIENvbnN0YW50cy5HRVRfUFJPRFVDVF9JRF9BUEkpO1xuXG4gICAgICAgIGNvbnN0IGFwaUludm9jYXRpb25SZXF1ZXN0ID0gaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZS5yZXF1ZXN0IGFzIEFQSUludm9jYXRpb25SZXF1ZXN0O1xuICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IGFwaUludm9jYXRpb25SZXF1ZXN0LmFwaVJlcXVlc3Q/LmFyZ3VtZW50cz8ucHJvZHVjdE5hbWU7XG5cbiAgICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy51dGlsc0hlbHBlci5nZXRMb2NhbGUoaGFuZGxlcklucHV0KTtcbiAgICAgICAgY29uc3Qgc2VydmljZUNsaWVudEZhY3RvcnkgPSBoYW5kbGVySW5wdXQuc2VydmljZUNsaWVudEZhY3Rvcnk7XG5cbiAgICAgICAgaWYoc2VydmljZUNsaWVudEZhY3RvcnkpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlQ2xpZW50RmFjdG9yeS5nZXRNb25ldGl6YXRpb25TZXJ2aWNlQ2xpZW50KClcbiAgICAgICAgICAgICAgICAuZ2V0SW5Ta2lsbFByb2R1Y3RzKGxvY2FsZSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSByZXN1bHQuaW5Ta2lsbFByb2R1Y3RzLmZpbmQocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkgPT0gcHJvZHVjdE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlcklucHV0LnJlc3BvbnNlQnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhBcGlSZXNwb25zZSh7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNhYmxlOiBTdHJpbmcocHJvZHVjdCAhPSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdD8ucHJvZHVjdElkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhTaG91bGRFbmRTZXNzaW9uKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBNb25ldGl6YXRpb25TZXJ2aWNlQ2xpZW50RXhjZXB0aW9uKCdGYWlsZWQgaW4gZ2V0dGluZyBpbiBza2lsbCBwcm9kdWN0IGxpc3QsIGVycm9yOicgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTW9uZXRpemF0aW9uU2VydmljZUNsaWVudEV4Y2VwdGlvbihcIlRoZXJlIGlzIG5vIHZhbGlkIG1vbmV0aXphdGlvbkNsaWVudC4gUGxlYXNlIGFkZCBkZWZhdWx0IGFwaSBjbGllbnQgaW4gU2tpbGxCdWlsZGVyLlwiKTtcbiAgICAgICAgfSAgICAgIFxuICAgIH1cbn0iXX0=