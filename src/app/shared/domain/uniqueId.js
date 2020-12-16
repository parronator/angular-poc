"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueId = void 0;
var UniqueId = /** @class */ (function () {
    function UniqueId(value) {
        this.value = value;
    }
    UniqueId.validate = function (value) {
        return !!value.length;
    };
    UniqueId.create = function (value) {
        if (!UniqueId.validate(value)) {
            throw new Error();
        }
        return new UniqueId(value);
    };
    return UniqueId;
}());
exports.UniqueId = UniqueId;
