"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleProductFixture = exports.productJSONFixture = void 0;
var product_1 = require("../app/core/product/domain/product");
var recipe_1 = require("./recipe");
exports.productJSONFixture = [{
        id: '1',
        name: 'product 1',
        recipes: recipe_1.recipeJsonFixtureList
    }];
exports.singleProductFixture = product_1.Product.create(exports.productJSONFixture[0]);
