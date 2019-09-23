import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillTileComponent } from './skill-tile.component';



@NgModule({
  declarations: [SkillTileComponent],
  imports: [
    CommonModule
  ],
  exports: [SkillTileComponent]
})
export class SkillTileModule { }
