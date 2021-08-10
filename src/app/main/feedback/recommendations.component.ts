import {Component, OnInit} from '@angular/core';
import {uiSelectAppMode} from '../../state/layout.selectors';
import {AppMode} from '../../core/enums/app-mode';
import {Store} from '@ngrx/store';
import {AppScreen} from '../../core/enums/app-screen';
import {selectRecommendations} from '../../state/recomendations.selector';
import {Recommendation} from '../../core/models/recommendation';
import {loadRecommendations} from '../../store/actions/recommendations.actions';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-feedback',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  appMode$ = this._store.select(uiSelectAppMode);

  recommendations$ = this._store.select(selectRecommendations)
    .pipe(
      tap((recommendations: Recommendation[]) => this.arrayLength = recommendations.length)
    );

  arrayLength: number;
  currentRecommendationIndex = 0;

  constructor(private _store: Store) { }

  ngOnInit() {
    this._store.dispatch(loadRecommendations());
  }

  get AppMode() {
    return AppMode;
  }

  get AppScreen() {
    return AppScreen;
  }

  slideNext() {
    if (this.currentRecommendationIndex === this.arrayLength - 1) {
      this.currentRecommendationIndex = 0;
    } else {
      this.currentRecommendationIndex++;
    }
  }

  slidePrev() {
    if (this.currentRecommendationIndex === 0) {
      this.currentRecommendationIndex = this.arrayLength - 1;
    } else {
      this.currentRecommendationIndex--;
    }
  }

}
