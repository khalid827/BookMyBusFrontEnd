import { Component, OnInit } from '@angular/core';
import { Userdetails } from '../userdetails';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  user:Userdetails|any;
  submitted=false;
  email:string|any;
  userdetails:Observable<Userdetails[]>|any;
  
  constructor(private route: ActivatedRoute,private router: Router,private authService:AuthenticationService) { }

  ngOnInit(): void {

    this.user=new Userdetails();
    this.email=this.route.snapshot.params['email'];

    this.authService.userProfile(this.email)
    .subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));

    }

    onSubmit() {
      this.updateDetails();    
    }

    updateDetails()
    {
      this.authService.updateUser(this.email,this.user)
      .subscribe(data => console.log(data), error => console.log(error));
      this.user = new Userdetails();
      this.gotoProfile();
      alert('Successfully Updated User Profile');
    }

    gotoProfile(){
      this.router.navigate(['/profile'])
    }
}
