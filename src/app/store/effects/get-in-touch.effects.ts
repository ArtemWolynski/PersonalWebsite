import {Injectable} from '@angular/core';
import {EmailService} from '../../services/api/email.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, filter, map, switchMap} from 'rxjs/operators';
import {gitError, gitMessageSent, gitSendMessage} from '../actions/get-in-touch.actions';
import {of} from 'rxjs';

@Injectable()
export class GetInTouchEffects {

  constructor( private actions$: Actions,
               private _emailService: EmailService) {}

  sendMessage = createEffect(() => this.actions$.pipe(
    ofType(gitSendMessage),
    filter((action) => action.message !== null),
    switchMap((action) => this._emailService.sendEmail(action.message)),
    map(() => gitMessageSent({ success: true }),
    catchError(error => of(gitError(error)))
  )));
}
