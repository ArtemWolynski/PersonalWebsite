import {createSelector} from '@ngrx/store';
import {AppState} from './app.state';
import {LayoutState} from '../core/models/layout-state';
import {AppMode} from '../core/enums/app-mode';

export const uiSelectState = createSelector(
  (state: AppState) => state.uiState,
  (uiState: LayoutState) => uiState
);

export const uiSelectAppMode = createSelector(
  (state: AppState) => state.uiState.appMode,
  (appMode: AppMode) => appMode
)

