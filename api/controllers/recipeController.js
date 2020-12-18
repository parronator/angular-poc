"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRecipes = exports.getRecipeById = void 0;
var recipe_1 = require("../../src/fixture/recipe");
var pagination = 3;
var getRecipeById = function (req, res) {
    var recipe = recipe_1.recipeJsonFixtureList.find(function (e) { return e.id === req.params.id; });
    res.status(200);
    res.json(recipe);
    return;
};
exports.getRecipeById = getRecipeById;
var getAllRecipes = function (req, res) {
    var response = recipe_1.recipeJsonFixtureList;
    if (req.query.page) {
        // @ts-ignore
        var start = parseInt(req.query.page, 10) * pagination;
        response = response.slice(start, start + pagination);
    }
    res.status(200);
    res.json(response);
    return;
};
exports.getAllRecipes = getAllRecipes;
