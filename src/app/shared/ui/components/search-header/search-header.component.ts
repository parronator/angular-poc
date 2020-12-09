import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SidebarService} from '../../layouts/sidebar-layout/sidebar.service';

@Component({
  selector: 'ui-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent {
  @Input() sidebar = true;

  constructor(public sidebarService: SidebarService) {
  }
}
