import {LayoutState} from '../core/models/layout-state';
import {Review} from '../core/models/review';
import {Project} from '../core/models/project';
import {Message} from '../core/models/message';
import {NavigationState} from '../core/models/navigation-state';
import {SkillsState} from '../core/models/skills-state';

export interface AppState {
  uiState: LayoutState,
  navigation: NavigationState
  reviews: ReadonlyArray<Review>,
  projects: ReadonlyArray<Project>,
  skills: SkillsState,
  message: Readonly<Message>
}
