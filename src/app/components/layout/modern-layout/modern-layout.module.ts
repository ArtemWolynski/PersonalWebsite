import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModernLayoutComponent } from './modern-layout.component';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [ModernLayoutComponent],
  imports: [CommonModule, RouterModule, ProgressBarModule, SidebarModule, FlexLayoutModule],
  exports: [ModernLayoutComponent],
})
export class ModernLayoutModule {}
