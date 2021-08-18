import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecommendationsComponent} from './recommendations.component';
import {ReviewComponent} from './review/review.component';
import {ControlsModule} from '../../components/controls/controls.module';


@NgModule({
  declarations: [
    RecommendationsComponent,
    ReviewComponent,
  ],
    imports: [
        CommonModule,
        ControlsModule,
    ],
  exports: [
    ReviewComponent,
    RecommendationsComponent,
  ]
})
export class RecommendationsModule { }
