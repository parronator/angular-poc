import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicFormRoutingModule } from './basic-form-routing.module';
import { BasicFormComponent } from './basic-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    BasicFormRoutingModule,
    ReactiveFormsModule
  ],
  exports: [BasicFormComponent]
})
export class BasicFormModule { }
