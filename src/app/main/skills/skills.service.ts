import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {SkillSet} from '../../core/models/skill-set';
import {skillsData} from './skills.data';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor() {
  }

  getSkillSets(): Observable<SkillSet[]> {
    return of(skillsData);
  }


}
