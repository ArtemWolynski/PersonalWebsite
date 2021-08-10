import {createAction, props} from '@ngrx/store';
import {Recommendation} from '../../core/models/recommendation';

export const loadRecommendations = createAction(
  '[Recommendation] Load'
);

export const loadedRecommendations = createAction(
  '[Recommendation] Loaded',
  props < { recommendations: Recommendation[] } >()
);
