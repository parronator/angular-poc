import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../../application/product/productService";
import {Product} from "../../../../core/product/domain/product";
import {Recipe} from "../../../../core/recipe/domain/recipe";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  @Input()
  collection: any;

  products: Product[];


  constructor(private productService: ProductService) { this.products = []; }

  ngOnInit(): void {
    this.loadInitialProducts();
  }

  loadInitialProducts(): void{
    const promise = this.productService.getList();
    promise.then((products) => { this.products = products; });
  }

  findRecipe(shadeId: string): Recipe{
    throw new Error("Not yet implemented")
  }

}
