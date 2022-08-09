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
 * Get purchase result API Call
 */
var GetPurchaseResultHandler = /** @class */ (function () {
    function GetPurchaseResultHandler(utilsHelper) {
        this.utilsHelper = utilsHelper;
    }
    GetPurchaseResultHandler.prototype.canHandle = function (handlerInput) {
        return this.utilsHelper.isApiRequest(handlerInput, Constants.GET_PURCHASE_RESULT);
    };
    GetPurchaseResultHandler.prototype.handle = function (handlerInput) {
        return __awaiter(this, void 0, void 0, function () {
            var ISPResponseSessionAttributes;
            return __generator(this, function (_a) {
                console.log('Calling Handler for {}', Constants.GET_PURCHASE_RESULT);
                ISPResponseSessionAttributes = handlerInput.attributesManager.getSessionAttributes();
                return [2 /*return*/, handlerInput.responseBuilder
                        .withApiResponse({
                        name: ISPResponseSessionAttributes.name,
                        status: ISPResponseSessionAttributes.purchaseResult
                    })
                        .withShouldEndSession(false)
                        .getResponse()];
            });
        });
    };
    return GetPurchaseResultHandler;
}());
export { GetPurchaseResultHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXB1cmNoYXNlLXJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnNraWxscHVyY2hhc2VyZXVzYWJsZWNvbXBvbmVudC9oYW5kbGVycy9jb252ZXJzYXRpb25zL2dldC1wdXJjaGFzZS1yZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2pEOztHQUVHO0FBQ0g7SUFHSSxrQ0FBWSxXQUF3QjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNENBQVMsR0FBVCxVQUFVLFlBQTBCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFSyx5Q0FBTSxHQUFaLFVBQWEsWUFBMEI7Ozs7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBRS9ELDRCQUE0QixHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBd0IsQ0FBQztnQkFFakgsc0JBQU8sWUFBWSxDQUFDLGVBQWU7eUJBQzlCLGVBQWUsQ0FBQzt3QkFDYixJQUFJLEVBQUUsNEJBQTRCLENBQUMsSUFBSTt3QkFDdkMsTUFBTSxFQUFFLDRCQUE0QixDQUFDLGNBQWM7cUJBQ3RELENBQUM7eUJBQ0Qsb0JBQW9CLENBQUMsS0FBSyxDQUFDO3lCQUMzQixXQUFXLEVBQUUsRUFBQzs7O0tBQ3RCO0lBQ0wsK0JBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFuZGxlcklucHV0LCBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2Fzay1zZGstY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2Fzay1zZGstbW9kZWwnO1xuaW1wb3J0IHsgSVNQUmVzcG9uc2VTZXNzaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL0lTUFJlc3BvbnNlU2Vzc2lvbic7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vdXRpbC9Db25zdGFudHNcIjtcbmltcG9ydCB7IFV0aWxzSGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWwvSGVscGVyXCI7XG5cbi8qKlxuICogR2V0IHB1cmNoYXNlIHJlc3VsdCBBUEkgQ2FsbFxuICovXG5leHBvcnQgY2xhc3MgR2V0UHVyY2hhc2VSZXN1bHRIYW5kbGVyIGltcGxlbWVudHMgUmVxdWVzdEhhbmRsZXIge1xuICAgIHByaXZhdGUgdXRpbHNIZWxwZXI6IFV0aWxzSGVscGVyO1xuXG4gICAgY29uc3RydWN0b3IodXRpbHNIZWxwZXI6IFV0aWxzSGVscGVyKSB7XG4gICAgICAgIHRoaXMudXRpbHNIZWxwZXIgPSB1dGlsc0hlbHBlcjtcbiAgICB9XG5cbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbHNIZWxwZXIuaXNBcGlSZXF1ZXN0KGhhbmRsZXJJbnB1dCwgQ29uc3RhbnRzLkdFVF9QVVJDSEFTRV9SRVNVTFQpO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZShoYW5kbGVySW5wdXQ6IEhhbmRsZXJJbnB1dCk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhbGxpbmcgSGFuZGxlciBmb3Ige30nLCBDb25zdGFudHMuR0VUX1BVUkNIQVNFX1JFU1VMVCk7XG5cbiAgICAgICAgY29uc3QgSVNQUmVzcG9uc2VTZXNzaW9uQXR0cmlidXRlcyA9IGhhbmRsZXJJbnB1dC5hdHRyaWJ1dGVzTWFuYWdlci5nZXRTZXNzaW9uQXR0cmlidXRlcygpIGFzIElTUFJlc3BvbnNlU2Vzc2lvbjtcbiAgICAgICBcbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXJcbiAgICAgICAgICAgIC53aXRoQXBpUmVzcG9uc2UoeyBcbiAgICAgICAgICAgICAgICBuYW1lOiBJU1BSZXNwb25zZVNlc3Npb25BdHRyaWJ1dGVzLm5hbWUsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBJU1BSZXNwb25zZVNlc3Npb25BdHRyaWJ1dGVzLnB1cmNoYXNlUmVzdWx0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLndpdGhTaG91bGRFbmRTZXNzaW9uKGZhbHNlKVxuICAgICAgICAgICAgLmdldFJlc3BvbnNlKCk7XG4gICAgfVxufSJdfQ==