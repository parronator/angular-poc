import {productFixture} from "../../../fixture/product";
import {ProductService} from "./productService";
import {ProductFacade} from "./productFacade";
import {instance, mock, verify, when} from "ts-mockito";

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
});
