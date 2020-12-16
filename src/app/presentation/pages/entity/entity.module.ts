import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CollectionComponent]
})
export class EntityModule { }
