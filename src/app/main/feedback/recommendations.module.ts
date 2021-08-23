import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations.component';
import { ReviewComponent } from './review/review.component';
import { ControlsModule } from '../../components/controls/controls.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
  declarations: [RecommendationsComponent, ReviewComponent],
  imports: [CommonModule, ControlsModule, DirectivesModule],
  exports: [ReviewComponent, RecommendationsComponent],
})
export class RecommendationsModule {}
