import { Component, OnInit } from '@angular/core';
import { UnauthorizeduserpaymentService } from '../unauthorizeduserpayment.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Unauthorizeduser } from '../unauthorizeduser';

@Component({
  selector: 'app-unauthorizeduser-payment',
  templateUrl: './unauthorizeduser-payment.component.html',
  styleUrls: ['./unauthorizeduser-payment.component.css']
})
export class UnauthorizeduserPaymentComponent implements OnInit {

  passengerName='';
  numberOfseats= '';
  phoneNumber='';
  email='';
  totalamount=0;

  user:string|any;
  id:string|any;
  booking:Observable<Unauthorizeduser[]>|any;
  submitted=false;
  book:Unauthorizeduser|any

  constructor(private route:ActivatedRoute,private router:Router,private payment:UnauthorizeduserpaymentService) { }

  ngOnInit(): void {

    this.book=new Unauthorizeduser();
    this.id=this.route.snapshot.params['id'];
    this.user=this.route.snapshot.params['user'];
    this.totalamount=this.payment.totalamount;
  }

  onSubmit() {
    this.book.passengerName=this.payment.passengerName;
    this.book.numberOfseats=this.payment.numberOfseats;
    this.book.phoneNumber=this.payment.phoneNumber
    this.book.totalCost=this.payment.totalamount;
    this.book.email=this.payment.email;
    this.makeBook();    
  }

  makeBook() {

    this.payment.postBooking(this.id,this.book)
      .subscribe(data => console.log(data), error => console.log(error));
    alert("Unauthorized User Payment Successfull")
    this.book = new Unauthorizeduser();
    this.reloadData();
  }

  reloadData()
  {
    this.router.navigate(['unauthticket'])
  }
}