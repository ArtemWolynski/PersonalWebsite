import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillItemComponent } from './skill-item.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [SkillItemComponent],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [SkillItemComponent]
})
export class SkillItemModule { }
