import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {setCurrentScreen} from '../actions/layout.actions';
import {Router} from '@angular/router';

@Injectable()
export class LayoutEffects {

  constructor(
    private _router: Router,
    private actions$: Actions,
  ) {}

  changeUrl = createEffect(() => this.actions$.pipe(
    ofType(setCurrentScreen),
    map(action => {
      this._router.navigate([action.currentScreen.toLocaleLowerCase()]).then();
      }
    )
  ), { dispatch: false});
}
