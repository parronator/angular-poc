import {Component, Input, OnInit} from '@angular/core';
import {SidebarService} from './sidebar.service';

@Component({
  selector: 'ui-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent {
  constructor(public sidebarService: SidebarService) {
  }
}
