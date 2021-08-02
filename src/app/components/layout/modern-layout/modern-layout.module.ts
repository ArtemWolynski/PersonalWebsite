import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModernLayoutComponent } from './modern-layout.component';
import {RouterModule} from '@angular/router';
import {ProgressBarModule} from '../../progress-bar/progress-bar.module';
import {SidebarModule} from '../../sidebar/sidebar.module';



@NgModule({
  declarations: [
    ModernLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProgressBarModule,
    SidebarModule
  ],
  exports: [
    ModernLayoutComponent
  ]
})
export class ModernLayoutModule { }
