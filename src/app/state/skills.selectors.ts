import {createSelector} from '@ngrx/store';
import {AppState} from './app.state';
import {SkillSet} from '../core/models/skill-set';

export const skillSelectActiveSkillSet = createSelector (
  (state: AppState) => state.skills.activeSkillSet,
  (activeSkillSet: SkillSet) => activeSkillSet
)

export const skillSelectSkillSets = createSelector (
  (state: AppState) => state.skills.skillSets,
  (skillSets: SkillSet[]) => skillSets
)
