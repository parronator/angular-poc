import { CollectionHttpFacade } from './collection-http-facade';
import {CollectionFacade} from '../domain/collectionFacade';
import {HttpClient} from '@angular/common/http';
import {anyString, instance, mock, verify, when} from 'ts-mockito';
import {collectionFixture, collectionJsonFixture} from "../../../../fixture/collection";
import {of} from "rxjs";

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
    when(MockHttpClient.get(anyString())).thenReturn(of(collectionJsonFixture));
    const result = await facade.getAllCollections();
    verify(mockHttpClient).get('allCollections').called();
    expect(result).toEqual([collectionFixture]);
  });
});
