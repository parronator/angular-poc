import {RecipeFacade} from '../domain/recipe-facade';
import {Recipe} from '../domain/recipe';

export class TestRecipeFacade implements RecipeFacade{
  async getAllRecipes(): Promise<Recipe[]> {
    throw new Error('Not yet implemented');
  }

  async getAllRecipesPage(page: number): Promise<Recipe[]> {
    throw new Error('Not yet implemented');
  }

  async getRecipeById(id: string): Promise<Recipe> {
    throw new Error('Not yet implemented');
  }

  async getAllRecipesByProductId(productId: string): Promise<Recipe[]> {
    throw new Error('Not yet implemented');
  }

  async getAllRecipesByProductIdPage(productId: string, page: number): Promise<Recipe[]> {
    throw new Error('Not yet implemented');
  }
}
