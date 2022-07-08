import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  passengerName='';
  numberOfseats='';
  phoneNumber='';
  totalamount=0;


  baseUrl='http://localhost:9090/bus/bookin/makebook';

  constructor(private http:HttpClient) { }

  postBooking(id: string, user: string,value:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/${user}`,value);
  }
}
