import {Product} from '../app/core/product/domain/product';
import {UniqueId} from '../app/shared/domain/uniqueId';
import {ProductName} from '../app/core/product/domain/productValueObject';
import {recipeFixtureList, recipeJsonFixtureList} from './recipe';



export const productJSONFixture = [{
  id: '1',
  name: 'product 1',
  recipes: recipeJsonFixtureList
}];
export const singleProductFixture = Product.create(productJSONFixture[0]);
