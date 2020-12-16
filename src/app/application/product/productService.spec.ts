import {productFixture} from '../../../fixture/product';
import {ProductService} from './productService';
import {instance, mock, verify, when} from 'ts-mockito';
import {ProductFacade} from '../../core/product/domain/productFacade';

const MockProductFacade = mock<ProductFacade>();

describe('ProductService', () => {
  let mockProductFacade: ProductFacade;
  let productService: ProductService;

  beforeEach(() => {
    mockProductFacade = instance(MockProductFacade);
    productService = new ProductService(mockProductFacade);
  });

  it('should get list of products', async () => {
    const data = [productFixture, productFixture];
    when(MockProductFacade.getAll()).thenResolve(data);
    const response = await productService.getList();
    expect(response).toEqual(data);
    verify(MockProductFacade.getAll()).called();
  });

  it('should create a new product', async () => {
    const data = productFixture;
    when(MockProductFacade.create(data)).thenResolve(data);
    const response = await productService.create(data);
    expect(response).toEqual(data);
    verify(MockProductFacade.create(data)).called();
  });

  it('should get a product by ID', async () => {
    const data = productFixture;
    when(MockProductFacade.getById(data.id.value)).thenResolve(data);
    const response = await productService.getById(productFixture.id);
    expect(response).toEqual(data);
    verify(MockProductFacade.getById(data.id.value)).called();
  });
});
