import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bookingclass } from '../bookingclass';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  passengerName='';
  numberOfseats= '';
  phoneNumber='';
  totalamount=0;

  user:string|any;
  id:string|any;
  booking:Observable<Bookingclass[]>|any;
  submitted=false;
  book:Bookingclass|any

  constructor(private route:ActivatedRoute,private router:Router,private payment:PaymentService) { }

  ngOnInit(): void {


    this.book=new Bookingclass();
    this.id=this.route.snapshot.params['id'];
    this.user=this.route.snapshot.params['user'];
    this.totalamount=this.payment.totalamount;
  }

  onSubmit() {
    this.book.passengerName=this.payment.passengerName;
    this.book.numberOfseats=this.payment.numberOfseats;
    this.book.phoneNumber=this.payment.phoneNumber
    this.book.totalCost=this.payment.totalamount;
    this.makeBook();    
  }
  
  makeBook() {

    this.payment.postBooking(this.id,this.user,this.book)
      .subscribe(data => console.log(data), error => console.log(error));
    alert("payment")
    this.book = new Bookingclass();
    this.reloadData();
  }

  reloadData()
  {
    this.router.navigate(['paymentdone'])
  }

}
