import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectItemComponent} from './projects/project-item/project-item.component';
import {FlexModule} from '@angular/flex-layout';
import {DirectivesModule} from '../../shared/directives/directives.module';



@NgModule({
    declarations: [
        PortfolioComponent,
        ProjectsComponent,
        ProjectItemComponent
    ],
  imports: [
    CommonModule,
    FlexModule,
    DirectivesModule,
  ],
  exports: [
    PortfolioComponent,
    ProjectsComponent
  ]
})
export class PortfolioModule { }
