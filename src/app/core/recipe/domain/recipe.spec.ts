import {Recipe} from './recipe';
import {singleRecipeFixture} from '../../../../fixture/recipe';

describe('Recipe', () => {
  it('should create an instance', () => {
    expect(singleRecipeFixture).toBeTruthy();
  });
  it('should throw an error when ids are invalid', () => {
    expect(() => Recipe.create({
      id: '',
      sourceId: 'any',
      sourceName: 'any',
      colorId: 'any',
      opacity: 11.34,
      thickness: 11.234
    })).toThrow();
    expect(() => Recipe.create({
      id: 'any',
      sourceId: '',
      sourceName: 'any',
      colorId: 'any',
      opacity: 11.34,
      thickness: 11.234
    })).toThrow();
    expect(() => Recipe.create({
      id: 'any',
      sourceId: 'any',
      sourceName: 'any',
      colorId: '',
      opacity: 11.34,
      thickness: 11.234
    })).toThrow();
  });
  it('should be immutable', () => {
    const recipe = singleRecipeFixture;
    const fakeValue = 'new value';
    const originalRecipeId = recipe.Id.value;
    recipe.Id.value = fakeValue;
    expect(recipe.Id.value).toEqual(originalRecipeId);

    const originalSourceId = recipe.SourceId.value;
    recipe.SourceId.value = fakeValue;
    expect(recipe.SourceId.value).toEqual(originalSourceId);

    const originalColorId = recipe.ColorId.value;
    recipe.ColorId.value = fakeValue;
    expect(recipe.ColorId.value).toEqual(originalColorId);

  });


});
