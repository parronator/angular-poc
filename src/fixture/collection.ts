import {Collection} from '../app/core/collection/domain/collection';
import {
  shadeListFixturePage1,
  shadeListFixturePage2, shadeResponsePage1Fixture, shadeResponsePage2Fixture
} from './shade';

export const collectionSingleFixture = Collection.create({id: '1', name: 'collection 1', shades: shadeListFixturePage1});
export const collectionSingleJsonFixture = {
  id: '1',
  name: 'collection 1',
  shades: shadeResponsePage1Fixture.values
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
    shades: shadeResponsePage2Fixture.values
  }
];
