import {createAction, props} from '@ngrx/store';
import {Project} from '../../core/models/project';

export const projectsLoad = createAction(
  '[Projects] Load',
);

export const projectsLoaded = createAction(
  '[Projects] Loaded',
  props < { projects: Project[] } >()
);

export const projectsError = createAction(
  '[Projects] Error',
  props < { error: Error } >()
)
