import {Collection} from '../app/core/collection/domain/collection';
import {shadeJSONFixture, shadeListFixture} from './shade';

export const collectionFixture = Collection.create({id: '1', name: 'collection 1', shades: shadeListFixture});
export const collectionJsonFixture = {
  id: '1',
  name: 'collection 1',
  shades: shadeJSONFixture
};