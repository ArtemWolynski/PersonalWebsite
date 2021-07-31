import { createAction, props } from '@ngrx/store';

export const setMode = createAction(
  '[Layout] Set Mode',
  props < { appMode: string } >()
);

export const toggleMenu = createAction(
  '[Layout] Toggle Menu',
  props < { isMenuOpen: boolean } >()
)
