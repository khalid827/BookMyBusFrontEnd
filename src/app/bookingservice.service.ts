import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

 private baseUrl="http://localhost:9090/bookin/makebook";
  constructor(private http:HttpClient) { }


  getAllBookings():Observable<any>
    {
        return this.http.get(`${this.baseUrl}`);
    }
      
}