import {LayoutState} from '../core/models/layout-state';
import {Message} from '../core/models/message';
import {NavigationState} from '../core/models/navigation-state';
import {SkillsState} from '../core/models/skills-state';
import {RecommendationState} from '../core/models/recommendation-state';
import {ProjectsState} from '../core/models/projects-state';

export interface AppState {
  uiState: LayoutState,
  navigation: NavigationState
  recommendations: RecommendationState,
  projects: ProjectsState,
  skills: SkillsState,
  message: Readonly<Message>
}
