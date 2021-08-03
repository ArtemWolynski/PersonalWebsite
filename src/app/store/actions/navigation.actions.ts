import { createAction, props } from '@ngrx/store';
import {AppScreen} from '../../core/enums/app-screen';

export const navSlideToElement = createAction(
  '[Navigation] Navigate To Element',
  props< { currentScreen: AppScreen } >()
);

export const navScrollToElement = createAction(
  '[Navigation] Scroll To Element',
  props< { currentScreen: AppScreen } >()
)
