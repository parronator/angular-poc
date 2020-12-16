import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {I18n} from './shared/i18n/i18n';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {PresentationModule} from './presentation/presentation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    PresentationModule,
    SharedModule,
    TranslateModule.forRoot(I18n.getDefaultConfiguration()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
