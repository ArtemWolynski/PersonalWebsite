import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  currentStep: BehaviorSubject<string>;

  constructor(private _router: Router) {
    this.currentStep = new BehaviorSubject(null);
  }

  setCurrentStep(stepName: string) {
    this.currentStep.next(stepName);
    this._router.navigate([stepName.toLocaleLowerCase()]).then();
  }
}
