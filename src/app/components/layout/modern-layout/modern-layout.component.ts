import {Component, Input} from '@angular/core';
import {ScreenTransitionService} from '../../../services/screen-transition.service';
import {AppMode} from '../../../core/enums/app-mode';

@Component({
  selector: 'app-modern-layout',
  templateUrl: './modern-layout.component.html',
  styleUrls: ['./modern-layout.component.scss']
})
export class ModernLayoutComponent {

  @Input() appMode: AppMode;

  constructor(private stepsService: ScreenTransitionService,) { }

  animateTransition() {
    this.stepsService.animateTransition();
  }

}
