import {UniqueId} from '../../shared/uniqueId';
import {CollectionName} from './collectionValueObject';
import {Shade} from '../../shade/domain/shade';

export class Collection {
  constructor( private id: UniqueId, private name: CollectionName, private shades: Shade[]){

  }

  get Id(): UniqueId{
    return UniqueId.create(this.id.value);
  }

  get Name(): CollectionName{
  return CollectionName.create(this.name.value);
  }

  get Shades(): Shade[]{
    return this.shades;
  }

  static create({id, name, shades}: any): Collection {
    return new Collection(UniqueId.create(id), CollectionName.create(name), shades);
  }
}
