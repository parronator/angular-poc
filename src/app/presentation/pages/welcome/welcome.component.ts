import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SidebarService} from '../../../shared/ui/layouts/sidebar-layout/sidebar.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  @Input() isCollapsed = false;

  constructor(public sidebarService: SidebarService) {
  }
}
