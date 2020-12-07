import { NgModule } from '@angular/core';
import { MonitorComponent } from '../monitor/monitor.component';
import {MonitorRoutingModule} from "./monitor-routing.module";
import {SharedModule} from '../../shared/shared.module';



@NgModule({
    imports: [MonitorRoutingModule, SharedModule],
  declarations: [MonitorComponent],
  exports: [MonitorComponent]
})
export class MonitorModule { }
