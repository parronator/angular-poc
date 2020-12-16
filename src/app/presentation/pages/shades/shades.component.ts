import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShadeService} from '../../../application/shade/shadeService';
import {tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shades',
  templateUrl: './shades.component.html',
  styleUrls: ['./shades.component.scss'],
})
export class ShadesComponent implements OnInit, OnDestroy {
  logTest: Subscription;

  constructor(public shadeService: ShadeService) {
    this.logTest = this.shadeService.state$.pipe(tap(console.log)).subscribe();
  }

  ngOnInit(): void {
    this.shadeService.loadList();
  }

  ngOnDestroy(): void {
    this.logTest.unsubscribe();
  }

  showSpinner(data: any): boolean {
    return data.loading && data.entities.length === 0;
  }

  showData(data: any): boolean {
    return data.entities.length > 0;
  }


}
