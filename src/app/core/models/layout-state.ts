import {AppMode} from '../enums/app-mode';
import {AppScreen} from '../enums/app-screen';

export interface LayoutState {
  isMenuOpen: boolean,
  appMode: AppMode,
  currentScreen: AppScreen
}
