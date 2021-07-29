import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ScreenTransitionService} from './services/screen-transition.service';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  currentScreen: string;

  classicMode: boolean;
  mobileMode: boolean;


  private _unsubscribeAll: Subject<any>;
  constructor(private stepsService: ScreenTransitionService) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this.subscribeToCurrentStep();
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.classicMode = window.innerWidth < 1200;
    this.mobileMode = window.innerWidth < 680;
  }

  @HostListener("window:wheel", ['$event'])
  onWindowScroll(event) {
    if (!this.classicMode) {
      this.stepsService.onScroll(event);
    }
  }


  subscribeToCurrentStep() {
    this.stepsService.currentStep
      .pipe(
        filter(value => value != null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((step: string) => {
        if (this.classicMode) {
          this.scrollToScreen(step);
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
