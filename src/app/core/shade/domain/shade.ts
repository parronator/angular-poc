import {ShadeColor, ShadeName} from './shadeValueObject';
import {UniqueId} from '../../../shared/domain/uniqueId';

export interface ShadeJson{
  id: string;
  color: string;
  name: string;
  colorId: string;
}

export class Shade {
  private constructor(public id: UniqueId, public color: ShadeColor, public name: ShadeName, public colorId: string) {
  }

  static create({id, name, colorId, color}: any): Shade {
    return new Shade(UniqueId.create(id), ShadeColor.create(color), ShadeName.create(name), colorId);
  }

  toJson(): ShadeJson{
    return {
      id: this.id.value,
      color: this.color.value,
      name: this.name.value,
      colorId: this.colorId
    };
  }
}
