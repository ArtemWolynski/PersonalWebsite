import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean;

  @Output() clicked: EventEmitter<string> = new EventEmitter();

  onClicked() {
    this.clicked.next(this.text);
  }

}
