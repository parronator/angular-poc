"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductName = void 0;
var ProductName = /** @class */ (function () {
    function ProductName(value) {
        this.value = value;
    }
    ProductName.validate = function (value) {
        return !(value.length < ProductName.minLength || value.length > ProductName.maxLength);
    };
    ProductName.create = function (value) {
        if (!ProductName.validate(value)) {
            throw new Error();
        }
        return new ProductName(value);
    };
    ProductName.minLength = 1;
    ProductName.maxLength = 20;
    return ProductName;
}());
exports.ProductName = ProductName;
