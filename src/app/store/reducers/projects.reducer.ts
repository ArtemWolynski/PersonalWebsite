import {ProjectsState} from '../../core/models/projects-state';
import {createReducer, on} from '@ngrx/store';
import {projectsLoad, projectsLoaded} from '../actions/projects.antions';

export const initialState: ProjectsState = {
  projects: []
}

export const projectsReducer = createReducer(
  initialState,
  on(projectsLoad, (state) => ( { ...state })),
  on(projectsLoaded, (state, {projects}) => ( { ...state, projects }))
)
