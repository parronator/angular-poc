import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import {RecipeFacade} from '../../core/recipe/domain/recipe-facade';
import {anyString, instance, mock, reset, verify, when} from 'ts-mockito';
import {recipeFixtureList, singleJsonRecipeFixture, singleRecipeFixture} from '../../../fixture/recipe';
import {TestScheduler} from 'rxjs/testing';

const MockRecipeFacade = mock<RecipeFacade>();

describe('RecipeService', () => {
  let service: RecipeService;
  let mockRecipeFacade: RecipeFacade;
  let scheduler: TestScheduler;

  beforeEach(() => {
    mockRecipeFacade = instance(MockRecipeFacade);
    service = new RecipeService(mockRecipeFacade);
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  afterEach(() => { reset(MockRecipeFacade); });


  it('should retrieve a list of all recipes', async () => {
    const data = recipeFixtureList;
    when(MockRecipeFacade.getAllRecipes()).thenResolve(data);

    let currentState = 0;
    const expectedState: any = {
      0: {...service.InitialEntityState},
      1: {...service.InitialEntityState, loading: true},
      2: {...service.InitialEntityState, loading: true, entities: data},
      3: {...service.InitialEntityState, loading: false, entities: data}
    };

    const subscription = service.state$.subscribe((e) => {
      expect(e).toEqual(expectedState[currentState]);
      currentState++;
    });

    await service.getAllRecipes();
    subscription.unsubscribe();
    verify(MockRecipeFacade.getAllRecipes()).called();
  });

  it('should retrieve a single recipe when searching by id.', async () => {
    const data = singleRecipeFixture;
    when(MockRecipeFacade.getRecipeById(anyString())).thenResolve(data);

    let currentState = 0;
    const expectedState: any = {
      0: {...service.InitialEntityState},
      1: {...service.InitialEntityState, loading: true},
      2: {...service.InitialEntityState, loading: true, entities: [data]},
      3: {...service.InitialEntityState, loading: false, entities: [data]}
    };

    const subscription = service.state$.subscribe((e) => {
      expect(e).toEqual(expectedState[currentState]);
      currentState++;
    });

    await service.getRecipeById('any');
    subscription.unsubscribe();
    verify(MockRecipeFacade.getAllRecipes()).called();
  });
});
