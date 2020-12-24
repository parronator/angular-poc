"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shade = void 0;
var shadeValueObject_1 = require("./shadeValueObject");
var uniqueId_1 = require("../../../shared/domain/uniqueId");
var Shade = /** @class */ (function () {
    function Shade(id, color, name, colorId) {
        this.id = id;
        this.color = color;
        this.name = name;
        this.colorId = colorId;
    }
    Shade.create = function (_a) {
        var id = _a.id, name = _a.name, colorId = _a.colorId, color = _a.color;
        return new Shade(uniqueId_1.UniqueId.create(id), shadeValueObject_1.ShadeColor.create(color), shadeValueObject_1.ShadeName.create(name), colorId);
    };
    Shade.prototype.toJson = function () {
        return {
            id: this.id.value,
            color: this.color.value,
            name: this.name.value,
            colorId: this.colorId
        };
    };
    return Shade;
}());
exports.Shade = Shade;
