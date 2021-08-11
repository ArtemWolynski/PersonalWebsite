import {createSelector} from '@ngrx/store';
import {AppState} from './app.state';
import {Project} from '../core/models/project';

export const selectProjects = createSelector(
  (state: AppState) => state.projects.projects,
  (projects: Project[]) => projects
)
