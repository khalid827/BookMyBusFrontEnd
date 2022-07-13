import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  departureLocation1='';
  arrivalLocation1= '';
  date1='';
  


  private baseUrl='http://localhost:9090/bus/usd/getuserdetails';
  private baseUrl1='http://localhost:9090/bus/usd/findallUsers';
  private baseUrl3='http://localhost:9090/bus/usd/getuserdetails';
  private baseUrl4='http://localhost:9090/bus/usd/editdetails';
  private baseUrl5='http://localhost:9090/bus/revenue/inactive';
  private baseUrl6='http://localhost:9090/bus/revenue/profit';

  constructor(private http:HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
  }

  getUserDetails(email:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl3}/${email}`);
  }

  login(user:any):Observable<any>
  {
    return this.http.post(`http://localhost:9090/bus/usd/userCheck`,user)
  }

  loginAdmin(admin:any):Observable<any>
  {
    return this.http.post(`http://localhost:9090/bus/usd/admin`,admin)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('admin')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    if(this.isAdminLoggedIn())
    sessionStorage.removeItem('admin')
    else
    sessionStorage.removeItem('username')
  }
 

  saveUser(user: Object): Observable<Object> {
    return this.http.post(`http://localhost:9090/bus/usd/registerUser`, user);
  }

  userProfile(email:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/${email}`)
  }
  updateUser(email:string,value:any):Observable<any>
  {
    return this.http.put(`${this.baseUrl4}/${email}`,value)
  }

  inactiveUsers()
  {
    return this.http.get(`${this.baseUrl5}`)
  }

  getProfit()
  {
    return this.http.get(`${this.baseUrl6}`)
  }


}
