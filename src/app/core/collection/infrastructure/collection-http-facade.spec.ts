import { CollectionHttpFacade } from './collection-http-facade';
import {CollectionFacade} from '../domain/collectionFacade';
import {HttpClient} from '@angular/common/http';
import {anyString, instance, mock, verify, when} from 'ts-mockito';
import {collectionSingleFixture, collectionSingleJsonFixture} from '../../../../fixture/collection';
import {of} from 'rxjs';

const MockHttpClient = mock<HttpClient>();

xdescribe('CollectionHttpFacade', () => {
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
    const result = await facade.getAllCollections();
    verify(MockHttpClient.get('/allCollections')).called();
    expect(result).toEqual([collectionSingleFixture]);
  });
});
