import {UniqueId} from '../../shared/uniqueId';
import {CollectionName} from './collectionValueObject';
import {Shade} from '../../shade/domain/shade';

export class Collection {
  constructor( id: UniqueId, name: CollectionName, shades: Shade[]){

  }

  // TODO: Question: Why are the parameters 'any'?
  static create({id, name, shades}: any): Collection {
    return new Shade(UniqueId.create(id), CollectionName.create(name), shades);
  }
}
