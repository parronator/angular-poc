import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {BasicFormComponent} from './pages/basic-form/basic-form.component';
import {TranslationsComponent} from './pages/translations/translations.component';
import {ShadesComponent} from './pages/shades/shades.component';
import {CollectionExampleComponent} from './pages/entity/collection-example/collection-example.component';
import {ProductsComponent} from './pages/products/products.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'basicform', component: BasicFormComponent },
  { path: 'ui', loadChildren: () => import('../shared/ui/ui.module').then(m => m.UiModule) },
  { path: 'translations', component: TranslationsComponent },
  { path: 'shades', component: ShadesComponent },
  { path: 'products', component: ProductsComponent },
  {path: 'collectionExample', component: CollectionExampleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
