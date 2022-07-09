import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Unauthorizeduser } from '../unauthorizeduser';
import { Bus } from '../bus';
import { BusServiceService } from '../bus-service.service';
import { UnauthorizeduserpaymentService } from '../unauthorizeduserpayment.service';

@Component({
  selector: 'app-unauthorized-booking',
  templateUrl: './unauthorized-booking.component.html',
  styleUrls: ['./unauthorized-booking.component.css']
})
export class UnauthorizedBookingComponent implements OnInit {

  id:string|any;
  booking:Observable<Unauthorizeduser[]>|any;
  submitted=false;
  book:Unauthorizeduser|any
  totalamount:number|any;
  bus: Bus | any;

  constructor(private route:ActivatedRoute,private router:Router,private payment:UnauthorizeduserpaymentService,
                  private busService:BusServiceService) { }

  ngOnInit(): void {

    this.booking=new Unauthorizeduser();
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
    this.payment.email=this.booking.email;
    this.payment.totalamount=this.booking.numberOfseats*this.bus.price;

    this.goPayment(this.id);

}
goPayment(id:string)
{
    this.router.navigate(['unauthbook',id]);
}

}
