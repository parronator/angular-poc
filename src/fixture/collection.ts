import {Collection} from '../app/core/collection/domain/collection';
import {shadeJSONFixture, shadeListFixturePage1} from './shade';

export const collectionFixture = Collection.create({id: '1', name: 'collection 1', shades: shadeListFixturePage1});
export const collectionJsonFixture = {
  id: '1',
  name: 'collection 1',
  shades: shadeJSONFixture
};
