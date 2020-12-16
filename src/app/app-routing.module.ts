import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TranslationsComponent} from './presentation/pages/translations/translations.component';
import {ShadesComponent} from './presentation/pages/shades/shades.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./presentation/pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'basicform', loadChildren: () => import('./presentation/pages/basic-form/basic-form.module').then(m => m.BasicFormModule) },
  { path: 'ui', loadChildren: () => import('./shared/ui/ui.module').then(m => m.UiModule) },
  { path: 'translations', component: TranslationsComponent },
  { path: 'shades', component: ShadesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
