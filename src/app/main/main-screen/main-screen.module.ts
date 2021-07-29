import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainScreenComponent} from './main-screen.component';
import {NgParticlesModule} from 'ng-particles';



@NgModule({
  declarations: [
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    NgParticlesModule
  ],
  exports: [
    MainScreenComponent
  ]
})
export class MainScreenModule { }
