"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeFixturePage2 = exports.recipeFixturePage1 = exports.recipeJsonFixturePage2 = exports.recipeJsonFixturePage1 = exports.recipeFixtureList = exports.recipeJsonFixtureList = exports.singleRecipeFixture = exports.singleJsonRecipeFixture = void 0;
var recipe_1 = require("../app/core/recipe/domain/recipe");
exports.singleJsonRecipeFixture = {
    id: 'recipeId1',
    sourceId: 'sourceRecipeId1',
    sourceName: 'recipe 1',
    colorId: 'colorId1',
    opacity: 20.34,
    thickness: 1.234
};
exports.singleRecipeFixture = recipe_1.Recipe.create(exports.singleJsonRecipeFixture);
exports.recipeJsonFixtureList = [
    exports.singleJsonRecipeFixture,
    {
        id: 'recipeId2',
        sourceId: 'sourceRecipeId2',
        sourceName: 'recipe 2',
        colorId: 'colorId2',
        opacity: 11.34,
        thickness: 11.234
    },
    {
        id: 'recipeId3',
        sourceId: 'sourceRecipeId3',
        sourceName: 'recipe 3',
        colorId: 'colorId3',
        opacity: 22.34,
        thickness: 22.234
    }
];
exports.recipeFixtureList = exports.recipeJsonFixtureList.map(function (recipe) { return recipe_1.Recipe.create(recipe); });
exports.recipeJsonFixturePage1 = [exports.recipeJsonFixtureList[0], exports.recipeJsonFixtureList[1]];
exports.recipeJsonFixturePage2 = [exports.recipeJsonFixtureList[2]];
exports.recipeFixturePage1 = exports.recipeJsonFixturePage1.map(function (recipe) { return recipe_1.Recipe.create(recipe); });
exports.recipeFixturePage2 = exports.recipeJsonFixturePage2.map(function (recipe) { return recipe_1.Recipe.create(recipe); });
