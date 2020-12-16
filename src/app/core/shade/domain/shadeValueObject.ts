import {ValueObject} from '../../../shared/domain/valueObject';


export class ShadeColor implements ValueObject {
  private constructor(public value: string) {
  }

  static validate(value: string): boolean {
    return !!value.length;
  }

  static create(value: string): ShadeColor {
    if (!ShadeColor.validate(value)) {
      throw new Error();
    }
    return new ShadeColor(value);
  }
}

export class ShadeName implements ValueObject {
  static minLength = 1;
  static maxLength = 50;

  private constructor(public value: string) {
  }

  static validate(value: string): boolean {
    if (value.length < ShadeName.minLength || value.length > ShadeName.maxLength) {
      return false;
    }
    return true;
  }

  static create(value: string): ShadeName {
    if (!ShadeName.validate(value)) {
      throw new Error();
    }
    return new ShadeName(value);
  }
}
