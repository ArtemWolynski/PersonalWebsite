import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectItemComponent } from './project-item/project-item.component';



@NgModule({
  declarations: [ProjectsComponent, ProjectItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
