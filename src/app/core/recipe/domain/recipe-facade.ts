import {Recipe} from './recipe';
import {BaseFacade} from '../../../shared/domain/BaseFacade';

export abstract class RecipeFacade extends BaseFacade<Recipe>{
  abstract async getAllRecipesPage(page: number): Promise<Recipe[]>;
  abstract async getAllRecipesByProductId(productId: string): Promise<Recipe[]>;
  abstract async getAllRecipesByProductIdPage(productId: string, page: number): Promise<Recipe[]>;
}
