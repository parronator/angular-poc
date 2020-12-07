import {NgModule} from '@angular/core';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {DashboardOutline, FormOutline, MenuFoldOutline, MenuUnfoldOutline} from '@ant-design/icons-angular/icons';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';
import {NzSelectModule} from 'ng-zorro-antd/select';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSelectModule,
    RouterModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSelectModule,
    HeaderComponent,
    SidebarComponent,
    RouterModule
  ],
  providers: [
    {provide: NZ_ICONS, useValue: icons}
  ],
  declarations: [HeaderComponent, SidebarComponent]
})
export class UiModule {
}
