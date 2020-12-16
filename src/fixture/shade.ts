import {Shade} from '../app/core/shade/domain/shade';
import {ShadeColor, ShadeName} from '../app/core/shade/domain/shadeValueObject';
import {UniqueId} from "../app/shared/domain/uniqueId";

export const shadeFixture = new Shade(UniqueId.create('1'), ShadeColor.create('blue'), ShadeName.create('blue shade'));
export const shadeJSONFixture = [{
  id: '1',
  name: 'blue shade',
  color: 'blue'
}];
export const shadeListFixturePage1 = [
  new Shade(UniqueId.create('1'), ShadeColor.create('blue'), ShadeName.create('blue shade')),
  new Shade(UniqueId.create('2'), ShadeColor.create('red'), ShadeName.create('red shade')),
  new Shade(UniqueId.create('3'), ShadeColor.create('green'), ShadeName.create('green shade'))
];
export const shadeListFixturePage2 = [
  new Shade(UniqueId.create('4'), ShadeColor.create('yellow'), ShadeName.create('yellow shade')),
  new Shade(UniqueId.create('5'), ShadeColor.create('pink'), ShadeName.create('pink shade')),
  new Shade(UniqueId.create('6'), ShadeColor.create('crimson'), ShadeName.create('crimson shade'))
];
export const shadeJSONFixturePage1 = [
  {
    id: '1',
    name: 'blue shade',
    color: 'blue'
  },
  {
    id: '2',
    name: 'red shade',
    color: 'red'
  },
  {
    id: '3',
    name: 'green shade',
    color: 'green'
  }
];
export const shadeJSONFixturePage2 = [
  {
    id: '4',
    name: 'yellow shade',
    color: 'yellow'
  },
  {
    id: '5',
    name: 'pink shade',
    color: 'pink'
  },
  {
    id: '6',
    name: 'crimson shade',
    color: 'crimson'
  }
];
