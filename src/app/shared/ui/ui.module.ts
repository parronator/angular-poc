import {NgModule} from '@angular/core';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SidebarLayoutComponent} from './layouts/sidebar-layout/sidebar-layout.component';
import {RouterModule} from '@angular/router';
import {UIRoutingModule} from './ui-routing.module';
import {HeaderExamplesComponent} from './examples/header-examples/header-examples.component';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {iconList} from './icons/icons';

@NgModule({
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSelectModule,
    RouterModule,
    NzDividerModule,
    UIRoutingModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSelectModule,
    NzDividerModule,
    HeaderComponent,
    SidebarComponent,
    SidebarLayoutComponent,
    RouterModule
  ],
  providers: [
    {provide: NZ_ICONS, useValue: iconList}
  ],
  declarations: [HeaderComponent, SidebarComponent, SidebarLayoutComponent, HeaderExamplesComponent]
})
export class UiModule {
}
