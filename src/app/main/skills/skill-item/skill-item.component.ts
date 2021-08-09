import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss'],
})
export class SkillItemComponent implements OnInit, AfterViewInit {
  @Input() text;
  @Input() maxValue;
  currentValue = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Little trick to kick off the fill-in animation
    setTimeout(() => {
      this.currentValue = this.maxValue;
    }, 100);
  }
}
