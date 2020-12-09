import {instance, mock, verify, when} from 'ts-mockito';
import {shadeFixture} from '../../fixture/shade';
import {ShadeFacade} from '../core/shade/domain/shadeFacade';
import {ShadeService} from './shadeService';

const MockShadeFacade = mock<ShadeFacade>();

describe('ShadeService', () => {
  let mockShadeFacade: ShadeFacade;
  let shadeService: ShadeService;

  beforeEach(() => {
    mockShadeFacade = instance(MockShadeFacade);
    shadeService = new ShadeService(mockShadeFacade);
  });

  it('should get list of shades', async () => {
    const data = [shadeFixture, shadeFixture];
    when(MockShadeFacade.getAll()).thenResolve(data);
    const response = await shadeService.getList();
    expect(response).toEqual(data);
    verify(MockShadeFacade.getAll()).called();
  });
});
