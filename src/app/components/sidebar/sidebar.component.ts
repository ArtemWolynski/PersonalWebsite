import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ScreenTransitionService} from '../../services/screen-transition.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppScreen} from '../../core/enums/app-screen';
import {navSelectCurrentScreen} from '../../state/navigation.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() classicMode = false;

  buttonText: string;
  shouldShowButton: boolean;
  private _unsubscribeAll: Subject<any>;

  constructor(private stepsService: ScreenTransitionService,
              private _store: Store) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this.setButtonContent('About');
    this.subscribeToCurrentStep();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  onButtonClicked(value) {
    if (value && value !== 'Contacts')
    this.stepsService.setCurrentStep(this.resolveStep(this.buttonText));
  }

  subscribeToCurrentStep() {
    this._store.select(navSelectCurrentScreen)
      .pipe(
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((step: AppScreen) => {
        this.setButtonContent(step);
      });
  }

  setButtonContent(value) {
    this.shouldShowButton = true;
    if (value === 'About') {
      this.buttonText = 'View my work';
    } else if (value === 'Skills') {
      this.buttonText = 'To suggest project';
    } else if (value === 'Projects') {
      this.buttonText = '';
      // this.buttonText = 'All projects';
    } else if (value === 'Reviews') {
      this.buttonText = 'Go to contacts';
    } else if (value === 'Contacts') {
      this.buttonText = '';
      this.shouldShowButton = false;
    }
  }

  resolveStep(value) {
    let step;
    if (value === 'View my work') {
      step = 'Projects';
    } else if (value === 'To suggest project') {
     step = 'Contacts';
    } else if (value === 'All projects') {

    } else if (value === 'Go to contacts') {
     step = 'Contacts';
    }
    return step;
  }
}
