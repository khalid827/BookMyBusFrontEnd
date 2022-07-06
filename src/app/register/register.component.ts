import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { Userdetails } from '../userdetails';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  userdetails: Userdetails = new Userdetails();
  submitted = false;

  City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai']

  constructor(private busservice:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  get f() { return this.registerForm.controls; }

  newProduct(): void {
    this.submitted = false;
    this.userdetails= new Userdetails();
  }
 
  save() {
    this.busservice.saveUser(this.userdetails)
      .subscribe(data => console.log(data), error => console.log(error));
    this.userdetails= new Userdetails();
    alert("Successfully Registered")
    this.gotoList();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
 
  gotoList() {
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }


}
