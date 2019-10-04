import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-back-nforward-control',
  templateUrl: './back-n-forward-control.component.html',
  styleUrls: ['./back-n-forward-control.component.scss']
})
export class BackNForwardControlComponent implements OnInit {
  @Output() prevClicked: EventEmitter<boolean> = new EventEmitter();
  @Output() nextClicked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  prevClickedd() {
    this.prevClicked.next(true);
  }

  nextClickedd() {
    this.nextClicked.next(true);
  }

}
