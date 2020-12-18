import {Component, OnInit} from '@angular/core';
import {ShadeService} from '../../../application/shade/shadeService';
import {Shade} from '../../../core/shade/domain/shade';

@Component({
  selector: 'app-shades',
  templateUrl: './shades.component.html',
  styleUrls: ['./shades.component.scss'],
})
export class ShadesComponent implements OnInit {
  constructor(public shadeService: ShadeService) {
  }

  ngOnInit(): void {
    this.shadeService.loadList();
  }

  showSpinner(data: any): boolean {
    return data.loading && data.entities.length === 0;
  }

  showData(data: any): boolean {
    return !data.error;
  }


}
