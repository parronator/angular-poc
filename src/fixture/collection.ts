import {Collection} from '../app/core/collection/domain/collection';
import {
  shadeJsonFixtureList,
  shadeListFixturePage1,
  shadeListFixturePage2, shadeResponsePage1Fixture, shadeResponsePage2Fixture
} from './shade';


export const collectionSingleJsonFixture = {
  id: '1',
  name: 'collection 1',
  shades: shadeJsonFixtureList
};
export const collectionSingleFixture = Collection.create(collectionSingleJsonFixture);
export const collectionListFixture = [
  collectionSingleFixture,
  Collection.create({id: '2', name: 'collection 1', shades: shadeResponsePage2Fixture.values})
];

export const collectionListJsonFixture = [
  collectionSingleJsonFixture,
  {
    id: '2',
    name: 'collection 2',
    shades: shadeResponsePage2Fixture.values
  }
];
