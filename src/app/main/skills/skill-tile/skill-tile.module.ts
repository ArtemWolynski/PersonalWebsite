import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillTileComponent } from './skill-tile.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [SkillTileComponent],
    imports: [
        CommonModule,
        MatIconModule
    ],
  exports: [SkillTileComponent]
})
export class SkillTileModule { }
