import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  isCollapsed = false;
  @Output()
  toggleCollapse = new EventEmitter();

  toggleSidebar(): void{
    this.toggleCollapse.emit();
  }

}
