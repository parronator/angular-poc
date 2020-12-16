import {Recipe} from '../app/core/recipe/domain/recipe';
import {UniqueId} from '../app/shared/domain/uniqueId';

export const singleJsonRecipeFixture = {
    id: 'recipeId1',
    sourceId: 'sourceRecipeId1',
    sourceName: 'recipe 1',
    colorId: 'colorId1',
    opacity: 20.34,
    thickness: 1.234
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

export const recipeFixtureList = recipeJsonFixtureList.map(recipe => Recipe.create(recipe));

export const recipeJsonFixturePage1 = [recipeJsonFixtureList[0], recipeJsonFixtureList[1]];
export const recipeJsonFixturePage2 = [recipeJsonFixtureList[2]];

export const recipeFixturePage1 = recipeJsonFixturePage1.map(recipe => Recipe.create(recipe));
export const recipeFixturePage2 = recipeJsonFixturePage2.map(recipe => Recipe.create(recipe));
