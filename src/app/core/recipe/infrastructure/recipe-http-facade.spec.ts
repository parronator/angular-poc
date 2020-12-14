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
import {ShadeHttpError} from '../../shade/infrastructure/shadeHttpFacade';

const MockHttpClient = mock<HttpClient>();

describe('RecipeHttpFacade', () => {
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
      const result = await facade.getAlLRecipes();
      verify(MockHttpClient.get('/recipes')).called();
      expect(result).toEqual(recipeFixtureList);
    });

    it('should throw an error when http call is failing', async () => {
      when(MockHttpClient.get(anyString())).thenReject(new HttpErrorResponse({status: 500}));
      const call = facade.getAlLRecipes();
      verify(MockHttpClient.get('/getListOfShades')).called();
      await expectAsync(call).toBeRejectedWith(jasmine.any(ShadeHttpError));
    });
  });

  describe('get single shades', () => {
    it('should return a single shade when retriving a single shade', async () => {
      when(MockHttpClient.get(anyString())).thenReturn(of(singleJsonRecipeFixture));
      const result = await facade.getRecipeById('1');
      verify(MockHttpClient.get('/shades?id=1')).called();
      expect(result).toEqual(singleRecipeFixture);
    });
    it('should throw an error when http call is failing', async () => {
      when(MockHttpClient.get(anyString())).thenReject(new HttpErrorResponse({status: 500}));
      const call = facade.getRecipeById('1');
      verify(MockHttpClient.get('/getListOfShades')).called();
      await expectAsync(call).toBeRejectedWith(jasmine.any(RecipeHttpError));
    });
  });

  it('should create an instance', () => {
    expect(new RecipeHttpFacade()).toBeTruthy();
  });
});
