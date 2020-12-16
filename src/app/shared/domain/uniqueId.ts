import {ValueObject} from './valueObject';

export class UniqueId implements ValueObject {
  private constructor(public value: string) {
  }

  static validate(value: string): boolean {
    return !!value.length;
  }

  static create(value: string): UniqueId {
    if (!UniqueId.validate(value)) {
      throw new Error();
    }
    return new UniqueId(value);
  }
}
