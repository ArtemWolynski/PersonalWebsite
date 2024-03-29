import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Project } from '../../../core/models/project';

@Component({
  selector: 'app-project-tile',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('slidesContainer') slidesEl: ElementRef;

  @Input() projects: Project[];

  @Input() set index(index: number) {
    // Set timeout is needed to let angular to run through the lifecycle hooks before executing this function
    setTimeout(() => {
      this.setNumberOfVisibleProjects();
      this.detectVisibleProjects(index);

      this.currentIndex = this.visibleProjects.indexOf(
        this.visibleProjects.find((p: Project) => p.id === this.projects[index].id),
      );
    });
  }

  @Output() selected = new EventEmitter<number>();

  visibleProjects: Project[];

  numberOfVisibleProjects: number;

  currentIndex: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.setNumberOfVisibleProjects();
  }

  detectVisibleProjects(index: number): void {
    if (index < 0) {
      return;
    }

    if (this.numberOfVisibleProjects === 3) {
      this.visibleProjects = this.projects;
      return;
    }

    const arrayCopy = JSON.parse(JSON.stringify(this.projects));
    const extraElements = index + this.numberOfVisibleProjects - arrayCopy.length;

    // If the projects array has enough elements to display from index to array end, we simply display it
    // Else we take n elements from the array end + number of items to display - already displayed items from the beginning
    if (extraElements > -1) {
      this.visibleProjects = Array.of(
        ...arrayCopy.splice(index),
        ...arrayCopy.splice(0, extraElements),
      );
    } else {
      this.visibleProjects = Array.of(...arrayCopy.splice(index, this.numberOfVisibleProjects));
    }
  }

  @HostListener('window:resize', ['$event'])
  setNumberOfVisibleProjects() {
    const innerWidth = this.slidesEl.nativeElement.clientWidth;

    let numberOfProjects;

    if (innerWidth > 700) {
      numberOfProjects = 3;
    } else if (innerWidth > 400) {
      numberOfProjects = 2;
    } else {
      numberOfProjects = 1;
    }

    this.numberOfVisibleProjects = numberOfProjects;
    this.detectVisibleProjects(this.currentIndex);
    this.cdr.detectChanges();
  }

  selectProject(project: Project) {
    const elementIndex = this.projects.indexOf(this.projects.find((p) => p.id === project.id));
    this.selected.next(elementIndex);
  }
}
