import {Component, Input, OnInit} from '@angular/core';
import {particlesSettings, particlesStyle} from '../../../configs/particles';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  myStyle = particlesStyle;
  myParams = particlesSettings;
  width: number = 100;
  height: number = 100;
  @Input() classicMode = false;
  constructor() { }

  ngOnInit() {
    this.myParams.particles.number.value = window.innerWidth / 50;
  }

}
