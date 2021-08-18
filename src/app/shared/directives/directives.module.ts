import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageLoadDirective} from './image-load.directive';



@NgModule({
  declarations: [
    ImageLoadDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageLoadDirective
  ]
})
export class DirectivesModule { }
