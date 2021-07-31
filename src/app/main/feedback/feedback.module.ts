import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedbackComponent} from './feedback.component';
import {ReviewComponent} from './review/review.component';
import {ControlsModule} from '../../components/controls/controls.module';



@NgModule({
  declarations: [
    FeedbackComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    ControlsModule
  ],
    exports: [
        ReviewComponent,
        FeedbackComponent
    ]
})
export class FeedbackModule { }
