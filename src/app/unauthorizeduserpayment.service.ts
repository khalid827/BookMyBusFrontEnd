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
  busNo=0;
  selected_seats : number[] = [];


  baseUrl='http://localhost:9090/bus/unauthorize/book';
  baseUrl1='http://localhost:9090/bus/unauthorize/latestbooking';
  baseUrl2='http://localhost:9090/bus/unauthorize/book';

  constructor(private http:HttpClient) { }

  postBooking(id: string,value:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}`,value);
  }

  deleteBooking1(id:string):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

  getLatest():Observable<any>
  {
    return this.http.get(`${this.baseUrl1}`);
  }

  getAllBookings():Observable<any>
  {
    return this.http.get(`${this.baseUrl2}`);
  }

}