import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedbackclass } from './feedbackclass';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedbackserviceService {
  baseUrl='http://localhost:9090/bus/feedback/feed';
  private baseUrl1='http://localhost:9090/bus/feedback/feed';

  constructor(private http:HttpClient) { }

  newFeedback(feedback: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, feedback);
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
  }


  
}