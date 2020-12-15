import { TestShadeFacade } from './test-shade-facade';
import {shadeListFixturePage1} from '../../../../fixture/shade';

describe('TestShadeFacade', () => {
  let facade: TestShadeFacade;

  beforeEach(() => {
    facade = new TestShadeFacade();
  });

  it('should create an instance', () => {
    expect(new TestShadeFacade()).toBeTruthy();
  });

  it('should return a list of shades when calling "getAllShades', async () => {
    const result = await facade.getAll();
    expect(result).toEqual(shadeListFixturePage1);
  });
});
