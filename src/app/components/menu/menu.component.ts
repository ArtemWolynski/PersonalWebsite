import {Component, OnInit} from '@angular/core';
import {ScreenTransitionService} from '../../services/screen-transition.service';
import {AppScreen} from '../../core/enums/app-screen';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navList = Object.keys(AppScreen);
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
