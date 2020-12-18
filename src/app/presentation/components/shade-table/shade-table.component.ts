import {Component, Input, OnInit} from '@angular/core';
import {Shade} from '../../../core/shade/domain/shade';
import {InitialShadeState, ShadeService, ShadeState} from '../../../application/shade/shade.service';

@Component({
  selector: 'shade-table',
  templateUrl: './shade-table.component.html',
  styleUrls: ['./shade-table.component.scss']
})
export class ShadeTableComponent implements OnInit {
  @Input() data: ShadeState = InitialShadeState;

  constructor(private shadeService: ShadeService) {
  }

  ngOnInit(): void {
  }

  changePage(page: number): any {
    this.shadeService.changePage(page);
  }

  getNumberOfPages(totalPages: number, entities: Shade[]): number {
    return totalPages * entities.length;
  }

  changeOrder(e: any, field: string): any {
    this.shadeService.changeOrder(field, e ?? '');
  }
}
