import {Shade} from './shade';
import {ShadeColor, ShadeName, UniqueId} from './valueObject';
import {shadeFixture} from '../../../../fixture/shade';

describe('Shade', () => {
  it('should be a valid entity', () => {

    expect(shadeFixture).toBeTruthy();
  });

  it('should throw an error when creating bad shade', () => {
    expect(() => new Shade(UniqueId.create(''), ShadeColor.create('asda'), ShadeName.create('asdaw'))).toThrow();
    expect(() => new Shade(UniqueId.create('1231'), ShadeColor.create('asdaw'), ShadeName.create(''))).toThrow();
    expect(() => new Shade(UniqueId.create('1231'), ShadeColor.create(''), ShadeName.create('asdaw'))).toThrow();
  });
});
