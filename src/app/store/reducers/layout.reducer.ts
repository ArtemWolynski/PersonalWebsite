import {createReducer, on} from '@ngrx/store';
import {LayoutState} from '../../core/models/layout-state';
import {AppMode} from '../../core/enums/app-mode';
import {AppScreen} from '../../core/enums/app-screen';
import {setCurrentScreen, setMode, toggleMenu} from '../actions/layout.actions';

export const initialState: LayoutState = {
  isMenuOpen: false,
  appMode: AppMode.SLIDES,
  currentScreen: AppScreen.ABOUT
};

export const layoutReducer = createReducer(
  initialState,
  on(setMode, (state, { appMode }) => ( { ...state, appMode } )),
  on(toggleMenu, (state, { isMenuOpen}) => ( {...state, isMenuOpen})),
  on(setCurrentScreen, (state, { currentScreen }) => ( {...state, currentScreen }))
);
