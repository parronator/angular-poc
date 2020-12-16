import { Injectable } from '@angular/core';
import {RecipeFacade} from '../../core/recipe/domain/recipe-facade';
import {Recipe} from '../../core/recipe/domain/recipe';
import {EntityState} from '../../shared/application/entity-state';
import {BehaviorSubject} from "rxjs";
import {InitialShadeState} from "../shade/shadeService";
import {map} from "rxjs/operators";
import {BaseService} from "../../shared/application/base.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends BaseService<Recipe> {

  constructor(private facade: RecipeFacade) {
    super();
  }

  async getAllRecipes(): Promise<void>{
    this.setLoading(true);
    const recipes = await this.facade.getAllRecipes();
    this.setEntities(recipes);
    this.setLoading(false);
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
