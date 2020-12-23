import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../../application/product/product.service';
import {Product} from '../../../../core/product/domain/product';
import {Recipe} from '../../../../core/recipe/domain/recipe';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  @Input()
  collection: any;

  products: Product[];

  constructor(public productService: ProductService) { this.products = []; }

  ngOnInit(): void {
    this.loadInitialProducts();
  }

  loadInitialProducts(): void{
    this.productService.getAll();
    console.log('products');
    console.log(this.productService.state$.value.entities);
  }

  findRecipe(colorId: string, prodId: number): Recipe | undefined{
    console.log("product at index " + prodId + " is: ");
    console.log(this.productService.state$.value.entities[prodId])
    const bla = this.productService.state$.value.entities[prodId]?.recipes.find(recipe => recipe.ColorId.value === colorId) ?? undefined;
    console.log(`colorid: ${colorId}, prodid: ${prodId}`);
    console.log(bla);
    return this.productService.state$.value.entities[prodId]?.recipes.find(recipe => recipe.ColorId.value === colorId) ?? undefined;
  }


  style(recipe: Recipe | undefined): string{
    if (!recipe){
      console.log(`Recipe is: ${recipe}`);
      return 'collection-table__recipe-unavailable';
    }
    else{
      if (recipe.Released.valueOf()){
        return recipe.Engineered ? 'collection-table__recipe-released__engineered' : 'collection-table__recipe-released';
      }
      return recipe.Engineered ? 'collection-table__recipe-not-released__engineered' : 'collection-table__recipe-not-released';
    }
  }


}
