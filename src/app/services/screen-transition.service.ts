import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppScreen} from '../core/enums/app-screen';
import {navSelectCurrentScreen} from '../state/navigation.selectors';
import {navSlideToElement} from '../store/actions/navigation.actions';

@Injectable({
  providedIn: 'root'
})
export class ScreenTransitionService {
  steps = JSON.parse(JSON.stringify(Object.keys(AppScreen)));

  currentScreen: AppScreen;

  isTransitioning: boolean;

  constructor(private _router: Router,
              private _store: Store) {
    this._store.select(navSelectCurrentScreen).subscribe((currentScreen: AppScreen) => {
      this.currentScreen = currentScreen;
    })
  }

  onScroll(event) {
    if (!this.isTransitioning) {
      let screenIndex = this.steps.indexOf(this.currentScreen);
      if (event.deltaY > 0)            // scrolling down
      {
        if (screenIndex < this.steps.length - 1) {
          this.animateTransition();
          setTimeout(() => {
            this.setCurrentStep(this.steps[screenIndex + 1]);
          }, 800);
        }
      }
      else if (event.deltaY < 0) {                             // scrolling up
        if (screenIndex > 0) {
          this.animateTransition();
          setTimeout(() => {
            this.setCurrentStep(this.steps[screenIndex - 1]);
          }, 800);
        }
      }
    }
  }

  scrollToElement(screen: AppScreen) {
    const targetElement =   document.getElementById(AppScreen[screen]);

    const y = targetElement.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y - 120,
      behavior: 'smooth'
    });
  }

  animateTransition() {
    this.isTransitioning = true;
    document.getElementById('test').classList.add('anim-trans');
    setTimeout(() => {
      document.getElementById('test').classList.remove('anim-trans');
      this.isTransitioning = false;
    }, 2000);
  }


  setCurrentStep(stepName: AppScreen) {
    this._store.dispatch(navSlideToElement ( { currentScreen: stepName }))
  }

}
