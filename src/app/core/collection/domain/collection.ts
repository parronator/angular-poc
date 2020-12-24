import {UniqueId} from '../../../shared/domain/uniqueId';
import {CollectionName} from './collectionValueObject';
import {Shade, ShadeJson} from '../../shade/domain/shade';

export interface CollectionJson{
  id: string;
  name: string;
  shades: ShadeJson[];
}

export class Collection {
  constructor( private id: UniqueId, private name: CollectionName, private shades: Shade[]){

  }

  get Id(): UniqueId{
    return UniqueId.create(this.id.value);
  }

  get Name(): CollectionName{
  return this.Name;
  }

  get Shades(): Shade[]{
    return this.shades;
  }

  static create({id, name, shades}: any): Collection {
    return new Collection(UniqueId.create(id), CollectionName.create(name), shades.map((shade: any) => Shade.create(shade)));
  }

  toJson(): CollectionJson{
    return {
      id: this.id.value,
      name: this.name.value,
      shades: this.shades.map(shade => shade.toJson())
    };
  }
}
