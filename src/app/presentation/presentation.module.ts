import {NgModule} from '@angular/core';
import {TranslationsComponent} from './pages/translations/translations.component';
import {ShadesComponent} from './pages/shades/shades.component';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {PresentationRoutingModule} from './presentation-routing.module';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {BasicFormComponent} from './pages/basic-form/basic-form.component';
import {CollectionExampleComponent} from './pages/entity/collection-example/collection-example.component';
import {CollectionComponent} from './pages/entity/collection/collection.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    BasicFormComponent,
    TranslationsComponent,
    ShadesComponent,
    CollectionExampleComponent,
    CollectionComponent
  ],
  exports: [
    WelcomeComponent,
    BasicFormComponent,
    TranslationsComponent,
    ShadesComponent,
    CollectionExampleComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    PresentationRoutingModule,
  ],
})
export class PresentationModule {
}
