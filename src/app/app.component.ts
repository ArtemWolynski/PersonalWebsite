import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ScreenTransitionService} from './services/screen-transition.service';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {setMode} from './store/actions/layout.actions';
import {selectAppMode} from './state/layout.selectors';
import {AppMode} from './core/enums/app-mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  currentScreen: string;

  appMode: AppMode;

  private _unsubscribeAll: Subject<any>;
  constructor(private stepsService: ScreenTransitionService,
              private store: Store) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this.subscribeToCurrentStep();
    this.onResize();
    this.store.select(selectAppMode).subscribe((appMode: AppMode) => {
      this.appMode = appMode;
    });
  }

  get AppMode() {
    return AppMode;
  }

  @HostListener('window:resize')
  onResize() {

    let appMode;

    if (window.innerWidth > 1200) {
      appMode = AppMode.SLIDES
    } else if (window.innerWidth > 680) {
      appMode = AppMode.CLASSIC;
    } else {
      appMode = AppMode.MOBILE;
    }
    this.store.dispatch( setMode( { appMode: appMode}))
  }

  @HostListener("window:wheel", ['$event'])
  onWindowScroll(event) {
    if (this.appMode === AppMode.SLIDES) {
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
        if (this.appMode !== AppMode.SLIDES) {
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
