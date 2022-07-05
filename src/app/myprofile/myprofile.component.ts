import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Userdetails } from '../userdetails';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  email:string|any;
  userprof:Userdetails|any;
  //username=sessionStorage.getItem('username');

  constructor(private route:ActivatedRoute,private router:Router,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.userprof=new Userdetails();
    
    this.email=sessionStorage.getItem('username');

    this.authService.userProfile(this.email)
     .subscribe(data => {
       console.log(data)
       this.userprof = data;
     }, error => console.log(error));
   
  }

}
