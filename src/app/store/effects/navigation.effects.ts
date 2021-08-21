import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {navScrollToElement, navSlideToElement} from '../actions/navigation.actions';
import {ScreenTransitionService} from '../../services/screen-transition.service';

@Injectable()
export class NavigationEffects {

  constructor(
    private _router: Router,
    private actions$: Actions,
    private screenTransitionService: ScreenTransitionService
  ) {}

  changeUrl = createEffect(() => this.actions$.pipe(
    ofType(navSlideToElement),
    map(action => {
      this._router.navigate([action.currentScreen]).then();
      }
    )
  ), { dispatch: false});

  scrollToElement = createEffect( () => this.actions$.pipe(
    ofType(navScrollToElement),
    map(action => {
      this.screenTransitionService.scrollToElement(action.currentScreen);
    })
  ), { dispatch: false});
}
