import {AfterViewInit, Component, Input} from '@angular/core';
import {AppMode} from '../../../core/enums/app-mode';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss'],
})
export class SkillItemComponent implements AfterViewInit {

  @Input() text: string;
  @Input() maxValue: number;

  currentValue = 0;

  ngAfterViewInit() {
    // Little trick to kick off the fill-in animation
    setTimeout(() => {
      this.currentValue = this.maxValue;
    }, 100);
  }

  get AppMode() {
    return AppMode;
  }


}
