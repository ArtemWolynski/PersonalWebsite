import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-back-nforward-control',
  templateUrl: './back-n-forward-control.component.html',
  styleUrls: ['./back-n-forward-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackNForwardControlComponent {
  @Input() text: string;

  @Output() prevClicked: EventEmitter<boolean> = new EventEmitter();
  @Output() nextClicked: EventEmitter<boolean> = new EventEmitter();

  prev() {
    this.prevClicked.next(true);
  }

  next() {
    this.nextClicked.next(true);
  }
}
