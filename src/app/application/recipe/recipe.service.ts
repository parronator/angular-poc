import { Injectable } from '@angular/core';
import {RecipeFacade} from '../../core/recipe/domain/recipe-facade';
import {Recipe} from '../../core/recipe/domain/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private facade: RecipeFacade) { }

  getAllRecipes(): Promise<Recipe[]>{
    throw new Error('Not yet implemented');
  }
  getAllRecipesPage(page: number): Promise<Recipe[]>{
    throw new Error('Not yet implemented');
  }
  getAllRecipesByProductId(productId: string): Promise<Recipe[]>{
    throw new Error('Not yet implemented');
  }
  getAllRecipesByProductIdPage(productId: string, page: number): Promise<Recipe[]>{
    throw new Error('Not yet implemented');
  }
  getRecipeById(id: string): Promise<Recipe>{
    throw new Error('Not yet implemented');
  }
}
