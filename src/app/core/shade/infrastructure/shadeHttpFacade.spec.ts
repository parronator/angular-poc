import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {anyString, instance, mock, reset, verify, when} from 'ts-mockito';
import {ShadeFacade} from '../domain/shadeFacade';
import {
  shadeFixture,
  shadeJSONFixture,
  shadeJSONFixturePage1, shadeJSONFixturePage2,
  shadeListFixturePage1,
  shadeListFixturePage2
} from '../../../../fixture/shade';
import {of} from 'rxjs';
import {ShadeHttpError, ShadeHttpFacade} from './shadeHttpFacade';

const MockHttpClient = mock<HttpClient>();

describe('ShadeHttpFacade', () => {
  let facade: ShadeFacade;
  let mockHttpClient: HttpClient;

  beforeEach(() => {
    mockHttpClient = instance(MockHttpClient);
    facade = new ShadeHttpFacade(mockHttpClient);
  });

  afterEach(() => {
    reset(MockHttpClient);
  });

  describe('getList', () => {
    it('should return Shade list when http call success on proper url', async () => {
      when(MockHttpClient.get(anyString())).thenReturn(of(shadeJSONFixture));
      const result = await facade.getAll();
      verify(MockHttpClient.get('/getListOfShades')).called();
      expect(result).toEqual([shadeFixture]);
    });

    it('should throw an error when http call is failing', async () => {
      when(MockHttpClient.get(anyString())).thenReject(new HttpErrorResponse({status: 500}));
      const call = facade.getAll();
      verify(MockHttpClient.get('/getListOfShades')).called();
      await expectAsync(call).toBeRejectedWith(jasmine.any(ShadeHttpError));
    });


  });

  describe('get page' , () => {
    it('should return Shade page when http call success on proper url', async () => {
      const collectionId = '1';
      let page = 1;
      when(MockHttpClient.get(anyString())).thenReturn(of(shadeJSONFixturePage1));
      const result1 = await facade.getShadesByCollectionId(collectionId, page);
      verify(MockHttpClient.get(`/shades?collectionid=${collectionId}&page=${page}`)).called();
      expect(result1).toEqual(shadeListFixturePage1);
      page = 2;
      when(MockHttpClient.get(anyString())).thenReturn(of(shadeJSONFixturePage2));
      const result2 = await facade.getShadesByCollectionId(collectionId, page);
      verify(MockHttpClient.get(`/shades?collectionid=${collectionId}&page=${page}`)).called();
      verify(MockHttpClient.get(anyString())).twice();
      expect(result2).toEqual(shadeListFixturePage2);
    });

    it('should throw an error when http call is failing while retrieving a page', async () => {
      when(MockHttpClient.get(anyString())).thenReject(new HttpErrorResponse({status: 500}));
      const collectionId = 'any';
      const page = 1;
      const call = facade.getShadesByCollectionId(collectionId, page);
      verify(MockHttpClient.get(`/shades?collectionid=${collectionId}&page=${page}`)).called();
      await expectAsync(call).toBeRejectedWith(jasmine.any(ShadeHttpError));
    });
  });

  describe('get single shades', () => {
    it('should return a single shade when retriving a single shade', async () => {
      when(MockHttpClient.get(anyString())).thenReturn(of(shadeJSONFixture[0]));
      const result = await facade.getShadeById('1');
      verify(MockHttpClient.get('/shades?id=1')).called();
      expect(result).toEqual(shadeFixture);
    });
  });
});
