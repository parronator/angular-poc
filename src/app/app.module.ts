import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {I18n} from './shared/i18n/i18n';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslationsComponent} from './pages/translations/translations.component';
import {ShadeFacade} from './core/shade/domain/shadeFacade';
import {ShadeHttpFacade} from './core/shade/infrastructure/shadeHttpFacade';

@NgModule({
  declarations: [
    AppComponent,
    TranslationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    TranslateModule.forRoot(I18n.getDefaultConfiguration()),
    AppRoutingModule,
  ],
  providers: [
    {provide: ShadeFacade, useClass: ShadeHttpFacade}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
