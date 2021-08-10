import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {RecommendationsService} from '../../main/feedback/recommendations.service';
import {loadedRecommendations, loadRecommendations} from '../actions/recommendations.actions';
import {map, switchMap} from 'rxjs/operators';
import {Recommendation} from '../../core/models/recommendation';

@Injectable()
export class RecommendationsEffects {

  constructor(
    private actions$: Actions,
    private recommendationsService: RecommendationsService
  ) {}

  loadRecommendations = createEffect(() => this.actions$.pipe(
    ofType(loadRecommendations),
    switchMap(() => this.recommendationsService.getRecommendations()),
    map((recommendations: Recommendation[]) => loadedRecommendations( { recommendations } ))
  ))
}
