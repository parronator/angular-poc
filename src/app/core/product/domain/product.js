"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var uniqueId_1 = require("../../../shared/domain/uniqueId");
var productValueObject_1 = require("./productValueObject");
var recipe_1 = require("../../recipe/domain/recipe");
var Product = /** @class */ (function () {
    function Product(id, name, recipes) {
        this.id = id;
        this.name = name;
        this.recipes = recipes;
    }
    Product.create = function (_a) {
        var id = _a.id, name = _a.name, recipes = _a.recipes;
        return new Product(uniqueId_1.UniqueId.create(id), productValueObject_1.ProductName.create(name), recipes.map(function (recipe) { return recipe_1.Recipe.create(recipe); }));
    };
    return Product;
}());
exports.Product = Product;
