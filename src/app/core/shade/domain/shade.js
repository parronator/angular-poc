"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shade = void 0;
var shadeValueObject_1 = require("./shadeValueObject");
var uniqueId_1 = require("../../../shared/domain/uniqueId");
var Shade = /** @class */ (function () {
    function Shade(id, color, name) {
        this.id = id;
        this.color = color;
        this.name = name;
    }
    Shade.create = function (_a) {
        var id = _a.id, color = _a.color, name = _a.name;
        return new Shade(uniqueId_1.UniqueId.create(id), shadeValueObject_1.ShadeColor.create(color), shadeValueObject_1.ShadeName.create(name));
    };
    return Shade;
}());
exports.Shade = Shade;
