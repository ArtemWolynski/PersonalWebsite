import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private FILL_IN_TIME = 100;
  activeSkill: BehaviorSubject<string>;

  constructor() {
    this.activeSkill = new BehaviorSubject('General Skills');
  }

  getActiveSkill() {
    return this.activeSkill.getValue()
  }

  get time() {
    return this.FILL_IN_TIME;
  }

  setActiveSkill(value) {
    this.activeSkill.next(value);
  }


}
