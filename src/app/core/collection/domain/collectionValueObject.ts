import {ValueObject} from '../../../shared/domain/valueObject';

export class CollectionName implements ValueObject{
  static minLength = 1;
  static maxLength = 50;

  private constructor(public value: string) {
  }

  static validate(value: string): boolean {
    if (value.length < CollectionName.minLength || value.length > CollectionName.maxLength) {
      return false;
    }
    return true;
  }

  static create(value: string): CollectionName {
    if (!CollectionName.validate(value)) {
      throw new Error(); // TODO: define proper error
    }
    return new CollectionName(value);
  }
}
