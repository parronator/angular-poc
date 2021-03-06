import {singleProductFixture} from '../../../fixture/product';
import {ProductService} from './product.service';
import {instance, mock, verify, when} from 'ts-mockito';
import {ProductFacade} from '../../core/product/domain/productFacade';

const MockProductFacade = mock<ProductFacade>();

describe('ProductService', () => {
  let mockProductFacade: ProductFacade;
  let service: ProductService;

  beforeEach(() => {
    mockProductFacade = instance(MockProductFacade);
    service = new ProductService(mockProductFacade);
  });

  it('should get list of products', async () => {
    const data = [singleProductFixture, singleProductFixture];
    when(MockProductFacade.getAll()).thenResolve(data);
    // TODO: Discuss how to extract this test so that it can be reused.
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

    await service.getAll();
    verify(MockProductFacade.getAll()).called();
  });

  it('should create a new product', async () => {
    const singleProduct = singleProductFixture;
    // when(MockProductFacade.create(singleProduct)).thenResolve(singleProduct);

    let currentState = 0;
    const expectedState: any = {
      0: {...service.InitialEntityState},
      1: {...service.InitialEntityState, loading: true},
      2: {...service.InitialEntityState, loading: true, entities: [singleProduct]},
      3: {...service.InitialEntityState, loading: false, entities: [singleProduct]}
    };

    const subscription = service.state$.subscribe((e) => {
      expect(e).toEqual(expectedState[currentState]);
      currentState++;
    });

    await service.create(singleProduct);
    subscription.unsubscribe();
    verify(MockProductFacade.create(singleProduct)).called();
  });

  it('should get a product by ID', async () => {
    const singleProduct = singleProductFixture;
    when(MockProductFacade.getById(singleProduct.id.value)).thenResolve(singleProduct);

    let currentState = 0;
    const expectedState: any = {
      0: {...service.InitialEntityState},
      1: {...service.InitialEntityState, loading: true},
      2: {...service.InitialEntityState, loading: true, entities: [singleProduct]},
      3: {...service.InitialEntityState, loading: false, entities: [singleProduct]}
    };

    const subscription = service.state$.subscribe((e) => {
      expect(e).toEqual(expectedState[currentState]);
      currentState++;
    });

    await service.getById(singleProductFixture.id);
    subscription.unsubscribe();
    verify(MockProductFacade.getById(singleProduct.id.value)).called();
  });
});
