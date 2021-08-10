import {LayoutState} from '../core/models/layout-state';
import {Project} from '../core/models/project';
import {Message} from '../core/models/message';
import {NavigationState} from '../core/models/navigation-state';
import {SkillsState} from '../core/models/skills-state';
import {RecommendationState} from '../core/models/recommendation-state';

export interface AppState {
  uiState: LayoutState,
  navigation: NavigationState
  recommendations: RecommendationState,
  projects: ReadonlyArray<Project>,
  skills: SkillsState,
  message: Readonly<Message>
}
