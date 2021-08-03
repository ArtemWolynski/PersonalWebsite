import {LayoutState} from '../core/models/layout-state';
import {Review} from '../core/models/review';
import {Project} from '../core/models/project';
import {Skill} from '../core/models/skill';
import {Message} from '../core/models/message';
import {NavigationState} from '../core/models/navigation-state';

export interface AppState {
  uiState: LayoutState,
  navigation: NavigationState
  data: {
    reviews: ReadonlyArray<Review>,
    projects: ReadonlyArray<Project>,
    skills: ReadonlyArray<Skill>,
    message: Readonly<Message>
  }
}
