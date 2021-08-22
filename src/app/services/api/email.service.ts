import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Message} from '../../core/models/message';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly baseUrl: string;

  constructor(private _http: HttpClient) {
    this.baseUrl = environment.backUrl + 'email/';
  }

  sendEmail(message: Message) {
    return this._http.post<void>(this.baseUrl, message);
  }
}
