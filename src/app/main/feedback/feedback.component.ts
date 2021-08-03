import {Component, Input, OnInit} from '@angular/core';
import {feedbacks} from '../../shared/configs/feedbacks';
import {Observable} from 'rxjs';
import {uiSelectAppMode} from '../../state/layout.selectors';
import {AppMode} from '../../core/enums/app-mode';
import {Store} from '@ngrx/store';
import {AppScreen} from '../../core/enums/app-screen';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  appMode$: Observable<AppMode> = this._store.select(uiSelectAppMode);

  feedback: any[];
  currentIndex = 0;

  constructor(private _store: Store) { }

  ngOnInit() {
    this.feedback = feedbacks;
  }

  get AppMode() {
    return AppMode;
  }

  get AppScreen() {
    return AppScreen;
  }

  slideNext() {
    if (this.currentIndex === this.feedback.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  slidePrev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.feedback.length - 1;
    } else {
      this.currentIndex--;
    }
  }

}
