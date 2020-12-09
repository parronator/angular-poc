import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-header-for-sidebar',
  templateUrl: './header-for-sidebar.component.html',
  styleUrls: ['./header-for-sidebar.component.scss']
})
export class HeaderForSidebarComponent {

  @Input()
  isCollapsed = false;
  @Output()
  toggleCollapse = new EventEmitter();

  toggleSidebar(): void{
    this.toggleCollapse.emit();
  }

}
