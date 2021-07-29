import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ScreenTransitionService} from '../../services/screen-transition.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {steps} from '../../configs/steps';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();
  activePathValue;
  progressBarValue = 15;
  values: string[];

  private _unsubscribeAll: Subject<any>;

  constructor(private stepsService: ScreenTransitionService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.initProgressBar();
    this.activePathValue = this.values[0];
    this.subscribeToCurrentStep();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  onElementClicked(value: string) {
    this.activePathValue = value;
    this.setProgressBarValue(value);
    setTimeout(() => {
      this.stepsService.setCurrentStep(value);
    }, 800);
    this.clicked.next(true);
  }

  subscribeToCurrentStep() {
    this.stepsService.currentStep
      .pipe(
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((step) => {
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

  initProgressBar() {
    this.values = steps;
  }

}
