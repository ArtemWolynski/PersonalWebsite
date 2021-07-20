import {Component, Input, OnInit} from '@angular/core';
import {particlesSettings, particlesStyle} from '../../../../configs/particles';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
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
