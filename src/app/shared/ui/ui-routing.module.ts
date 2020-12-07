import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderExamplesComponent} from './examples/header-examples/header-examples.component';

const routes: Routes = [
  { path: 'headers', component: HeaderExamplesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule { }
