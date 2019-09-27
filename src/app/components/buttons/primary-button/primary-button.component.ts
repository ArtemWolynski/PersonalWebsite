import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {
  @Input() text1;
  @Output() clicked: EventEmitter<string> = new EventEmitter();
  @Input() disabled;

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.clicked.next(this.text1);
  }

}
