import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { BusServiceService } from '../bus-service.service';

import { BusDetails } from '../bus-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  registerForm: FormGroup | any;
  submitted = false;
 
  City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai', ]
 
  bus: BusDetails = new BusDetails();
  
  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private bService: BusServiceService,
              private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      arrivalLocation: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      departureLocation: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      date: ['', [Validators.required]],
      phoneNo:  ['', [Validators.required]],
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      passengers:  ['', [Validators.required]],});
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
 
  changeCity(e: | any) {
    this.registerForm.get('city').setValue(e.target.value, {
     onlySelf: true
    })
  }


  
  onSubmit() {

    this.submitted = true;
    this.bus=this.registerForm.value;
    // stop the process here if form is invalid
    //if (this.registerForm.invalid) {
      //  return;
    //}
    if(this.authenticationService.isUserLoggedIn())
    {
    this.search();
    }
    else{
      alert("You are not Logged in please Login");
      this.router.navigate(['/login']);
    }
  }

  search() {
    alert(" from "+this.bus.departureLocation+" to "+this.bus.arrivalLocation+" "+this.bus.date);
    /*this.authenticationService.saveDealer(this.flight)
    .subscribe(data => console.log(data), error => console.log(error));
    this.flight= new FlightDetails();*/

    this.bService.departureLocation = this.bus.departureLocation;
    this.bService.arrivalLocation = this.bus.arrivalLocation;
    this.bService.date=this.bus.date;
    this.authenticationService.departureLocation1 = this.bus.departureLocation;
    this.authenticationService.arrivalLocation1 = this.bus.arrivalLocation;
    this.authenticationService.date1 = this.bus.date;

    this.gotoList();
  }

  gotoList() {

    this.router.navigate(['/search']);

  }

}
