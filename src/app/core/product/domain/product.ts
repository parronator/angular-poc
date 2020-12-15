import {UniqueId} from "../../shared/uniqueId";
import {ProductName} from "./productValueObject";

export class Product{
  constructor(public id: UniqueId, public name: ProductName){

  }

  static create({id, name}: any): Product{
    return new Product(UniqueId.create(id), ProductName.create(name));
  }
}
