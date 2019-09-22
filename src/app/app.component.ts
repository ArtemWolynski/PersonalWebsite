import {Component, OnDestroy, OnInit} from '@angular/core';
import {StepsService} from './services/steps.service';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  currentScreen;
  private _unsubscribeAll: Subject<any>;
  constructor(private stepsService: StepsService) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this.subscribeToCurrentStep();
  }

  subscribeToCurrentStep() {
    this.stepsService.currentStep
      .pipe(
        filter(value => value != null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((step) => {
        this.changeCurrentScreen(step);
      });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  changeCurrentScreen(value) {
   this.currentScreen = value;
  }
}
