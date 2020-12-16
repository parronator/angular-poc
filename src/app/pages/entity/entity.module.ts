import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';
import {SharedModule} from '../../shared/shared.module';
import {CollectionExampleComponent} from './collection-example/collection-example.component';
import {EntityRoutingModule} from './entity.routing.module';



@NgModule({
  declarations: [CollectionComponent, CollectionExampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    EntityRoutingModule
  ],
  exports: [CollectionComponent, CollectionExampleComponent]
})
export class EntityModule { }
