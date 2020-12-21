import {ValueObject} from '../../../shared/domain/valueObject';

export class ProductName implements ValueObject{
  static minLength = 1;
  static maxLength = 20;

  constructor(public value: string) {
  }

  static validate(value: string): boolean{
    return !(value.length < ProductName.minLength || value.length > ProductName.maxLength);
  }

  static create(value: string): ProductName{
    if (!ProductName.validate(value)){
      throw new Error();
    }
    return new ProductName(value);
  }
}
