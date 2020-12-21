import {Shade} from './shade';
import {ShadeColor, ShadeName} from './shadeValueObject';
import {singleShadeFixture} from '../../../../fixture/shade';
import {UniqueId} from '../../../shared/domain/uniqueId';

describe('Shade', () => {
  it('should be a valid entity', () => {

    expect(singleShadeFixture).toBeTruthy();
  });

  it('should throw an error when creating bad shade', () => {
    expect(() => Shade.create({id: '', name: 'asda', colorId: 'asdaw', color: 'color'})).toThrow();
    expect(() => Shade.create({id: 'abc', name: '', colorId: 'asdaw', color: 'color'})).toThrow();
    expect(() => Shade.create({id: 'abc', name: 'asda', colorId: 'asdaw', color: ''})).toThrow();
  });
});
