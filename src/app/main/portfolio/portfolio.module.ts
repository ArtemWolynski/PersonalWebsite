import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {ProjectsComponent} from './projects/projects.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PortfolioComponent,
    ProjectsComponent
  ]
})
export class PortfolioModule { }
