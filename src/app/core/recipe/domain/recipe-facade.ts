import {Recipe} from './recipe';

export abstract class RecipeFacade {
  abstract async getAllRecipes(): Promise<Recipe[]>;
  abstract async getAllRecipesPage(page: number): Promise<Recipe[]>;
  abstract async getAllRecipesByProductId(productId: string): Promise<Recipe[]>;
  abstract async getAllRecipesByProductIdPage(productId: string, page: number): Promise<Recipe[]>;
  abstract async getRecipeById(id: string): Promise<Recipe>;
}
