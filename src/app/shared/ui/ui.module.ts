import {NgModule} from '@angular/core';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {DashboardOutline, FormOutline, MenuFoldOutline, MenuUnfoldOutline} from '@ant-design/icons-angular/icons';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';
import {NzSelectModule} from 'ng-zorro-antd/select';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {SidebarLayoutComponent} from './layouts/sidebar-layout/sidebar-layout.component';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSelectModule,
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSelectModule,
    HeaderComponent,
    SidebarComponent,
    SidebarLayoutComponent,
  ],
  providers: [
    {provide: NZ_ICONS, useValue: icons}
  ],
  declarations: [HeaderComponent, SidebarComponent, SidebarLayoutComponent]
})
export class UiModule {
}
