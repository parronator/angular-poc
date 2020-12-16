import {UniqueId} from "../../../shared/domain/uniqueId";
import {ProductName} from "./productValueObject";
import {Recipe} from "../../recipe/domain/recipe";

export class Product{
  constructor(public id: UniqueId, public name: ProductName, recipes: Recipe[]){

  }

  static create({id, name, recipes}: any): Product{
    return new Product(UniqueId.create(id), ProductName.create(name), recipes);
  }
}
