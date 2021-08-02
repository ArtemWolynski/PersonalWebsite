import { createAction, props } from '@ngrx/store';
import {AppMode} from '../../core/enums/app-mode';
import {AppScreen} from '../../core/enums/app-screen';

export const setMode = createAction(
  '[Layout] Set Mode',
  props < { appMode: AppMode } >()
);

export const toggleMenu = createAction(
  '[Layout] Toggle Menu',
  props < { isMenuOpen: boolean } >()
)

export const setCurrentScreen = createAction(
  '[Layout] Set Current Screen',
  props < { currentScreen: AppScreen } > ()
)
