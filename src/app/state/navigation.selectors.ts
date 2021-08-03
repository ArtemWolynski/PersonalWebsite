import {AppState} from './app.state';
import {createSelector} from '@ngrx/store';
import {AppScreen} from '../core/enums/app-screen';

export const navSelectCurrentScreen = createSelector (
  (state: AppState) => state.navigation.currentScreen,
  (currentScreen: AppScreen) => currentScreen
)
