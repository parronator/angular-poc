import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {anyString, instance, mock, verify, when} from 'ts-mockito';
import {ShadeFacade} from '../domain/shadeFacade';
import {shadeFixture, shadeJSONFixture} from '../../../../fixture/shade';
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

  describe('getList', () => {
    it('should return Shade list when http call success on proper url', async () => {
      when(MockHttpClient.get(anyString())).thenReturn(of(shadeJSONFixture))
      const result = await facade.getAll();
      verify(MockHttpClient.get('/getListOfShades')).called();
      expect(result).toEqual([shadeFixture]);
    });

    it('should throw an error when http call is failing', async () => {
      when(MockHttpClient.get(anyString())).thenReject(new HttpErrorResponse({status: 500}))
      verify(MockHttpClient.get('/getListOfShades')).called();
      await expectAsync(facade.getAll()).toBeRejectedWith(jasmine.any(ShadeHttpError));
    });
  });
});
