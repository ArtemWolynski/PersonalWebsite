import {Component, Input, OnInit} from '@angular/core';
import {feedbacks} from '../../../configs/feedbacks';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  @Input() classicMode = false;
  feedback: any[];
  currentIndex = 0;

  constructor() { }

  ngOnInit() {
    this.feedback = feedbacks;
  }

  slideNext() {
    if (this.currentIndex === this.feedback.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  slidePrev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.feedback.length - 1;
    } else {
      this.currentIndex--;
    }
  }

}
