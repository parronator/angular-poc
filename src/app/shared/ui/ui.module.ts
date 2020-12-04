import {NgModule} from '@angular/core';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {DashboardOutline, FormOutline, MenuFoldOutline, MenuUnfoldOutline} from '@ant-design/icons-angular/icons';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ],
  providers: [
    {provide: NZ_ICONS, useValue: icons}
  ]
})
export class UiModule {
}
