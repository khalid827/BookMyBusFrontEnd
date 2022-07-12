import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Bookingclass } from '../bookingclass';
import { PaymentService } from '../payment.service';
import { Bus } from '../bus';
import { BusServiceService } from '../bus-service.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  id:string|any;
  booking:Observable<Bookingclass[]>|any;
  submitted=false;
  book:Bookingclass|any
  totalamount:number|any;
  bus: Bus | any;

  constructor(private route:ActivatedRoute,private router:Router,private payment:PaymentService,private busService:BusServiceService) { }

  ngOnInit(): void {

    this.booking=new Bookingclass();
    this.bus = new Bus();
    this.id=this.route.snapshot.params['id'];
  

    this.busService.getBus(this.id)
    .subscribe(data => {
      console.log(data)
      this.bus = data;
    }, error => console.log(error));
    

  }

  onSubmit() {
    if(this.booking.numberOfseats>this.bus.seatsAvailable)
    {
      alert("You have selected more seats than available");
      alert("Available seats are "+this.bus.seatsAvailable)
    }
    else{
    this.submitted = true;
    this.save();
    }    
  }
save()
{
    this.payment.passengerName=this.booking.passengerName;
    this.payment.numberOfseats=this.booking.numberOfseats;
    this.payment.phoneNumber=this.booking.phoneNumber;
    this.payment.totalamount=this.booking.numberOfseats*this.bus.price;
    this.payment.busNo=this.bus.busNo;

    this.goPayment(this.id);

}
goPayment(id:string)
{
  let user = sessionStorage.getItem('username')
    this.router.navigate(['payment',id,user]);
}
}