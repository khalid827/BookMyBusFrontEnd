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
  userdetails:Userdetails|any;
  user:string|any;

  constructor(private route:ActivatedRoute,private router:Router,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.userdetails=new Userdetails();
    let user = sessionStorage.getItem('username');

   // this.email=this.route.snapshot.params['user'];

    this.authService.getUserDetails(this.user)
    .subscribe(data => {
      console.log(data)
      this.userdetails = data;
    }, error => console.log(error));
  }

}
