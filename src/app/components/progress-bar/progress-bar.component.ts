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

  values = Object.values(AppScreen);
  activePathValue: string;
  index: number;


  indexToProgressbarValue: Map<number, number> = new Map([
    [0, 15],
    [1, 31],
    [2, 47],
    [3, 64],
    [4, 80],
  ]);

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
      .subscribe((step: AppScreen) => {
        this.setProgressBarValue(step);
        this.activePathValue = step;
      });
  }

  setProgressBarValue(value) {
    this.index = this.values.indexOf(value);
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
