"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionName = void 0;
var CollectionName = /** @class */ (function () {
    function CollectionName(value) {
        this.value = value;
    }
    CollectionName.validate = function (value) {
        if (value.length < CollectionName.minLength || value.length > CollectionName.maxLength) {
            return false;
        }
        return true;
    };
    CollectionName.create = function (value) {
        if (!CollectionName.validate(value)) {
            throw new Error(); // TODO: define proper error
        }
        return new CollectionName(value);
    };
    CollectionName.minLength = 1;
    CollectionName.maxLength = 50;
    return CollectionName;
}());
exports.CollectionName = CollectionName;
