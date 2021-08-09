import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {SkillsService} from '../../main/skills/skills.service';
import {skillError, skillsLoad, skillsLoaded} from '../actions/skills.actions';
import {of} from 'rxjs';
import {SkillSet} from '../../core/models/skill-set';

@Injectable()
export class SkillsEffects {

  constructor(
    private actions$: Actions,
    private skillsService: SkillsService,
  ) {}

  loadSkills = createEffect(() => this.actions$.pipe(
    ofType(skillsLoad),
    switchMap(() => this.skillsService.getSkillSets()),
    map((skillSets: SkillSet[] ) => skillsLoaded( { skillSets })),
    catchError(error => of(skillError(error)))
    )
  );
}
