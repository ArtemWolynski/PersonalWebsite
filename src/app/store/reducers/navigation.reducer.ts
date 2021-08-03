import {createReducer, on} from '@ngrx/store';
import {AppScreen} from '../../core/enums/app-screen';
import {navSlideToElement, navScrollToElement} from '../actions/navigation.actions';
import {NavigationState} from '../../core/models/navigation-state';

export const initialState: NavigationState = {
  currentScreen: AppScreen.ABOUT
}

export const navigationReducer = createReducer(
  initialState,
  on(navSlideToElement, (state, { currentScreen }) => ( {...state, currentScreen: currentScreen })),
  on(navScrollToElement, (state, { currentScreen }) => ( {...state, currentScreen: currentScreen })),
)
