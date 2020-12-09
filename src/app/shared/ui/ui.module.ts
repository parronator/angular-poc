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
import { HeaderOnlyLayoutComponent } from './layouts/header-only-layout/header-only-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutExamplesComponent } from './examples/layout-examples/layout-examples.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSelectModule,
    RouterModule,
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
    HeaderComponent,
    HeaderForSidebarComponent,
    HeaderOnlyLayoutComponent,
    SidebarComponent,
    SidebarLayoutComponent,
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
    LayoutExamplesComponent
  ]
})
export class UiModule {
}
