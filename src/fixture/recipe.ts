import {Recipe} from '../app/core/recipe/domain/recipe';
import {UniqueId} from '../app/shared/domain/uniqueId';

export const singleJsonRecipeFixture = {
  id: 'recipeId1',
  sourceId: 'sourceRecipeId1',
  sourceName: 'recipe 1',
  colorId: 'colorId1',
  opacity: 20.34,
  thickness: 1.234,
  engineered: true,
  released: false
};

export const singleRecipeFixture = Recipe.create(singleJsonRecipeFixture);
export const recipeJsonFixtureList = [
  singleJsonRecipeFixture,
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

export const recipeFixtureList = recipeJsonFixtureList.map(recipe => Recipe.create(recipe));

export const recipeJsonFixturePage1 = [recipeJsonFixtureList[0], recipeJsonFixtureList[1], recipeJsonFixtureList[2]];
export const recipeJsonFixturePage2 = [recipeJsonFixtureList[3], recipeJsonFixtureList[4], recipeJsonFixtureList[5]];

export const recipeFixturePage1 = recipeJsonFixturePage1.map(recipe => Recipe.create(recipe));
export const recipeFixturePage2 = recipeJsonFixturePage2.map(recipe => Recipe.create(recipe));
