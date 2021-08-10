import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Recommendation} from '../../core/models/recommendation';
import {recommendations} from '../../shared/configs/feedbacks';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {
  constructor() { }

  getRecommendations() :Observable<Recommendation[]> {
    return of(recommendations)
  }
}
