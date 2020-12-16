import {Shade} from './shade';
import {ShadeColor, ShadeName} from './shadeValueObject';
import {shadeFixture} from '../../../../fixture/shade';
import {UniqueId} from '../../../shared/domain/uniqueId';

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
