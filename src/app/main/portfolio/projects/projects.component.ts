import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../../../services/portfolio.service';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy  {
  activeProject;
  private _unsubscribeAll: Subject<any>;
  constructor(private portfolioService: PortfolioService) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this.portfolioService.activeItem
      .pipe(
        filter(value => value != null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((activeProject) => {
        this.activeProject = activeProject;
      })
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  setActiveProject(projectName: string) {
    this.portfolioService.setActiveItem(projectName);
  }

}
