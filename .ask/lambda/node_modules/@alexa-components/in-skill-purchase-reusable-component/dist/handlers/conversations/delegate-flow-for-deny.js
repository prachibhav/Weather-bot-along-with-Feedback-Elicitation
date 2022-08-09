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
 * delegateFlowForDeny API request handler.
 */
var DelegateFlowForDenyHandler = /** @class */ (function () {
    function DelegateFlowForDenyHandler(utilsHelper) {
        this.utilsHelper = utilsHelper;
    }
    DelegateFlowForDenyHandler.prototype.canHandle = function (handlerInput) {
        return this.utilsHelper.isApiRequest(handlerInput, Constants.DELEGATE_FLOW_FOR_DENY_API);
    };
    DelegateFlowForDenyHandler.prototype.handle = function (handlerInput) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Calling Handler for {}', Constants.DELEGATE_FLOW_FOR_DENY_API);
                // dummy API response
                return [2 /*return*/, handlerInput.responseBuilder
                        .withApiResponse({})
                        .withShouldEndSession(false)
                        .getResponse()];
            });
        });
    };
    return DelegateFlowForDenyHandler;
}());
export { DelegateFlowForDenyHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZWdhdGUtZmxvdy1mb3ItZGVueS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnNraWxscHVyY2hhc2VyZXVzYWJsZWNvbXBvbmVudC9oYW5kbGVycy9jb252ZXJzYXRpb25zL2RlbGVnYXRlLWZsb3ctZm9yLWRlbnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2pEOztHQUVHO0FBQ0g7SUFHSSxvQ0FBWSxXQUF3QjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOENBQVMsR0FBVCxVQUFVLFlBQTBCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQzVGLENBQUM7SUFFSSwyQ0FBTSxHQUFaLFVBQWEsWUFBMEI7OztnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDNUUscUJBQXFCO2dCQUNyQixzQkFBTyxZQUFZLENBQUMsZUFBZTt5QkFDOUIsZUFBZSxDQUFDLEVBQUUsQ0FBQzt5QkFDbkIsb0JBQW9CLENBQUMsS0FBSyxDQUFDO3lCQUMzQixXQUFXLEVBQUUsRUFBQzs7O0tBQ3RCO0lBQ0wsaUNBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFuZGxlcklucHV0LCBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2Fzay1zZGstY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2Fzay1zZGstbW9kZWwnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWwvQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBVdGlsc0hlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsL0hlbHBlclwiO1xuXG4vKipcbiAqIGRlbGVnYXRlRmxvd0ZvckRlbnkgQVBJIHJlcXVlc3QgaGFuZGxlci5cbiAqL1xuZXhwb3J0IGNsYXNzIERlbGVnYXRlRmxvd0ZvckRlbnlIYW5kbGVyIGltcGxlbWVudHMgUmVxdWVzdEhhbmRsZXIge1xuICAgIHByaXZhdGUgdXRpbHNIZWxwZXI6IFV0aWxzSGVscGVyO1xuXG4gICAgY29uc3RydWN0b3IodXRpbHNIZWxwZXI6IFV0aWxzSGVscGVyKSB7XG4gICAgICAgIHRoaXMudXRpbHNIZWxwZXIgPSB1dGlsc0hlbHBlcjtcbiAgICB9XG5cbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbHNIZWxwZXIuaXNBcGlSZXF1ZXN0KGhhbmRsZXJJbnB1dCwgQ29uc3RhbnRzLkRFTEVHQVRFX0ZMT1dfRk9SX0RFTllfQVBJKVxuICAgIH1cblxuICAgYXN5bmMgaGFuZGxlKGhhbmRsZXJJbnB1dDogSGFuZGxlcklucHV0KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGluZyBIYW5kbGVyIGZvciB7fScsIENvbnN0YW50cy5ERUxFR0FURV9GTE9XX0ZPUl9ERU5ZX0FQSSk7XG4gICAgICAgIC8vIGR1bW15IEFQSSByZXNwb25zZVxuICAgICAgICByZXR1cm4gaGFuZGxlcklucHV0LnJlc3BvbnNlQnVpbGRlclxuICAgICAgICAgICAgLndpdGhBcGlSZXNwb25zZSh7fSlcbiAgICAgICAgICAgIC53aXRoU2hvdWxkRW5kU2Vzc2lvbihmYWxzZSlcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn0iXX0=