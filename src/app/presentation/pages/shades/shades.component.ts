import {Component, OnInit} from '@angular/core';
import {ShadeService} from '../../../application/shade/shade.service';

@Component({
  selector: 'app-shades',
  templateUrl: './shades.component.html',
  styleUrls: ['./shades.component.scss'],
})
export class ShadesComponent implements OnInit {
  constructor(public shadeService: ShadeService) {
  }

  ngOnInit(): void {
    this.shadeService.getAllShades();
  }

  showSpinner(data: any): boolean {
    return data.loading && data.entities.length === 0;
  }

  showData(data: any): boolean {
    return data.entities.length > 0;
  }
}
