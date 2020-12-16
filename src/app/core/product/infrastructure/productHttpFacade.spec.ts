import {ProductFacade} from '../../../application/product/productFacade';
import {anyString, instance, mock, reset, verify, when} from 'ts-mockito';
import {ProductHttpError, ProductHttpFacade} from './productHttpFacade';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {productFixture, productJSONFixture} from '../../../../fixture/product';
import {of} from 'rxjs';

const MockHttpClient = mock<HttpClient>();

xdescribe('ProductHttpFacade', () => {
  let facade: ProductFacade;
  let mockHttpClient: HttpClient;

  beforeEach(() => {
    mockHttpClient = instance(MockHttpClient);
    facade = new ProductHttpFacade(mockHttpClient);
  });

  afterEach(() => {
    reset(MockHttpClient);
  });

  describe('getList', () => {
    it('should return Product list when http call success on proper url', async () => {
      when(MockHttpClient.get(anyString())).thenReturn(of(productJSONFixture));
      const result = await facade.getAll();
      verify(MockHttpClient.get('/getListOfProducts')).called();
      expect(result).toEqual([productFixture]);
    });

    it('should throw an error when http call is failing', async () => {
      when(MockHttpClient.get(anyString())).thenReject(new HttpErrorResponse({status: 500}));
      const call = facade.getAll();
      verify(MockHttpClient.get('/getListOfProducts')).called();
      await expectAsync(facade.getAll()).toBeRejectedWith(jasmine.any(ProductHttpError));
    });
  });

  describe('create', () => {
    it('should create a new product and return it when http call success on proper url', async () => {
      const data = productFixture;
      const url = '/createProduct';
      when(MockHttpClient.post(url, JSON.stringify(data))).thenReturn(of(data));
      const result = await facade.create(data);
      verify(MockHttpClient.post(url, JSON.stringify(data))).called();
      expect(result).toEqual(productFixture);
    });

    it('should throw an error when http call is failing', async () => {
      const data = productFixture;
      const url = '/createProduct';
      when(MockHttpClient.post(url, JSON.stringify(data))).thenReject(new HttpErrorResponse({status: 500}));
      const call = facade.create(data);
      verify(MockHttpClient.post(url, JSON.stringify(data))).called();
      await expectAsync(facade.create(data)).toBeRejectedWith(jasmine.any(ProductHttpError));
    });
  });

  describe('getById', () => {
    it('should return the selected Product when http call success on proper url', async () => {
      const data = productFixture;
      const url = '/getProductById?id=' + data.id.value;
      when(MockHttpClient.get(url)).thenReturn(of(productJSONFixture[0]));
      const result = await facade.getById(data.id.value);
      verify(MockHttpClient.get(url)).called();
      expect(result).toEqual(productFixture);
    });

    it('should throw an error when http call is failing', async () => {
      const data = productFixture;
      const url = '/getProductById?id=' + data.id.value;
      when(MockHttpClient.get(url)).thenReject(new HttpErrorResponse({status: 500}));
      const result = facade.getById(data.id.value);
      verify(MockHttpClient.get(url)).called();
      await expectAsync(facade.getById(data.id.value)).toBeRejectedWith(jasmine.any(ProductHttpError));
    });
  });
});
