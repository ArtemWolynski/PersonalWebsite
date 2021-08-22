import {createSelector} from '@ngrx/store';
import {AppState} from './app.state';

export const gitMessageSentSuccess = createSelector(
  (state: AppState) => state.message.success,
  (success: boolean) => success
);

export const gitErrorsState = createSelector(
  (state: AppState) => state.message.errors,
  (errors: Error[]) => errors
)
