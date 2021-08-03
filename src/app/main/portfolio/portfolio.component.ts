import {Component, OnDestroy, OnInit} from '@angular/core';
import {portfolio} from '../../shared/configs/portfolio';
import {PortfolioService} from '../../services/portfolio.service';
import {Observable, Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {uiSelectAppMode} from '../../state/layout.selectors';
import {AppMode} from '../../core/enums/app-mode';
import {Store} from '@ngrx/store';
import {AppScreen} from '../../core/enums/app-screen';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, OnDestroy {

  appMode$: Observable<AppMode> = this._store.select(uiSelectAppMode);

  currentIndex = 0;
  portfolio = portfolio;

  private _unsubscribeAll: Subject<any>;

  constructor(private _portfolioService: PortfolioService,
              private _store: Store) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this.subscribeToPortfolio();
  }

  get AppMode() {
    return AppMode;
  }

  get AppScreen() {
    return AppScreen;
  }

  slideNext() {
    if (this.currentIndex === this.portfolio.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this._portfolioService.setActiveItem(this.portfolio[this.currentIndex].name);
  }

  subscribeToPortfolio() {
    this._portfolioService.activeItem
      .pipe(
        filter(value => value != null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((activeProject) => {
        this.currentIndex = this.portfolio.indexOf(this.portfolio.find(portfolioItem => portfolioItem.name === activeProject));
      });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
