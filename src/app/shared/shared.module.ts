import {NgModule} from '@angular/core';
import {I18n, I18nAntDesign} from './i18n/i18n';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UiModule} from './ui/ui.module';

I18n.init();

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule
  ],
  providers: [
    {provide: I18n, useClass: I18nAntDesign},
    ...I18nAntDesign.getGlobalConfiguration()
  ],
  exports: [UiModule]
})
export class SharedModule {
}
