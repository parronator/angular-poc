﻿import {ProductFacade} from '../domain/productFacade';
import {anyString, instance, mock, reset, verify, when} from 'ts-mockito';
import {ProductHttpError, ProductHttpFacade} from './productHttpFacade';
import {ProductService} from "../../../application/product/productService";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {productFixture, productJSONFixture} from "../../../../fixture/product";
import {of} from "rxjs";
import {ShadeHttpError} from "../../shade/infrastructure/shadeHttpFacade";

const MockHttpClient = mock<HttpClient>();

describe('ProductHttpFacade', ()=>{
  let facade: ProductFacade;
  let mockHttpClient: HttpClient;

  beforeEach(()=>{
    mockHttpClient = instance(MockHttpClient);
    facade = new ProductHttpFacade(mockHttpClient);
  });

  afterEach(() => {
    reset(MockHttpClient);
  });

  describe('getList', ()=>{
    it('should return Product list when http call success on proper url', async ()=>{
      when(MockHttpClient.get(anyString())).thenReturn(of(productJSONFixture))
      const result = await facade.getAll();
      verify(MockHttpClient.get('/getListOfProducts')).called();
      expect(result).toEqual([productFixture]);
    });

    it('should throw an error when http call is failing', async ()=>{
      when(MockHttpClient.get(anyString())).thenReject(new HttpErrorResponse({status: 500}))
      const call = facade.getAll();
      verify(MockHttpClient.get('/getListOfProducts')).called();
      await expectAsync(facade.getAll()).toBeRejectedWith(jasmine.any(ProductHttpError));
    });
  });

  describe('create', ()=>{
    it('should create a new product and return it when http call success on proper url', async ()=>{
      const data = productFixture;
      const url = '/createProduct';
      when(MockHttpClient.post(url, JSON.stringify(data))).thenReturn(of(data))
      const result = await facade.create(data);
      verify(MockHttpClient.post(url,  JSON.stringify(data))).called();
      expect(result).toEqual(productFixture);
    });

    it('should throw an error when http call is failing', async ()=>{
      const data = productFixture;
      const url = '/createProduct';
      when(MockHttpClient.post(url, JSON.stringify(data))).thenReject(new HttpErrorResponse({status: 500}))
      const call = facade.create(data);
      verify(MockHttpClient.post(url, JSON.stringify(data))).called();
      await expectAsync(facade.create(data)).toBeRejectedWith(jasmine.any(ProductHttpError));
    });
  });
});
