import {recipeJsonFixtureList} from '../../src/fixture/recipe';

const pagination = 3;

export const getRecipeById = (req: any, res: any) => {
  const recipe = recipeJsonFixtureList.find((e) => e.id === req.params.id);
  res.status(200);
  res.json(recipe);
  return;
};

export const getAllRecipes = (req: any, res: any) => {
  let response = recipeJsonFixtureList;
  if (req.query.page) {
    // @ts-ignore
    const start = parseInt(req.query.page, 10) * pagination;
    response = response.slice(start, start + pagination);
  }
  res.status(200);
  res.json(response);
  return;
};
