import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {BasicFormComponent} from './pages/basic-form/basic-form.component';
import {TranslationsComponent} from './pages/translations/translations.component';
import {ShadesComponent} from './pages/shades/shades.component';
import {CollectionExampleComponent} from './pages/entity/collection-example/collection-example.component';
import {ProductsComponent} from './pages/products/products.component';
import {CreateComponentExampleComponent} from './pages/create-component-example/create-component-example.component';
import {CollectionComponent} from './pages/entity/collection/collection.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'basicform', component: BasicFormComponent },
  { path: 'ui', loadChildren: () => import('../shared/ui/ui.module').then(m => m.UiModule) },
  { path: 'translations', component: TranslationsComponent },
  { path: 'shades', component: ShadesComponent },
  { path: 'products', component: ProductsComponent },
  {path: 'collectionExample', redirectTo: 'collection/1', pathMatch: 'full'},
  {path: 'collection/:id', component: CollectionComponent},
  {path: 'createCollection', component: CreateComponentExampleComponent, pathMatch: 'full'}
  //TODO: Investigate why collection/new doesn't work, even with pathMatch full
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
