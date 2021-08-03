import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ScreenTransitionService} from '../../services/screen-transition.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {AppScreen} from '../../core/enums/app-screen';
import {navSlideToElement} from '../../store/actions/navigation.actions';
import {navSelectCurrentScreen} from '../../state/navigation.selectors';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {

  @Output() clicked: EventEmitter<boolean> = new EventEmitter();
  activePathValue: string;
  progressBarValue: number;
  values = Object.keys(AppScreen);

  private _unsubscribeAll: Subject<any>;

  constructor(private stepsService: ScreenTransitionService,
              private _route: ActivatedRoute,
              private _store: Store) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.subscribeToCurrentStep();
  }

  onElementClicked(value: string) {
    this.setProgressBarValue(value);
    setTimeout(() => {
      this._store.dispatch(navSlideToElement( { currentScreen : <AppScreen>value}));
    }, 800);
    this.clicked.next(true);
  }

  subscribeToCurrentStep() {
    this._store.select(navSelectCurrentScreen)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((step: string) => {
        this.setProgressBarValue(step);
        this.activePathValue = step;
      });
  }

  setProgressBarValue(value) {
    const index = this.values.indexOf(value);
    if (index === 0) {
      this.progressBarValue = 15;
    } else if (index === 1) {
      this.progressBarValue = 31;
    } else if (index === 2) {
      this.progressBarValue = 47;
    } else if (index === 3) {
      this.progressBarValue = 64;
    }  else if (index === 4) {
      this.progressBarValue = 80;
    }
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
