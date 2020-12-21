import {ShadeColor, ShadeName} from './shadeValueObject';
import {UniqueId} from '../../../shared/domain/uniqueId';

export class Shade {
  private constructor(public id: UniqueId, public color: ShadeColor, public name: ShadeName, public colorId: string) {
  }

  static create({id, name, colorId, color}: any): Shade {
    console.log({id, name, colorId, color});
    return new Shade(UniqueId.create(id), ShadeColor.create(color), ShadeName.create(name), colorId);
  }
}
