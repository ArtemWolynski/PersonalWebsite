import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Recommendation} from '../../../core/models/recommendation';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() recommendation: Recommendation;

  constructor() { }

  ngOnInit() {
  }

}
