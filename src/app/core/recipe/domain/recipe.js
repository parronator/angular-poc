"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
var uniqueId_1 = require("../../../shared/domain/uniqueId");
var Recipe = /** @class */ (function () {
    function Recipe(id, sourceId, sourceName, colorId, opacity, thickness, engineered, released) {
        if (engineered === void 0) { engineered = false; }
        if (released === void 0) { released = false; }
        this.id = id;
        this.sourceId = sourceId;
        this.sourceName = sourceName;
        this.colorId = colorId;
        this.opacity = opacity;
        this.thickness = thickness;
        this.engineered = engineered;
        this.released = released;
    }
    Object.defineProperty(Recipe.prototype, "Id", {
        get: function () {
            return uniqueId_1.UniqueId.create(this.id.value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "SourceId", {
        get: function () {
            return uniqueId_1.UniqueId.create(this.sourceId.value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "SourceName", {
        get: function () {
            return this.sourceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "ColorId", {
        get: function () {
            return uniqueId_1.UniqueId.create(this.colorId.value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "Opacity", {
        get: function () {
            return this.opacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "Thickness", {
        get: function () {
            return this.thickness;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "Engineered", {
        get: function () {
            return this.engineered;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "Released", {
        get: function () {
            return this.released;
        },
        enumerable: false,
        configurable: true
    });
    Recipe.create = function (_a) {
        var id = _a.id, sourceId = _a.sourceId, sourceName = _a.sourceName, colorId = _a.colorId, opacity = _a.opacity, thickness = _a.thickness;
        return new Recipe(uniqueId_1.UniqueId.create(id), uniqueId_1.UniqueId.create(sourceId), sourceName, uniqueId_1.UniqueId.create(colorId), opacity, thickness);
    };
    return Recipe;
}());
exports.Recipe = Recipe;
