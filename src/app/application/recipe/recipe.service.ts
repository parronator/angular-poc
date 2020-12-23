import { Injectable } from '@angular/core';
import {RecipeFacade} from '../../core/recipe/domain/recipe-facade';
import {Recipe} from '../../core/recipe/domain/recipe';
import {BaseService} from '../../shared/application/base.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends BaseService<Recipe> {

  constructor(private facade: RecipeFacade) {
    super();
  }

  async getAll(): Promise<void>{
    await this.tryLoad(async () => {
      const load = await this.facade.getAll();
      this.setEntities(load);
    });
  }
  async getAllRecipesPage(page: number): Promise<Recipe[]>{
    throw new Error('Not yet implemented');
  }
  async getAllRecipesByProductId(productId: string): Promise<Recipe[]>{
    throw new Error('Not yet implemented');
  }
  async getAllRecipesByProductIdPage(productId: string, page: number): Promise<Recipe[]>{
    throw new Error('Not yet implemented');
  }
  async getRecipeById(id: string): Promise<void>{
    await this.tryLoad(async () => {
      const load = await this.facade.getById(id);
      this.setEntity(load);
    });
  }

  protected refreshEntities(): void {
    this.getAll();
  }
}
