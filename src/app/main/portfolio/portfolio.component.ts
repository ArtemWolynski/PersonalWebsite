import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {portfolio} from '../../configs/portfolio';
import {PortfolioService} from '../../services/portfolio.service';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, OnDestroy {
  @Input() classicMode = false;
  currentIndex = 0;

  portfolio;
  private _unsubscribeAll: Subject<any>;
  constructor(private portfolioService: PortfolioService) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this.portfolio = portfolio;
    this.subscribeToPortfolio();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  slideNext() {
    if (this.currentIndex === this.portfolio.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.portfolioService.setActiveItem(this.portfolio[this.currentIndex].name);
  }

  subscribeToPortfolio() {
    this.portfolioService.activeItem
      .pipe(
        filter(value => value != null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((activeProject) => {
        this.currentIndex = this.portfolio.indexOf(this.portfolio.find(portfolioItem => portfolioItem.name === activeProject));
      });
  }

}
