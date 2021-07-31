import { createReducer, on } from '@ngrx/store';
import {setMode, toggleMenu} from '../actions/layout.actions';
import {LayoutState} from '../../core/models/layout-state';

export const initialState: LayoutState = {
  isMenuOpen: false,
  appMode: 'slides'
};

export const layoutReducer = createReducer(
  initialState,
  on(setMode, (state, { appMode }) => {
    return {...
      state, appMode
    }
  }),
  on(toggleMenu, (state, { isMenuOpen}) => ( {...state, isMenuOpen}))
);
