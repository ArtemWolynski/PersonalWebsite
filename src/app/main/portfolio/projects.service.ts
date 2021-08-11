import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Project} from '../../core/models/project';
import {portfolio} from '../../shared/configs/portfolio';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() {
  }

  getProjects(): Observable<Project[]> {
    return of(portfolio);
  }
}
