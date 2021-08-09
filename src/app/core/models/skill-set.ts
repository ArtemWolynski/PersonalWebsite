import {Skill} from './skill';

export interface SkillSet {
  id: number,
  icon: string,
  name: string,
  description: string,
  skills: Skill[]
}
