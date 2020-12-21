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
    thickness: 1.234,
    engineered: true,
    released: false
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
        thickness: 11.234,
        engineered: false,
        released: true
    },
    {
        id: 'recipeId3',
        sourceId: 'sourceRecipeId3',
        sourceName: 'recipe 3',
        colorId: 'colorId3',
        opacity: 22.34,
        thickness: 22.234,
        engineered: true,
        released: true
    },
    {
        id: 'recipeId4',
        sourceId: 'sourceRecipeId4',
        sourceName: 'recipe 4',
        colorId: 'colorId4',
        opacity: 22.34,
        thickness: 22.234,
        engineered: false,
        released: false
    },
    {
        id: 'recipeId5',
        sourceId: 'sourceRecipeId5',
        sourceName: 'recipe 5',
        colorId: 'colorId5',
        opacity: 22.34,
        thickness: 22.234,
        engineered: true,
        released: false
    },
    {
        id: 'recipeId6',
        sourceId: 'sourceRecipeId6',
        sourceName: 'recipe 6',
        colorId: 'colorId6',
        opacity: 22.34,
        thickness: 22.234,
        engineered: false,
        released: true
    }
];
exports.recipeFixtureList = exports.recipeJsonFixtureList.map(function (recipe) { return recipe_1.Recipe.create(recipe); });
exports.recipeJsonFixturePage1 = [exports.recipeJsonFixtureList[0], exports.recipeJsonFixtureList[1], exports.recipeJsonFixtureList[2]];
exports.recipeJsonFixturePage2 = [exports.recipeJsonFixtureList[3], exports.recipeJsonFixtureList[4], exports.recipeJsonFixtureList[5]];
exports.recipeFixturePage1 = exports.recipeJsonFixturePage1.map(function (recipe) { return recipe_1.Recipe.create(recipe); });
exports.recipeFixturePage2 = exports.recipeJsonFixturePage2.map(function (recipe) { return recipe_1.Recipe.create(recipe); });
