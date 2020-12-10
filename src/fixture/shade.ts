import {Shade} from '../app/core/shade/domain/shade';
import {ShadeColor, ShadeName} from '../app/core/shade/domain/shadeValueObject';
import {UniqueId} from "../app/core/shared/uniqueId";

export const shadeFixture = new Shade(UniqueId.create('1'), ShadeColor.create('blue'), ShadeName.create('blue shade'));
export const shadeJSONFixture = [{
  id: '1',
  name: 'blue shade',
  color: 'blue'
}];
export const shadeListFixture = [
  new Shade(UniqueId.create('1'), ShadeColor.create('blue'), ShadeName.create('blue shade')),
  new Shade(UniqueId.create('2'), ShadeColor.create('red'), ShadeName.create('red shade')),
  new Shade(UniqueId.create('3'), ShadeColor.create('green'), ShadeName.create('green shade'))
];
