import { Collection } from './collection';
import {collectionSingleFixture} from '../../../../fixture/collection';

import {UniqueId} from '../../../shared/domain/uniqueId';
import {CollectionName} from './collectionValueObject';


describe('Collection', () => {
  it('should create an instance', () => {
    expect(collectionSingleFixture).toBeTruthy();
  });
  it('should throw an error when creating bad collection', () => {
    expect(() => new Collection(UniqueId.create(''), CollectionName.create('asda'), [])).toThrow();
    expect(() => new Collection(UniqueId.create('1231'), CollectionName.create(''), [])).toThrow();
    expect(() => new Collection(
      UniqueId.create('1231'),
      CollectionName.create('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'), // 51 characters
      [])).toThrow();
  });
});
