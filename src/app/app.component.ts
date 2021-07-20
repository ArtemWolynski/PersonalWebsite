import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {StepsService} from './services/steps.service';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {steps} from './configs/steps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  currentScreen;
  steps;
  classicMode: boolean;
  mobileMode: boolean;
  isTransitioning: boolean;

  private _unsubscribeAll: Subject<any>;
  constructor(private stepsService: StepsService) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this.subscribeToCurrentStep();
    this.subscribeToCurrentStep();
    this.onResize();
    this.steps = steps;
    this.stepsService.setCurrentStep(this.steps[0]);
  }

  @HostListener('window:resize')
  onResize() {
    this.classicMode = window.innerWidth < 1200;
    this.mobileMode = window.innerWidth < 680;
  }

  @HostListener("window:wheel", ['$event'])
  onWindowScroll(event) {
    if (!this.classicMode && !this.isTransitioning) {
      let screenIndex = this.steps.indexOf(this.currentScreen);
      if (event.deltaY > 0)            // scrolling down
      {
        if (screenIndex < this.steps.length - 1) {
          this.animateTransition();
          setTimeout(() => {
            this.stepsService.setCurrentStep(this.steps[screenIndex + 1]);
          }, 800);
        }
      }
      else if (event.deltaY < 0) {                             // scrolling up
        if (screenIndex > 0) {
          this.animateTransition();
          setTimeout(() => {
            this.stepsService.setCurrentStep(this.steps[screenIndex - 1]);
          }, 800);
        }
      }
    }
  }

  animateTransition() {
    this.isTransitioning = true;
    document.getElementById('test').classList.add('anim-trans');
    setTimeout(() => {
      document.getElementById('test').classList.remove('anim-trans');
      this.isTransitioning = false;
    }, 2000);
  }

  subscribeToCurrentStep() {
    this.stepsService.currentStep
      .pipe(
        filter(value => value != null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((step) => {
        if (this.classicMode) {
          this.scrollToScreen(step);
        } else {
          this.changeCurrentScreen(step);
        }
      });
  }

  scrollToScreen(screenId) {
    const el = document.getElementById(screenId);
    if (el) {
    el.scrollIntoView({behavior: 'smooth'});
    }
  }

  changeCurrentScreen(value) {
    this.currentScreen = value;
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
