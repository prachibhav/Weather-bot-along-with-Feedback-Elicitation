var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MonetizationServiceClientException = /** @class */ (function (_super) {
    __extends(MonetizationServiceClientException, _super);
    function MonetizationServiceClientException(message) {
        var _this = _super.call(this, "MonetizationServiceClientException: " + message) || this;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, MonetizationServiceClientException.prototype);
        return _this;
    }
    return MonetizationServiceClientException;
}(Error));
export { MonetizationServiceClientException };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9uZXRpemF0aW9uU2VydmljZUNsaWVudEV4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnNraWxscHVyY2hhc2VyZXVzYWJsZWNvbXBvbmVudC9leGNlcHRpb24vTW9uZXRpemF0aW9uU2VydmljZUNsaWVudEV4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUF3RCxzREFBSztJQUN6RCw0Q0FBWSxPQUFlO1FBQTNCLFlBQ0ksa0JBQU0sc0NBQXNDLEdBQUcsT0FBTyxDQUFDLFNBSTFEO1FBRkcsZ0NBQWdDO1FBQ2hDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLGtDQUFrQyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUM5RSxDQUFDO0lBQ0wseUNBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBd0QsS0FBSyxHQU81RCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNb25ldGl6YXRpb25TZXJ2aWNlQ2xpZW50RXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBzdXBlcihcIk1vbmV0aXphdGlvblNlcnZpY2VDbGllbnRFeGNlcHRpb246IFwiICsgbWVzc2FnZSk7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBwcm90b3R5cGUgZXhwbGljaXRseS5cbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE1vbmV0aXphdGlvblNlcnZpY2VDbGllbnRFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59Il19