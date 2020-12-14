import {RecipeFacade} from '../domain/recipe-facade';
import {Recipe} from '../domain/recipe';
import {HttpClient} from '@angular/common/http';

export class RecipeHttpError{

}

export class RecipeHttpFacade implements RecipeFacade {

  constructor(private http: HttpClient){}

  async getAlLRecipes(): Promise<Recipe[]> {
    return Promise.resolve([]);
  }

  async getAlLRecipesByProductId(): Promise<Recipe[]> {
    return Promise.resolve([]);
  }

  async getAlLRecipesByProductIdPage(page: number): Promise<Recipe[]> {
    return Promise.resolve([]);
  }

  async getAlLRecipesPage(page: number): Promise<Recipe[]> {
    return Promise.resolve([]);
  }

  async getRecipeById(id: string): Promise<Recipe> {
    throw new Error('Not yet implemented');
    // return Promise.resolve(undefined);
  }
}
