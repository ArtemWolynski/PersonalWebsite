import {Component, OnDestroy, OnInit} from '@angular/core';
import {StepsService} from '../../services/steps.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  buttonText: string;
  shouldShowButton: boolean;
  private _unsubscribeAll: Subject<any>;
  constructor(private stepsService: StepsService) {
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
    this.stepsService.currentStep
      .pipe(
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((step) => {
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
      this.buttonText = 'All projects';
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
