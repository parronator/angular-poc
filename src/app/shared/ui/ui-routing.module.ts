import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderExamplesComponent} from './examples/header-examples/header-examples.component';
import {LayoutExamplesComponent} from './examples/layout-examples/layout-examples.component';
import {ColorPickerExampleComponent} from './examples/color-picker-example/color-picker-example.component';

const routes: Routes = [
  {path: 'headers', component: HeaderExamplesComponent},
  {path: 'layouts', component: LayoutExamplesComponent},
  {path: 'color', component: ColorPickerExampleComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule { }
