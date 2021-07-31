import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {steps} from '../shared/configs/steps';

@Injectable({
  providedIn: 'root'
})
export class ScreenTransitionService {
  currentStep: BehaviorSubject<string>;

  steps: string[];

  currentScreen: string;

  isTransitioning: boolean;

  constructor(private _router: Router) {
    this.currentStep = new BehaviorSubject(null);
    this.steps = JSON.parse(JSON.stringify(steps));
    this.currentScreen = this.steps[0];
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

  animateTransition() {
    this.isTransitioning = true;
    document.getElementById('test').classList.add('anim-trans');
    setTimeout(() => {
      document.getElementById('test').classList.remove('anim-trans');
      this.isTransitioning = false;
    }, 2000);
  }


  setCurrentStep(stepName: string) {
    this.currentScreen = stepName;
    this.currentStep.next(stepName);
    this._router.navigate([stepName.toLocaleLowerCase()]).then();
  }
}
