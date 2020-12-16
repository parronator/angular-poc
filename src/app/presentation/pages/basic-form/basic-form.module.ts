import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicFormRoutingModule } from './basic-form-routing.module';
import { BasicFormComponent } from './basic-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [BasicFormComponent],
    imports: [
        BasicFormRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
  exports: [BasicFormComponent]
})
export class BasicFormModule { }
