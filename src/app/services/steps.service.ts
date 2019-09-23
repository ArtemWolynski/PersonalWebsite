import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  currentStep: BehaviorSubject<string>;

  constructor() {
    this.currentStep = new BehaviorSubject('Projects');
  }


  setCurrentStep(stepName: string) {
    this.currentStep.next(stepName);
  }
}
