import {Collection} from '../app/core/collection/domain/collection';
import {shadeListFixture} from './shade';

export const collectionFixture = Collection.create({id: '1', name: 'collection 1', shades: shadeListFixture});
