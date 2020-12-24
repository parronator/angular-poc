import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../../application/product/product.service';
import {Product} from '../../../../core/product/domain/product';
import {Recipe} from '../../../../core/recipe/domain/recipe';
import {ActivatedRoute} from "@angular/router";
import {CollectionService} from "../../../../application/collection/collection.service";
import {Collection} from "../../../../core/collection/domain/collection";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  subscriptions: Array<Subscription>;
  error = false;
  collection: Collection | undefined;

  products: Product[];

  constructor(private route: ActivatedRoute, private collectionService: CollectionService, public productService: ProductService) {
    this.products = [];
    this.subscriptions = new Array<Subscription>();

  }

  async ngOnInit(): Promise<void> {
    console.log('id');
    console.log(this.route.snapshot.paramMap.get('id'));
    const collectionId = this.route.snapshot.paramMap.get('id');
    if (collectionId){
      console.log("yeah")
      await this.collectionService.getById(collectionId);
    }
    this.subscriptions.push(this.collectionService.entities$.subscribe(entities => {
      if (entities[0]){
        this.collection = entities[0];
      }
    }));
    this.subscriptions.push(this.collectionService.error$.subscribe(error => this.error = error));
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
