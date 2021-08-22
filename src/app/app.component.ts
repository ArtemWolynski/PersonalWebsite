import {Component, HostListener, OnInit} from '@angular/core';
import {ScreenTransitionService} from './services/screen-transition.service';
import {Store} from '@ngrx/store';
import {setMode} from './store/actions/layout.actions';
import {uiSelectAppMode} from './state/layout.selectors';
import {AppMode} from './core/enums/app-mode';
import {AppScreen} from './core/enums/app-screen';
import {Location} from '@angular/common';
import {navSlideToElement} from './store/actions/navigation.actions';
import {IconRegistryService} from './services/icon-registry.service';
import {mobileBreakpoint, tabletBreakpoint} from './shared/configs/breakpoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentScreen: AppScreen;

  appMode: AppMode;

  constructor( private stepsService: ScreenTransitionService,
               public location: Location,
               private iconRegistry: IconRegistryService,
               private store: Store) {}

  ngOnInit() {
    this.onResize();
    this.getAppMode();
    this.setInitialScreen();
    this.iconRegistry.registerIcons();
  }

  getAppMode(): void {
    this.store.select(uiSelectAppMode).subscribe((appMode: AppMode) => {
      this.appMode = appMode;
    });
  }

  get AppMode() {
    return AppMode;
  }

  setInitialScreen(): void {
    let initialScreen =  this.location.path().substr(1) as AppScreen;

    if (!initialScreen) {
      initialScreen = AppScreen.ABOUT;
    }

    this.store.dispatch(navSlideToElement( { currentScreen:  initialScreen}));
  }

  @HostListener('window:resize')
  onResize(): void {
    let appMode: AppMode;

    const innerWidth = window.innerWidth;

    if (innerWidth <= mobileBreakpoint) {
      appMode = AppMode.MOBILE;
    } else if (innerWidth <= tabletBreakpoint) {
      appMode = AppMode.CLASSIC;
    } else {
      appMode = AppMode.SLIDES;
    }

    this.store.dispatch( setMode( { appMode}));
  }

  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event) {
    if (this.appMode === AppMode.SLIDES) {
      this.stepsService.onScroll(event);
    }
  }

  changeCurrentScreen(value) {
    this.currentScreen = value;
  }
}
