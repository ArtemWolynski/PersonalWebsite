import { Component, OnInit } from '@angular/core';
import {ScreenTransitionService} from '../../services/screen-transition.service';

@Component({
  selector: 'app-modern-layout',
  templateUrl: './modern-layout.component.html',
  styleUrls: ['./modern-layout.component.scss']
})
export class ModernLayoutComponent implements OnInit {

  constructor(private stepsService: ScreenTransitionService,) { }

  ngOnInit(): void {
  }

  animateTransition() {
    this.stepsService.animateTransition();
  }

}
