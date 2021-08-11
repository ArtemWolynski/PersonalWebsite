import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ProjectsService} from '../../main/portfolio/projects.service';
import {Project} from '../../core/models/project';
import {projectsError, projectsLoad, projectsLoaded} from '../actions/projects.antions';

@Injectable()
export class ProjectsEffects {

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
  ) {}

  loadSkills = createEffect(() => this.actions$.pipe(
    ofType(projectsLoad),
    switchMap(() => this.projectsService.getProjects()),
    map((projects: Project[] ) => projectsLoaded( { projects })),
    catchError(error => of(projectsError(error)))
    )
  );
}
