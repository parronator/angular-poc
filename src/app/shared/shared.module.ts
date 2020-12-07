import {NgModule} from '@angular/core';
import {I18n, I18nService} from './i18n/i18n';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UiModule} from './ui/ui.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule,
    UiModule
  ],
  providers: [
    {provide: I18n, useClass: I18nService},
    ...I18nService.getGlobalConfiguration()
  ],
  exports: [UiModule, TranslateModule, FormsModule]
})
export class SharedModule {
}
