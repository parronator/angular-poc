import {RecipeHttpError, RecipeHttpFacade} from './recipe-http-facade';
import {anyString, instance, mock, reset, verify, when} from 'ts-mockito';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RecipeFacade} from '../domain/recipe-facade';
import {
  recipeFixtureList,
  recipeJsonFixtureList,
  singleJsonRecipeFixture,
  singleRecipeFixture
} from '../../../../fixture/recipe';
import {of} from 'rxjs';

const MockHttpClient = mock<HttpClient>();

xdescribe('RecipeHttpFacade', () => {
  let facade: RecipeFacade;
  let mockHttpClient: HttpClient;

  beforeEach(() => {
    mockHttpClient = instance(MockHttpClient);
    facade = new RecipeHttpFacade(mockHttpClient);
  });

  afterEach(() => {
    reset(MockHttpClient);
  });

  describe('get a list of recipes', () => {
    it('should return a list of recipes when retrieving all recipes.', async () => {
      when(MockHttpClient.get(anyString())).thenReturn(of(recipeJsonFixtureList));
      const result = await facade.getAllRecipes();
      verify(MockHttpClient.get(RecipeHttpFacade.recipeUrl)).called();
      expect(result).toEqual(recipeFixtureList);
    });

    it('should throw an error when http call is failing', async () => {
      when(MockHttpClient.get(anyString())).thenReject(new HttpErrorResponse({status: 500}));
      const call = facade.getAllRecipes();
      verify(MockHttpClient.get(RecipeHttpFacade.recipeUrl)).called();
      await expectAsync(call).toBeRejectedWith(jasmine.any(RecipeHttpError));
    });
  });

  describe('get single recipes', () => {
    it('should return a single recipe', async () => {
      when(MockHttpClient.get(anyString())).thenReturn(of(singleJsonRecipeFixture));
      const result = await facade.getRecipeById('1');
      verify(MockHttpClient.get(RecipeHttpFacade.recipeUrl + '?recipeId')).called();
      expect(result).toEqual(singleRecipeFixture);
    });

    it('should throw an error when http call is failing', async () => {
      when(MockHttpClient.get(anyString())).thenReject(new HttpErrorResponse({status: 500}));
      const call = facade.getRecipeById('1');
      verify(MockHttpClient.get(RecipeHttpFacade.recipeUrl + '?recipeId')).called();
      await expectAsync(call).toBeRejectedWith(jasmine.any(RecipeHttpError));
    });
  });

  it('should create an instance', () => {
    expect(singleRecipeFixture).toBeTruthy();
  });
});
