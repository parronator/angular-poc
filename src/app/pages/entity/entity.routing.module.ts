import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollectionExampleComponent} from './collection-example/collection-example.component';


const routes: Routes = [
  {path: 'collectionExample', component: CollectionExampleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoutingModule { }
