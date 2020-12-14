import {RecipeFacade} from '../domain/recipe-facade';
import {Recipe} from '../domain/recipe';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';


export class RecipeHttpError{

}

export class RecipeHttpFacade implements RecipeFacade {

  public static recipeUrl = environment.baseUrl + '/recipe';

  constructor(private http: HttpClient){}

  async getAllRecipes(): Promise<Recipe[]> {
    try {
      return await this.http.get(RecipeHttpFacade.recipeUrl)
        .pipe(
          map((values: any) => values.map((v: any) => Recipe.create(v)))
        ).toPromise();
    } catch (e) {
      throw new RecipeHttpError();
    }
  }

  async getAllRecipesByProductId(productId: string): Promise<Recipe[]> {
    try {
      return await this.http.get(RecipeHttpFacade.recipeUrl + `?productId`) // todo: replace with actual url
        .pipe(
          map((values: any) => values.map((v: any) => Recipe.create(v)))
        ).toPromise();
    } catch (e) {
      throw new RecipeHttpError();
    }
  }

  async getAllRecipesByProductIdPage(productId: string, page: number): Promise<Recipe[]> {
    try {
      return await this.http.get(RecipeHttpFacade.recipeUrl + `?productId&page`) // Todo: replace with actual url
        .pipe(
          map((values: any) => values.map((v: any) => Recipe.create(v)))
        ).toPromise();
    } catch (e) {
      throw new RecipeHttpError();
    }
  }

  async getAllRecipesPage(page: number): Promise<Recipe[]> {
    try {
      return await this.http.get(RecipeHttpFacade.recipeUrl + `?page`) // Todo: replace with actual url
        .pipe(
          map((values: any) => values.map((v: any) => Recipe.create(v)))
        ).toPromise();
    } catch (e) {
      throw new RecipeHttpError();
    }
  }

  async getRecipeById(id: string): Promise<Recipe> {
    try {
      return await this.http.get(RecipeHttpFacade.recipeUrl + `?recipeId`) // Todo: replace with actual url
        .pipe(
          map((values: any)  => Recipe.create(values))
        ).toPromise();
    } catch (e) {
      throw new RecipeHttpError();
    }
  }
}
