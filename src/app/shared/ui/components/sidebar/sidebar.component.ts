import {Component, Input, OnInit} from '@angular/core';
import {SidebarService} from '../../layouts/sidebar-layout/sidebar.service';

@Component({
  selector: 'ui-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(public sidebarService: SidebarService) {}
}
