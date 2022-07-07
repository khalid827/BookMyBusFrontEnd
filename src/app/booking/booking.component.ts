import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Bookingclass } from '../bookingclass';
import { PaymentService } from '../payment.service';
import { Bus } from '../bus';


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


  constructor(private route:ActivatedRoute,private router:Router,private payment:PaymentService) { }

  ngOnInit(): void {

    this.booking=new Bookingclass();
    this.id=this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
save()
{
    this.payment.passengerName=this.booking.passengerName;
    this.payment.numberOfseats=this.booking.numberOfseats;
    this.payment.phoneNumber=this.booking.phoneNumber;
    this.goPayment(this.id);

}
goPayment(id:string)
{
  let user = sessionStorage.getItem('username')
    this.router.navigate(['payment',id,user]);
}
}
