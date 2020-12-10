import { TestCollectionFacade } from './test-collection-facade';
import {collectionFixture} from '../../../../fixture/collection';

describe('TestCollectionFacade', () => {
  let facade: TestCollectionFacade;

  beforeEach( () => {
    facade = new TestCollectionFacade();
  });

  it('should create an instance', () => {
    expect(new TestCollectionFacade()).toBeTruthy();
  });

  it('should return a list of collection when calling "getAllCollections', async () => {
    const result = await facade.getAllCollections();
    expect(result).toBe([collectionFixture]);
  });

  it('should return single collection when calling "getAllCollections', async () => {
    const result = await facade.getCollectionByID('any');
    expect(result).toBe(collectionFixture);
  });

});
