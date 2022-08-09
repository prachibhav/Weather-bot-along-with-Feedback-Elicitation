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
/**
 * Get in-skill product list API Call
 */
var GetInSkillProductListHandler = /** @class */ (function () {
    function GetInSkillProductListHandler(utilsHelper) {
        this.utilsHelper = utilsHelper;
    }
    GetInSkillProductListHandler.prototype.canHandle = function (handlerInput) {
        return this.utilsHelper.isApiRequest(handlerInput, Constants.GET_IN_SKILL_PRODUCTS_API);
    };
    GetInSkillProductListHandler.prototype.handle = function (handlerInput) {
        return __awaiter(this, void 0, void 0, function () {
            var inSkillProductList, locale, serviceClientFactory, nextToken, maxResults;
            return __generator(this, function (_a) {
                console.log('Calling Handler for {}', Constants.GET_IN_SKILL_PRODUCTS_API);
                inSkillProductList = [];
                locale = this.utilsHelper.getLocale(handlerInput);
                serviceClientFactory = handlerInput.serviceClientFactory;
                if (serviceClientFactory) {
                    nextToken = undefined;
                    maxResults = undefined;
                    return [2 /*return*/, serviceClientFactory.getMonetizationServiceClient()
                            .getInSkillProducts(locale, Constants.PURCHASABLE, Constants.NOT_ENTITLED, Constants.SUBSCRIPTION, nextToken, maxResults)
                            .then(function (result) {
                            result.inSkillProducts
                                .map(function (record) { return inSkillProductList.push({
                                productId: record.productId,
                                productName: record.name,
                                productSummary: record.summary
                            }); });
                            return handlerInput.responseBuilder
                                .withApiResponse({ inSkillProductList: inSkillProductList })
                                .withShouldEndSession(false)
                                .getResponse();
                        })
                            .catch(function (error) {
                            throw new MonetizationServiceClientException('Failed in getting in skill product list, error: ' + error);
                        })];
                }
                else {
                    throw new MonetizationServiceClientException("There is no valid monetizationClient. Please add default api client in SkillBuilder.");
                }
                return [2 /*return*/];
            });
        });
    };
    return GetInSkillProductListHandler;
}());
export { GetInSkillProductListHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWluLXNraWxsLXByb2R1Y3QtbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnNraWxscHVyY2hhc2VyZXVzYWJsZWNvbXBvbmVudC9oYW5kbGVycy9jb252ZXJzYXRpb25zL2dldC1pbi1za2lsbC1wcm9kdWN0LWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2pELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXhHOztHQUVHO0FBQ0g7SUFHSSxzQ0FBWSxXQUF3QjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0RBQVMsR0FBVCxVQUFVLFlBQTBCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0lBQzNGLENBQUM7SUFFSyw2Q0FBTSxHQUFaLFVBQWEsWUFBMEI7Ozs7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQ3JFLGtCQUFrQixHQUFjLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNsRCxvQkFBb0IsR0FBRyxZQUFZLENBQUMsb0JBQW9CLENBQUM7Z0JBRS9ELElBQUcsb0JBQW9CLEVBQUU7b0JBRWYsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDdEIsVUFBVSxHQUFHLFNBQVMsQ0FBQztvQkFDN0Isc0JBQU8sb0JBQW9CLENBQUMsNEJBQTRCLEVBQUU7NkJBQ3JELGtCQUFrQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDOzZCQUN4SCxJQUFJLENBQUMsVUFBQyxNQUFNOzRCQUNULE1BQU0sQ0FBQyxlQUFlO2lDQUNqQixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0NBQ25DLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztnQ0FDM0IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dDQUN4QixjQUFjLEVBQUUsTUFBTSxDQUFDLE9BQU87NkJBQ3RCLENBQUMsRUFKRSxDQUlGLENBQUMsQ0FBQzs0QkFFbkIsT0FBTyxZQUFZLENBQUMsZUFBZTtpQ0FDOUIsZUFBZSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztpQ0FDMUQsb0JBQW9CLENBQUMsS0FBSyxDQUFDO2lDQUMzQixXQUFXLEVBQUUsQ0FBQzt3QkFDdkIsQ0FBQyxDQUFDOzZCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7NEJBQ1QsTUFBTSxJQUFJLGtDQUFrQyxDQUFDLGtEQUFrRCxHQUFHLEtBQUssQ0FBQyxDQUFDO3dCQUM3RyxDQUFDLENBQUMsRUFBQztpQkFDVjtxQkFBTTtvQkFDSCxNQUFNLElBQUksa0NBQWtDLENBQUMsc0ZBQXNGLENBQUMsQ0FBQztpQkFDeEk7Ozs7S0FDSjtJQUNMLG1DQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhbmRsZXJJbnB1dCwgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdhc2stc2RrLWNvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdhc2stc2RrLW1vZGVsJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi8uLi91dGlsL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVXRpbHNIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbC9IZWxwZXJcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvUHJvZHVjdCc7XG5pbXBvcnQgeyBNb25ldGl6YXRpb25TZXJ2aWNlQ2xpZW50RXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vZXhjZXB0aW9uL01vbmV0aXphdGlvblNlcnZpY2VDbGllbnRFeGNlcHRpb24nO1xuXG4vKipcbiAqIEdldCBpbi1za2lsbCBwcm9kdWN0IGxpc3QgQVBJIENhbGxcbiAqL1xuZXhwb3J0IGNsYXNzIEdldEluU2tpbGxQcm9kdWN0TGlzdEhhbmRsZXIgaW1wbGVtZW50cyBSZXF1ZXN0SGFuZGxlciB7XG4gICAgcHJpdmF0ZSB1dGlsc0hlbHBlcjogVXRpbHNIZWxwZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih1dGlsc0hlbHBlcjogVXRpbHNIZWxwZXIpIHtcbiAgICAgICAgdGhpcy51dGlsc0hlbHBlciA9IHV0aWxzSGVscGVyO1xuICAgIH1cblxuICAgIGNhbkhhbmRsZShoYW5kbGVySW5wdXQ6IEhhbmRsZXJJbnB1dCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy51dGlsc0hlbHBlci5pc0FwaVJlcXVlc3QoaGFuZGxlcklucHV0LCBDb25zdGFudHMuR0VUX0lOX1NLSUxMX1BST0RVQ1RTX0FQSSlcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGUoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDYWxsaW5nIEhhbmRsZXIgZm9yIHt9JywgQ29uc3RhbnRzLkdFVF9JTl9TS0lMTF9QUk9EVUNUU19BUEkpO1xuICAgICAgICBjb25zdCBpblNraWxsUHJvZHVjdExpc3Q6IFByb2R1Y3RbXSA9IFtdOyAgICAgIFxuICAgICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLnV0aWxzSGVscGVyLmdldExvY2FsZShoYW5kbGVySW5wdXQpO1xuICAgICAgICBjb25zdCBzZXJ2aWNlQ2xpZW50RmFjdG9yeSA9IGhhbmRsZXJJbnB1dC5zZXJ2aWNlQ2xpZW50RmFjdG9yeTtcblxuICAgICAgICBpZihzZXJ2aWNlQ2xpZW50RmFjdG9yeSkge1xuICAgICAgICAgICAgLy8gRmlsdGVyIHRoZSByZXR1cm5lZCBJU1AgcHJvZHVjdHMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciBwdXJjaGFzZSAoTk9UIEVOVElUTEVEKSBhbmQgYWxzbyBvbmx5IHdpdGggdHlwZSBvZiBzdWJzY3JpcHRpb25cbiAgICAgICAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IG1heFJlc3VsdHMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZUNsaWVudEZhY3RvcnkuZ2V0TW9uZXRpemF0aW9uU2VydmljZUNsaWVudCgpXG4gICAgICAgICAgICAgICAgLmdldEluU2tpbGxQcm9kdWN0cyhsb2NhbGUsIENvbnN0YW50cy5QVVJDSEFTQUJMRSwgQ29uc3RhbnRzLk5PVF9FTlRJVExFRCwgQ29uc3RhbnRzLlNVQlNDUklQVElPTiwgbmV4dFRva2VuLCBtYXhSZXN1bHRzKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmluU2tpbGxQcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChyZWNvcmQgPT4gaW5Ta2lsbFByb2R1Y3RMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcmVjb3JkLnByb2R1Y3RJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZTogcmVjb3JkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFN1bW1hcnk6IHJlY29yZC5zdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFzIFByb2R1Y3QpKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlcklucHV0LnJlc3BvbnNlQnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhBcGlSZXNwb25zZSh7IGluU2tpbGxQcm9kdWN0TGlzdDogaW5Ta2lsbFByb2R1Y3RMaXN0fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoU2hvdWxkRW5kU2Vzc2lvbihmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTW9uZXRpemF0aW9uU2VydmljZUNsaWVudEV4Y2VwdGlvbignRmFpbGVkIGluIGdldHRpbmcgaW4gc2tpbGwgcHJvZHVjdCBsaXN0LCBlcnJvcjogJyArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNb25ldGl6YXRpb25TZXJ2aWNlQ2xpZW50RXhjZXB0aW9uKFwiVGhlcmUgaXMgbm8gdmFsaWQgbW9uZXRpemF0aW9uQ2xpZW50LiBQbGVhc2UgYWRkIGRlZmF1bHQgYXBpIGNsaWVudCBpbiBTa2lsbEJ1aWxkZXIuXCIpO1xuICAgICAgICB9ICAgICAgXG4gICAgfVxufSJdfQ==