import {Recipe} from "./recipe";

export abstract class RecipeFacade {
  abstract async getAlLRecipes(): Promise<Recipe[]>;
  abstract async getAlLRecipesPage(page: number): Promise<Recipe[]>;
  abstract async getAlLRecipesByProductId(): Promise<Recipe[]>;
  abstract async getAlLRecipesByProductIdPage(page: number): Promise<Recipe[]>;
  abstract async getRecipeById(id: string): Promise<Recipe>;
}
