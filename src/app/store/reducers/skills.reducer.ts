import {SkillsState} from '../../core/models/skills-state';
import {createReducer, on} from '@ngrx/store';
import {skillsLoad, skillsLoaded, skillsSetActiveSkillSet} from '../actions/skills.actions';

export const initialState: SkillsState = {
  activeSkillSet: null,
  skillSets: []
}

export const skillsReducer = createReducer(
  initialState,
  on(skillsLoad, (state) => ( { ...state })),
  on(skillsLoaded, (state, { skillSets }) => ( { ...state, skillSets } )),
  on(skillsSetActiveSkillSet, (state, { activeSkillSet }) => ( { ...state, activeSkillSet } )),
);
