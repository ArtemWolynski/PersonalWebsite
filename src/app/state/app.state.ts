import {LayoutState} from '../core/models/layout-state';
import {Review} from '../core/models/review';
import {Project} from '../core/models/project';
import {Skill} from '../core/models/skill';
import {Message} from '../core/models/message';

export interface AppState {
  uiState: LayoutState,
  data: {
    reviews: ReadonlyArray<Review>,
    projects: ReadonlyArray<Project>,
    skills: ReadonlyArray<Skill>,
    message: Readonly<Message>
  }
}
