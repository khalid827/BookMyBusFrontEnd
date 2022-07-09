import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {

  id=0;
  arrivalLocation ='';
  departureLocation='';
  date = '';



  baseUrl='http://localhost:9090/bus/details/createbus';
  baseUrl1='http://localhost:9090/bus/details/getbybusId';
  baseUrl2='http://localhost:9090/bus/details/find';

  constructor(private http:HttpClient) { }

  newBus(bus: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bus);
  }

  getBusesList():Observable<any>
  {
    return this.http.get( `${this.baseUrl}`);
  }
 
  deleteBus(id:string):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

  getBus(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl1}/${id}`)
  }

  updateBus(id:string,value:any):Observable<Object>
  {
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  getBusBySearch(departureLocation: string, arrivalLocation: string,date:string): Observable<any> {
    return this.http.get(`${this.baseUrl2}/${departureLocation}/${arrivalLocation}/${date}`);
  }
}

