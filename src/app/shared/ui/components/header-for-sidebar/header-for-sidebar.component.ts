import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SidebarService} from '../../layouts/sidebar-layout/sidebar.service';

@Component({
  selector: 'ui-header-for-sidebar',
  templateUrl: './header-for-sidebar.component.html',
  styleUrls: ['./header-for-sidebar.component.scss']
})
export class HeaderForSidebarComponent {
  constructor(public sidebarService: SidebarService) {
  }
}
