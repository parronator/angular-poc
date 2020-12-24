import {CollectionHttpError, CollectionHttpFacade} from './collection-http-facade';
import {CollectionFacade} from '../domain/collectionFacade';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {anyString, anything, instance, mock, verify, when} from 'ts-mockito';
import {collectionSingleFixture, collectionSingleJsonFixture} from '../../../../fixture/collection';
import {of} from 'rxjs';
import {singleProductFixture} from "../../../../fixture/product";
import {ProductHttpError} from "../../product/infrastructure/productHttpFacade";

const MockHttpClient = mock<HttpClient>();

describe('CollectionHttpFacade', () => {
  let facade: CollectionFacade;
  let mockHttpClient: HttpClient;

  beforeEach(() => {
    mockHttpClient = instance(MockHttpClient);
    facade = new CollectionHttpFacade(mockHttpClient);
  });

  it('should create an instance', () => {
    expect(facade).toBeTruthy();
  });

  it('should return a list of collections when calling getAllCollections.', async () => {
    when(MockHttpClient.get(anyString())).thenReturn(of([collectionSingleJsonFixture]));
    const result = await facade.getAll();
    verify(MockHttpClient.get('/api/collection')).called();
    expect(result).toEqual([collectionSingleFixture]);
  });

  describe('create', async () => {
    it('should create a new product and return it when http call success on proper url', async () => {
      const data = collectionSingleFixture;
      const url = '/collections/create';

      when(MockHttpClient.post(anyString(), anything())).thenReturn(of(data));
      const result = await facade.create(data);
      verify(MockHttpClient.post(anyString(), anything())).called();
      expect(result).toEqual(data);
    });

    //TODO: fix this test, ask Albert why this fails.
    xit('should throw an error when http call is failing', async () => {
      const data = collectionSingleFixture;
      const url = '/collections/create';
      when(MockHttpClient.post(anyString(), anything())).thenThrow(new HttpErrorResponse({status: 500}));
      const call = await facade.create(data);
      verify(MockHttpClient.post(anyString(), anything())).called();
      await expectAsync(call).toBeRejectedWith(jasmine.any(CollectionHttpError));
    });
  });


});
