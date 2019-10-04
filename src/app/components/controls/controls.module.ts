import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackNForwardControlComponent } from './back-nforward-control/back-n-forward-control.component';



@NgModule({
  declarations: [BackNForwardControlComponent],
  imports: [
    CommonModule
  ],
  exports: [BackNForwardControlComponent]
})
export class ControlsModule { }
