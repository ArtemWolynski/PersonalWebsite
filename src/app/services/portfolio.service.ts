import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  activeItem: BehaviorSubject<string>;

  constructor() {
    this.activeItem = new BehaviorSubject('thepuir');
  }

  getActiveItem() {
    return this.activeItem.getValue()
  }

  setActiveItem(value) {
    this.activeItem.next(value);
  }
}
