import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {selectCurrentScreen} from '../state/layout.selectors';
import {AppScreen} from '../core/enums/app-screen';
import {setCurrentScreen} from '../store/actions/layout.actions';

@Injectable({
  providedIn: 'root'
})
export class ScreenTransitionService {
  steps = JSON.parse(JSON.stringify(Object.keys(AppScreen)));

  appScreen: AppScreen;

  isTransitioning: boolean;

  constructor(private _router: Router,
              private _store: Store) {
   this._store.select(selectCurrentScreen).subscribe((currentScreen: AppScreen) => {
     this.appScreen = currentScreen;
   })
  }

  onScroll(event) {
    if (!this.isTransitioning) {
      let screenIndex = this.steps.indexOf(this.appScreen);
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

  animateTransition() {
    this.isTransitioning = true;
    document.getElementById('test').classList.add('anim-trans');
    setTimeout(() => {
      document.getElementById('test').classList.remove('anim-trans');
      this.isTransitioning = false;
    }, 2000);
  }


  setCurrentStep(stepName: AppScreen) {
    this._store.dispatch(setCurrentScreen ( { currentScreen: stepName }))
  }

}
