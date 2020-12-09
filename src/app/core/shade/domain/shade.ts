import {ShadeColor, ShadeName, UniqueId} from './valueObject';

export class Shade {
  constructor(id: UniqueId, public color: ShadeColor, public name: ShadeName) {
  }

  static create({id, color, name}: any): Shade {
    return new Shade(UniqueId.create(id), ShadeColor.create(color), ShadeName.create(name));
  }
}
