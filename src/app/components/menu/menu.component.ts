import {Component, OnInit} from '@angular/core';
import {steps} from '../../shared/configs/steps';
import {ScreenTransitionService} from '../../services/screen-transition.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navList = steps;
  isOpen = false;

  constructor(private stepsService: ScreenTransitionService) { }

  ngOnInit() {
  }

  setCurrentStep(value) {
    this.stepsService.setCurrentStep(value);
    this.toggleMenu();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
