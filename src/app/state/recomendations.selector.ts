import {createSelector} from '@ngrx/store';
import {AppState} from './app.state';
import {Recommendation} from '../core/models/recommendation';

export const selectRecommendations = createSelector(
  (state: AppState) => state.recommendations.recommendations,
  (recommendations: Recommendation[]) => recommendations
)
