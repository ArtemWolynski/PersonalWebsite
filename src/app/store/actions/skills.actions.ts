import {createAction, props} from '@ngrx/store';
import {SkillSet} from '../../core/models/skill-set';

export const skillsSetActiveSkillSet = createAction(
  '[Skills] Set Active Skills Set',
  props < { activeSkillSet: SkillSet } >()
);

export const skillsLoad = createAction(
  '[Skills] Load',
);

export const skillsLoaded = createAction(
  '[Skills] Loaded',
  props < { skillSets: SkillSet[] } >()
);

export const skillError = createAction(
  '[Skills] Error',
  props < { message: Error } >()
)

