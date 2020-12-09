import {Shade} from '../app/core/shade/domain/shade';
import {ShadeColor, ShadeName, UniqueId} from '../app/core/shade/domain/valueObject';

export const shadeFixture = new Shade(UniqueId.create('1'), ShadeColor.create('blue'), ShadeName.create('blue shade'));
export const shadeJSONFixture = [{
  id: '1',
  name: 'blue shade',
  color: 'blue'
}]
