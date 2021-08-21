import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackNForwardControlComponent } from './back-nforward-control/back-n-forward-control.component';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [BackNForwardControlComponent],
    imports: [
        CommonModule,
        FlexModule
    ],
  exports: [BackNForwardControlComponent]
})
export class ControlsModule { }
