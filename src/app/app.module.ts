import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {I18n} from './shared/i18n/i18n';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslationsComponent} from './presentation/pages/translations/translations.component';
import {ShadeFacade} from './core/shade/domain/shadeFacade';
import {ProductFacade} from './application/product/productFacade';
import {ProductHttpFacade} from './core/product/infrastructure/productHttpFacade';
import {ShadeFakeFacade} from './core/shade/infrastructure/shadeFakeFacade';
import { ShadesComponent } from './presentation/pages/shades/shades.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationsComponent,
    ShadesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    TranslateModule.forRoot(I18n.getDefaultConfiguration()),
    AppRoutingModule,
  ],
  providers: [
    {provide: ShadeFacade, useClass: ShadeFakeFacade},
    {provide: ProductFacade, useClass: ProductHttpFacade}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
