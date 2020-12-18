import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {anyString, instance, mock, reset, verify, when} from 'ts-mockito';
import {ShadeFacade} from '../domain/shadeFacade';
import {
  shadeFixture,
  shadeJSONFixture,
  shadeListFixturePage1,
  shadeListFixturePage2,
  shadeResponsePage1Fixture,
  shadeResponsePage2Fixture
} from '../../../../fixture/shade';
import {of} from 'rxjs';
import {ShadeHttpFacade} from './shadeHttpFacade';
import {ShadeGetAllHttpError, ShadeGetByCollectionIdAsPageHttpError} from '../domain/exceptions';

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
      when(MockHttpClient.get(anyString())).thenReturn(of([shadeJSONFixture[0]]));
      const result = await facade.getAll();
      verify(MockHttpClient.get('/api/shades')).called();
      expect(result).toEqual([shadeFixture]);
    });

    it('should throw an error when http call is failing', async () => {
      when(MockHttpClient.get(anyString())).thenThrow(new HttpErrorResponse({status: 500}));
      const call = facade.getAll();
      verify(MockHttpClient.get('/api/shades')).called();
      await expectAsync(call).toBeRejectedWith(jasmine.any(ShadeGetAllHttpError));
    });
  });

  describe('get page', () => {
    it('should return Shade page when http call success on proper url', async () => {
      let page = 1;
      when(MockHttpClient.get(anyString())).thenReturn(of(shadeResponsePage1Fixture));
      const result1 = await facade.getAllFiltered({page: 1, orderBy: '', orderDirection: ''});
      verify(MockHttpClient.get(`/api/shades?page=${page}`)).called();
      expect(result1).toEqual({
        pageSize: shadeResponsePage1Fixture.pageSize,
        totalPages: shadeResponsePage1Fixture.totalPages,
        shades: shadeListFixturePage1
      });
      page = 2;
      when(MockHttpClient.get(anyString())).thenReturn(of(shadeResponsePage2Fixture));
      const result2 = await facade.getAllFiltered({page: 2, orderBy: '', orderDirection: ''});
      verify(MockHttpClient.get(`/api/shades?page=${page}`)).called();
      verify(MockHttpClient.get(anyString())).twice();
      expect(result2).toEqual({
        pageSize: shadeResponsePage2Fixture.pageSize,
        totalPages: shadeResponsePage2Fixture.totalPages,
        shades: shadeListFixturePage2
      });
    });

    it('should throw an error when http call is failing while retrieving a page', async () => {
      when(MockHttpClient.get(anyString())).thenThrow(new HttpErrorResponse({status: 500}));
      const collectionId = 'any';
      const page = 1;
      const call = facade.getShadesByCollectionIdAsPage(collectionId, page);
      verify(MockHttpClient.get(`/shades?collectionid=${collectionId}&page=${page}`)).called();
      await expectAsync(call).toBeRejectedWith(jasmine.any(ShadeGetByCollectionIdAsPageHttpError));
    });
  });

  describe('get single shades', () => {
    it('should return a single shade when retriving a single shade', async () => {
      when(MockHttpClient.get(anyString())).thenReturn(of(shadeJSONFixture[0]));
      const result = await facade.getShadeById('1');
      verify(MockHttpClient.get('/api/shades/1')).called();
      expect(result).toEqual(shadeFixture);
    });
  });
});
