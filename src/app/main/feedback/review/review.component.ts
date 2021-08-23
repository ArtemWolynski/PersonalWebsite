import { Component, Input } from '@angular/core';
import { Recommendation } from '../../../core/models/recommendation';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() recommendation: Recommendation;
}
