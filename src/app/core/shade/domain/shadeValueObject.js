"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadeName = exports.ShadeColor = void 0;
var ShadeColor = /** @class */ (function () {
    function ShadeColor(value) {
        this.value = value;
    }
    ShadeColor.validate = function (value) {
        return !!value.length;
    };
    ShadeColor.create = function (value) {
        if (!ShadeColor.validate(value)) {
            throw new Error();
        }
        return new ShadeColor(value);
    };
    return ShadeColor;
}());
exports.ShadeColor = ShadeColor;
var ShadeName = /** @class */ (function () {
    function ShadeName(value) {
        this.value = value;
    }
    ShadeName.validate = function (value) {
        if (value.length < ShadeName.minLength || value.length > ShadeName.maxLength) {
            return false;
        }
        return true;
    };
    ShadeName.create = function (value) {
        if (!ShadeName.validate(value)) {
            throw new Error();
        }
        return new ShadeName(value);
    };
    ShadeName.minLength = 1;
    ShadeName.maxLength = 50;
    return ShadeName;
}());
exports.ShadeName = ShadeName;
