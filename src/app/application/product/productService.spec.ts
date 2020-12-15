import {productFixture, productJSONFixture} from "../../../fixture/product";
import {ProductService} from "./productService";
import {ProductFacade} from "../../core/product/domain/productFacade";
import {anyString, anything, instance, mock, verify, when} from "ts-mockito";
import {ProductHttpError} from "../../core/product/infrastructure/productHttpFacade";
import {of} from "rxjs";

const MockProductFacade = mock<ProductFacade>();

describe('ProductService', ()=>{
  let mockProductFacade: ProductFacade;
  let productService: ProductService;

  beforeEach(()=>{
    mockProductFacade = instance(MockProductFacade);
    productService = new ProductService(mockProductFacade);
  });

  it('should get list of products', async ()=>{
    const data = [productFixture, productFixture];
    when(MockProductFacade.getAll()).thenResolve(data);
    const response = await productService.getList();
    expect(response).toEqual(data);
    verify(MockProductFacade.getAll()).called();
  });

  it('should create a new product', async ()=>{
    const data = productFixture;
    when(MockProductFacade.create(data)).thenResolve(data);
    const response = await productService.create(data);
    expect(response).toEqual(data);
    verify(MockProductFacade.create(data)).called();
  });
});
