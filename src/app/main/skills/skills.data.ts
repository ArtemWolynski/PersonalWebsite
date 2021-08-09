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
    description: 'The idea is what matters, all the programming in the world is useless without the right idea. \n \n' +
      'So you can think of the idea, and I will take care of execution. I can help you to bring your idea to life from the very early stages. \n \n' +
      'When it grows, I can help you to build a development team to keep up with the competition and manage them to make sure ' +
      'you move as fast and efficiently as possible.',
    skills: generalSkills
  },
  {
    id: 1,
    icon: 'speedometer',
    name: 'Back End',
    description: 'I\'ve started my development journey as a back-end developer. Painful at first, but you are learning to love it through suffering. \n \n' +
    'Now I\'m capable to create high-performant, scalable, multi-node cloud services running on java. Or get things done with node, fast. \n \n' +
    'If you are creating something aimed to change the lives of millions of people, ping me, I will be more than happy to help.',
    skills: backEndSkills
  },
  {
    id: 2,
    icon: 'pc',
    name: 'Front End',
    description: 'Creating beautiful things is kind of my thing. \n \n ' +
      'Modern apps are getting bigger and more advanced. ' +
      'If you need help with streamlining the chaos of the modern front-end development, creating modern and fresh experiences for your users or just ' +
      'want to talk about the latest trends — there should be the \'contact me\' button somewhere, push it.',
    skills: frontEndSkills
  }
]

