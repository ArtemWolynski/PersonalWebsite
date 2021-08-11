import {Component, Input, OnInit, Output} from '@angular/core';
import {Project} from '../../../../core/models/project';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() project: Project;
  @Input() isActive: boolean;

  @Output() projectSelected = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  selectProject() {
    this.projectSelected.next(this.project);
  }

}
