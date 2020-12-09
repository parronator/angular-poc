import {NgModule} from '@angular/core';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {HeaderForSidebarComponent} from './components/header-for-sidebar/header-for-sidebar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SidebarLayoutComponent} from './layouts/sidebar-layout/sidebar-layout.component';
import {RouterModule} from '@angular/router';
import {UIRoutingModule} from './ui-routing.module';
import {HeaderExamplesComponent} from './examples/header-examples/header-examples.component';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {iconList} from './icons/icons';
import {HeaderOnlyLayoutComponent} from './layouts/header-only-layout/header-only-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {LayoutExamplesComponent} from './examples/layout-examples/layout-examples.component';
import {TranslateModule} from '@ngx-translate/core';
import {SearchHeaderComponent} from './components/search-header/search-header.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSelectModule,
    NzInputModule,
    RouterModule,
    NzGridModule,
    NzDividerModule,
    UIRoutingModule,
    TranslateModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSelectModule,
    NzDividerModule,
    NzInputModule,
    NzGridModule,
    HeaderComponent,
    HeaderForSidebarComponent,
    HeaderOnlyLayoutComponent,
    SidebarComponent,
    SidebarLayoutComponent,
    SearchHeaderComponent,
    RouterModule,
    LayoutExamplesComponent
  ],
  providers: [
    {provide: NZ_ICONS, useValue: iconList}
  ],
  declarations: [
    HeaderForSidebarComponent,
    SidebarComponent,
    SidebarLayoutComponent,
    HeaderExamplesComponent,
    HeaderOnlyLayoutComponent,
    HeaderComponent,
    LayoutExamplesComponent,
    SearchHeaderComponent
  ]
})
export class UiModule {
}
