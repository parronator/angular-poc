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
    this.shadeService.getAll();
  }
}
