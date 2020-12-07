import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TranslationsComponent} from './translations/translations.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'monitor', loadChildren: () => import('./pages/monitor/monitor.module').then(m => m.MonitorModule) },
  { path: 'basicform', loadChildren: () => import('./pages/basic-form/basic-form.module').then(m => m.BasicFormModule) },
  { path: 'translations', component: TranslationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
