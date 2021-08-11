import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectItemComponent} from './projects/project-item/project-item.component';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
    declarations: [
        PortfolioComponent,
        ProjectsComponent,
        ProjectItemComponent
    ],
  imports: [
    CommonModule,
    FlexModule
  ],
  exports: [
    PortfolioComponent,
    ProjectsComponent
  ]
})
export class PortfolioModule { }
