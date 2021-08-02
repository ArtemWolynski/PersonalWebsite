import {createSelector} from '@ngrx/store';
import {AppState} from './app.state';
import {LayoutState} from '../core/models/layout-state';
import {AppMode} from '../core/enums/app-mode';
import {AppScreen} from '../core/enums/app-screen';

export const selectUiState = createSelector(
  (state: AppState) => state.uiState,
  (uiState: LayoutState) => uiState
);

export const selectAppMode = createSelector(
  (state: AppState) => state.uiState.appMode,
  (appMode: AppMode) => appMode
)

export const selectCurrentScreen = createSelector(
  (state: AppState) => state.uiState.currentScreen,
  (currentScreen: AppScreen) => currentScreen
)

