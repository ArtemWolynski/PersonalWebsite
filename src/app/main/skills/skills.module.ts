import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkillsComponent} from './skills.component';
import {SkillTileModule} from './skill-tile/skill-tile.module';
import {SkillItemComponent} from './skill-item/skill-item.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    SkillsComponent,
    SkillItemComponent
  ],
  imports: [
    CommonModule,
    SkillTileModule,
    MatProgressBarModule,
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }
