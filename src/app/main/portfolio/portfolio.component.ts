import {Component, OnInit} from '@angular/core';
import {ProjectsService} from './projects.service';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {uiSelectAppMode} from '../../state/layout.selectors';
import {AppMode} from '../../core/enums/app-mode';
import {Store} from '@ngrx/store';
import {AppScreen} from '../../core/enums/app-screen';
import {projectsLoad} from '../../store/actions/projects.actions';
import {selectProjects} from '../../state/projects.selectors';
import {Project} from '../../core/models/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  appMode$: Observable<AppMode> = this._store.select(uiSelectAppMode);

  projects$ = this._store.select(selectProjects)
    .pipe(
      tap((projects: Project[]) => this.arrayLength = projects.length)
    );

  arrayLength: number;
  currentIndex = 0;

  constructor(private _portfolioService: ProjectsService,
              private _store: Store) {
  }

  ngOnInit() {
    this._store.dispatch(projectsLoad());
  }

  get AppMode() {
    return AppMode;
  }

  get AppScreen() {
    return AppScreen;
  }

  setActiveProject(projectIndex: number) {
    this.currentIndex = projectIndex;
  }

  slideNext() {
    if (this.currentIndex === this.arrayLength - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

}
