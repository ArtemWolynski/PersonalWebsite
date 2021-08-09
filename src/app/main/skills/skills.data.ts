import {SkillSet} from '../../core/models/skill-set';
import {Skill} from '../../core/models/skill';

const generalSkills: Skill[] = [
  {
    id: 0,
    name: 'Algorithms',
    proficiency: 60
  },
  {
    id: 1,
    name: 'Design Patterns',
    proficiency: 83
  },
  {
    id: 2,
    name: 'Linux',
    proficiency: 67
  },
  {
    id: 3,
    name: 'Hiring',
    proficiency: 85
  },
  {
    id: 4,
    name: 'Team Management',
    proficiency: 70
  },
]

const frontEndSkills: Skill[] = [
  {
    id: 0,
    name: 'Javascript',
    proficiency: 70
  },
  {
    id: 1,
    name: 'Typescript',
    proficiency: 75
  },
  {
    id: 2,
    name: 'Angular',
    proficiency: 90
  },
  {
    id: 3,
    name: 'React',
    proficiency: 50
  },
  {
    id: 4,
    name: 'State Managers',
    proficiency: 80
  },
];

const backEndSkills: Skill[] = [
  {
    id: 0,
    name: 'Java',
    proficiency: 82
  },
  {
    id: 1,
    name: 'Node.js',
    proficiency: 54
  },
  {
    id: 2,
    name: 'SQL Databases',
    proficiency: 75
  },
  {
    id: 3,
    name: 'Docker',
    proficiency: 63
  },
  {
    id: 4,
    name: 'Spring Frameworks',
    proficiency: 79
  },
  {
    id: 5,
    name: 'AWS',
    proficiency: 65
  },
]

export const skillsData: SkillSet[] = [
  {
    id: 0,
    icon: 'rocket',
    name: 'General Skills',
    description: 'I have general skillSets and I like em',
    skills: generalSkills
  },
  {
    id: 1,
    icon: 'speedometer',
    name: 'Back End',
    description: 'I have back end skillSets and I like em',
    skills: backEndSkills
  },
  {
    id: 2,
    icon: 'pc',
    name: 'Front End',
    description: 'I have front end skillSets and I like em',
    skills: frontEndSkills
  }
]

