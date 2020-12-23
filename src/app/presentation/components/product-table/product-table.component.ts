import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../application/product/product.service';
import {Product} from '../../../core/product/domain/product';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  @Input() data = this.productService.InitialEntityState;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  changePage(page: number): any {
    this.productService.changePage(page);
  }

  getNumberOfPages(totalPages: number, entities: Product[]): number {
    return totalPages * entities.length;
  }

  changeOrder(e: any, field: string): any {
    this.productService.changeOrder(field, e ?? '');
  }

}
