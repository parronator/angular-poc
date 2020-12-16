import {Product} from "../app/core/product/domain/product";
import {UniqueId} from "../app/shared/domain/uniqueId";
import {ProductName} from "../app/core/product/domain/productValueObject";

export const productFixture = new Product(UniqueId.create('1'), ProductName.create('product 1'));


export const productJSONFixture = [{
  id: '1',
  name: 'product 1',
}];
