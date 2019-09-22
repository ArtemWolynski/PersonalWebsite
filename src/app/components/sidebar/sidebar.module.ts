import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {ButtonsModule} from '../buttons/buttons.module';
import {LogoModule} from '../logo/logo.module';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    LogoModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
