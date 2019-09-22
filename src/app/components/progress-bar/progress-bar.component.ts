import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Output() activePath: EventEmitter<string> = new EventEmitter();
  activePathValue;
  progressBarValue = 15;
  values: string[];

  constructor() { }

  ngOnInit() {
    this.initProgressBar();
    this.activePathValue = this.values[0];
  }

  onElementClicked(value: string) {
    this.activePath.next(value);
    this.activePathValue = value;
    this.setProgressBarValue(value);
  }

  setProgressBarValue(value) {
    const index = this.values.indexOf(value);
    if (index === 0) {
      this.progressBarValue = 15;
    } else if (index === 1) {
      this.progressBarValue = 36;
    } else if (index === 2) {
      this.progressBarValue = 58;
    } else if (index === 3) {
      this.progressBarValue = 80;
    }
  }

  initProgressBar() {
    this.values = ['Skills', 'Projects', 'Reviews', 'Contacts'];
  }

}
