import { NgModule } from '@angular/core';
import { MonitorComponent } from '../monitor/monitor.component';
import {MonitorRoutingModule} from "./monitor-routing.module";



@NgModule({
  imports: [MonitorRoutingModule],
  declarations: [MonitorComponent],
  exports: [MonitorComponent]
})
export class MonitorModule { }
