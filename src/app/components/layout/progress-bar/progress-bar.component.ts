import {Component, EventEmitter, Output} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppScreen} from '../../../core/enums/app-screen';
import {navSlideToElement} from '../../../store/actions/navigation.actions';
import {navSelectCurrentScreen} from '../../../state/navigation.selectors';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  currentScreen$ = this._store.select(navSelectCurrentScreen)
    .pipe(
      tap((currentScreen: AppScreen) => this.setCurrentScreen(currentScreen))
    );

  values = Object.values(AppScreen);

  index: number;

  /**
   * I know that manual value control is kind of lame in terms of extensibility, but I wanted to have a manual control
   * to find a coolest look possible. This whole project is about a cool look, you know.
   */
  indexToProgressbarValue: Map<number, number> = new Map([
    [0, 15],
    [1, 31],
    [2, 47],
    [3, 64],
    [4, 80],
  ]);

  constructor(private _store: Store) {}

  onElementClicked(value: string) {
    const screen = <AppScreen> value;

    this.setCurrentScreen(screen);
    this.clicked.next(true);

    setTimeout(() => {
      this._store.dispatch(navSlideToElement( { currentScreen : screen}));
    }, 800);

  }

  setCurrentScreen(currentScreen: AppScreen) {
    this.index = this.values.indexOf(currentScreen);
  }
}
