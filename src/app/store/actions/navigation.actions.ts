import { createAction, props } from '@ngrx/store';

export const navigateToElement = createAction(
  '[Navigation] Navigate To Element',
  props< { screenName: string } >()
);

export const scrollToElement = createAction(
  '[Navigation] Scroll To Element',
  props< { screenName: string } >()
)
