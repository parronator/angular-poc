import { Component } from '@angular/core';
import {I18n} from './shared/i18n/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public i18n: I18n) {
  }
  isCollapsed = false;

  toggleSidebar(): void{
    this.isCollapsed = !this.isCollapsed;
  }
}
