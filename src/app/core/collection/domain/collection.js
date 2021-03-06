"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
var uniqueId_1 = require("../../../shared/domain/uniqueId");
var collectionValueObject_1 = require("./collectionValueObject");
var shade_1 = require("../../shade/domain/shade");
var Collection = /** @class */ (function () {
    function Collection(id, name, shades) {
        this.id = id;
        this.name = name;
        this.shades = shades;
    }
    Object.defineProperty(Collection.prototype, "Id", {
        get: function () {
            return uniqueId_1.UniqueId.create(this.id.value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "Name", {
        get: function () {
            return this.Name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "Shades", {
        get: function () {
            return this.shades;
        },
        enumerable: false,
        configurable: true
    });
    Collection.create = function (_a) {
        var id = _a.id, name = _a.name, shades = _a.shades;
        return new Collection(uniqueId_1.UniqueId.create(id), collectionValueObject_1.CollectionName.create(name), shades.map(function (shade) { return shade_1.Shade.create(shade); }));
    };
    Collection.prototype.toJson = function () {
        return {
            id: this.id.value,
            name: this.name.value,
            shades: this.shades.map(function (shade) { return shade.toJson(); })
        };
    };
    return Collection;
}());
exports.Collection = Collection;
