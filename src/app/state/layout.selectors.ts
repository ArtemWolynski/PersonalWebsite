import {createSelector} from '@ngrx/store';
import {AppState} from './app.state';
import {LayoutState} from '../core/models/layout-state';

export const selectUiState = createSelector(
  (state: AppState) => state.uiState,
  (uiState: LayoutState) => uiState
);

