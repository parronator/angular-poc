import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent {

  isCollapsed = false;

  toggleSidebar(): void{
    this.isCollapsed = !this.isCollapsed;
  }
}
