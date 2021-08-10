import {createReducer, on} from '@ngrx/store';
import {RecommendationState} from '../../core/models/recommendation-state';
import {loadedRecommendations, loadRecommendations} from '../actions/recommendations.actions';

export const initialState: RecommendationState = {
  recommendations: []
}

export const recommendationsReducer = createReducer(
  initialState,
  on(loadRecommendations, (state) => ( { ...state })),
  on(loadedRecommendations, (state, { recommendations }) => ( { ...state, recommendations } )),
);
