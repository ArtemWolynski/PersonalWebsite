import { createAction, props } from '@ngrx/store';
import {AppMode} from '../../core/enums/app-mode';

export const setMode = createAction(
  '[Layout] Set Mode',
  props < { appMode: AppMode } >()
);

export const toggleMenu = createAction(
  '[Layout] Toggle Menu',
  props < { isMenuOpen: boolean } >()
)
