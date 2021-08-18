import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ScreenTransitionService} from './services/screen-transition.service';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {setMode} from './store/actions/layout.actions';
import {uiSelectAppMode} from './state/layout.selectors';
import {AppMode} from './core/enums/app-mode';
import {AppScreen} from './core/enums/app-screen';
import {Location} from '@angular/common';
import {navSlideToElement} from './store/actions/navigation.actions';
import {navSelectCurrentScreen} from './state/navigation.selectors';
import {IconRegistryService} from './services/icon-registry.service';

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
              public location: Location,
              private _iconRegistry: IconRegistryService,
              private store: Store) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this._iconRegistry.registerIcons();
    this.subscribeToCurrentStep();
    this.onResize();
    this.store.select(uiSelectAppMode).subscribe((appMode: AppMode) => {
      this.appMode = appMode;
    });

    this.store.dispatch(navSlideToElement( { currentScreen: <AppScreen> this.location.path().substr(1).toUpperCase()}))
  }

  get AppMode() {
    return AppMode;
  }

  @HostListener('window:resize')
  onResize() {

    let appMode;

    if (window.innerWidth > 1200) {
      appMode = AppMode.SLIDES
    } else if (window.innerWidth > 740) {
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
    this.store.select(navSelectCurrentScreen)
      .pipe(
        filter(value => value != null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((step: AppScreen) => {
        if (this.appMode !== AppMode.SLIDES) {
          this.scrollToScreen(step);
        }
      });
  }

  scrollToScreen(screenId: AppScreen) {
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
