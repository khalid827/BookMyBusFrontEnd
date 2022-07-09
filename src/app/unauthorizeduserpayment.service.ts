import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizeduserpaymentService {

  passengerName='';
  numberOfseats='';
  phoneNumber='';
  totalamount=0;
  email='';

  baseUrl='http://localhost:9090/bus/unauthorize/book';

  constructor(private http:HttpClient) { }

  postBooking(id: string,value:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}`,value);
  }

}
