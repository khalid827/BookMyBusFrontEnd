import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookinglistService {

  baseUrl='http://localhost:9090/bus/bookin/makebook';

  constructor(private http:HttpClient) { }

  getAllBookings():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`);
  }

  getBookingByEmail(email:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/${email}`)
  }

}
