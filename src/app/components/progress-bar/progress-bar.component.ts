import {Component, OnDestroy, OnInit} from '@angular/core';
import {StepsService} from '../../services/steps.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  activePathValue;
  progressBarValue = 15;
  values: string[];

  private _unsubscribeAll: Subject<any>;

  constructor(private stepsService: StepsService) {
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
    this.stepsService.setCurrentStep(value);
  }

  subscribeToCurrentStep() {
    this.stepsService.currentStep
      .pipe(
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((step) => {
        this.setProgressBarValue(step);
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
    this.values = ['About', 'Skills', 'Projects', 'Reviews', 'Contacts'];
  }

}
