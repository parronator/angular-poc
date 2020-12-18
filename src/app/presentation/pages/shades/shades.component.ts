import {Component, OnInit} from '@angular/core';
import {ShadeService} from '../../../application/shade/shadeService';

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
}
