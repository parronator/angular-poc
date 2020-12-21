import {singleProductFixture} from '../../../../fixture/product';
import {Product} from './product';
import {ProductName} from './productValueObject';
import {UniqueId} from '../../../shared/domain/uniqueId';


describe('Product', () => {
  it('should be a valid entity', () => {
    expect(singleProductFixture).toBeTruthy();
  });


  it('should throw an error when creating bad product', () => {
    expect(() => new Product(UniqueId.create(''), ProductName.create('product 1'), [])).toThrow();
    expect(() => new Product(UniqueId.create('1'), ProductName.create(''), [])).toThrow();
    expect(() => new Product(UniqueId.create('1'), ProductName.create('product-product-product'), [])).toThrow();

  });
});
