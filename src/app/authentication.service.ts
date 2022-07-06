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
    let admin = "Khalid@gmail.com";
    console.log(!(admin === null))
    return !(admin === null)
  }
 
  logOut() {
    sessionStorage.removeItem('username')
  }

  saveUser(user: Object): Observable<Object> {
    return this.http.post(`http://localhost:9090/bus/usd/registerUser`, user);
  }

  userProfile(email:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/${email}`)
  }
}
