import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TranslationsComponent} from './pages/translations/translations.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'basicform', loadChildren: () => import('./pages/basic-form/basic-form.module').then(m => m.BasicFormModule) },
  { path: 'ui', loadChildren: () => import('./shared/ui/ui.module').then(m => m.UiModule) },
  { path: 'translations', component: TranslationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
