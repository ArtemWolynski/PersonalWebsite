import {Component, Input, OnInit} from '@angular/core';
import {SkillsService} from '../../../services/skills.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Input() text;
  @Input() maxValue;
  currentValue = 0;
  fillInTime: number;
  private _unsubscribeAll: Subject<any>;

  constructor(private skillItemService: SkillsService) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this.fillInTime = this.skillItemService.time;
    this.countInterval();
  }

  countInterval() {
    const interval = this.fillInTime / this.maxValue;
    const loop = setInterval(() => {
     if (this.currentValue === this.maxValue) {
       clearInterval(loop);
     }
      this.currentValue += 1;
    }, interval)

  }
}
