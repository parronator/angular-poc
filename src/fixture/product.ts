import {Product} from "../app/core/product/domain/product";
import {UniqueId} from "../app/shared/domain/uniqueId";
import {ProductName} from "../app/core/product/domain/productValueObject";
import {recipeFixtureList, recipeJsonFixtureList} from "./recipe";

export const productFixture = new Product(UniqueId.create('1'), ProductName.create('product 1'), recipeFixtureList);


export const productJSONFixture = [{
  id: '1',
  name: 'product 1',
  recipes: recipeJsonFixtureList
}];
