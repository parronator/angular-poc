import {Collection} from '../app/core/collection/domain/collection';
import {
  shadeJSONFixture,
  shadeJSONFixturePage1,
  shadeJSONFixturePage2,
  shadeListFixturePage1,
  shadeListFixturePage2
} from './shade';

export const collectionSingleFixture = Collection.create({id: '1', name: 'collection 1', shades: shadeListFixturePage1});
export const collectionSingleJsonFixture = {
  id: '1',
  name: 'collection 1',
  shades: shadeJSONFixturePage1
};

export const collectionListFixture = [
  collectionSingleFixture,
  Collection.create({id: '2', name: 'collection 1', shades: shadeListFixturePage2})
];

export const collectionListJsonFixture = [
  collectionSingleJsonFixture,
  {
    id: '2',
    name: 'collection 2',
    shades: shadeJSONFixturePage2
  }
];
