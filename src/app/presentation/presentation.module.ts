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
import { ShadeTableComponent } from './components/shade-table/shade-table.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductsComponent } from './pages/products/products.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    BasicFormComponent,
    TranslationsComponent,
    ShadesComponent,
    CollectionExampleComponent,
    CollectionComponent,
    ShadeTableComponent,
    ProductTableComponent,
    ProductsComponent,
  ],
  exports: [
    WelcomeComponent,
    BasicFormComponent,
    TranslationsComponent,
    ShadesComponent,
    CollectionExampleComponent,
    ProductTableComponent,
    ProductsComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    PresentationRoutingModule,
  ],
})
export class PresentationModule {
}
