import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModernLayoutComponent } from './modern-layout.component';
import {RouterModule} from '@angular/router';
import {ProgressBarModule} from '../../components/progress-bar/progress-bar.module';
import {SidebarModule} from '../../components/sidebar/sidebar.module';



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
