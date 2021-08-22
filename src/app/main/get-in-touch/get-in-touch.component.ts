import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {uiSelectAppMode} from '../../state/layout.selectors';
import {AppMode} from '../../core/enums/app-mode';
import {Store} from '@ngrx/store';
import {AppScreen} from '../../core/enums/app-screen';
import {EmailService} from '../../services/api/email.service';
import {gitMessageSent, gitSendMessage} from '../../store/actions/get-in-touch.actions';
import {gitMessageSentSuccess} from '../../state/get-in-touch.selectors';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss'],
  providers: [EmailService]
})
export class GetInTouchComponent implements OnInit, OnDestroy {

  appMode$: Observable<AppMode> = this._store.select(uiSelectAppMode);

  subscriptions: Subject<void>;

  success$ = this._store.select(gitMessageSentSuccess)
    .pipe(
      tap((isSuccess: boolean) => {
        if (isSuccess) {
          this.getInTouchForm.reset();
        }
      })
    );

  getInTouchForm: FormGroup;

  constructor( private _emailService: EmailService,
               private _formBuilder: FormBuilder,
               private _store: Store) {
    this.subscriptions = new Subject();
  }

  ngOnInit() {
    this.initForm();
  }

  get AppMode() {
    return AppMode;
  }

  get AppScreen() {
    return AppScreen;
  }

  onSubmit() {
    this._store.dispatch(gitSendMessage({ message : this.getInTouchForm.value }));
  }

  initForm() {
    this.getInTouchForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    this.getInTouchForm.valueChanges
      .pipe(takeUntil(this.subscriptions))
      .subscribe((value =>  {
      if (value.name || value.email || value.text) {
      this._store.dispatch(gitMessageSent( { success: false }))
      }
    }))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
