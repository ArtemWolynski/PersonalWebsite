import {Component, Input, OnInit} from '@angular/core';
import {portfolio} from '../../../configs/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  @Input() classicMode = false;
  currentIndex = 0;

  portfolio;
  constructor() { }

  ngOnInit() {
    this.portfolio = portfolio;
  }

  slideNext() {
    if (this.currentIndex === this.portfolio.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

}
