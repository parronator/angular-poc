import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import {RecipeFacade} from '../../core/recipe/domain/recipe-facade';
import {instance, mock, reset, verify, when} from 'ts-mockito';
import {recipeFixtureList} from '../../../fixture/recipe';

const MockRecipeFacade = mock<RecipeFacade>();

describe('RecipeService', () => {
  let recipeService: RecipeService;
  let mockRecipeFacade: RecipeFacade;

  beforeEach(() => {
    mockRecipeFacade = instance(MockRecipeFacade);
    recipeService = new RecipeService(mockRecipeFacade);
  });

  afterEach(() => { reset(MockRecipeFacade); });


  xit('should retrieve a list of all recipes', async () => {
    const data = recipeFixtureList;
    when(MockRecipeFacade.getAllRecipes()).thenResolve(data);
    const response = await recipeService.getAllRecipes();
    expect(response).toEqual(data);
    verify(MockRecipeFacade.getAllRecipes()).called();
  });
});
