import {Component} from '@angular/core';
import {AppScreen} from '../../core/enums/app-screen';
import {Store} from '@ngrx/store';
import {navScrollToElement} from '../../store/actions/navigation.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  navList = Object.keys(AppScreen);
  isOpen = false;

  constructor(private _store: Store) { }


  scrollToElement(value: string) {
    this._store.dispatch(navScrollToElement ({ currentScreen: <AppScreen>value}));
    this.toggleMenu();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
