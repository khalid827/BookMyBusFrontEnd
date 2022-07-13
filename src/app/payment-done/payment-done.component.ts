import { Component, OnInit } from '@angular/core';
import { BookingList } from '../booking-list';
import { BookinglistService } from '../bookinglist.service';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-done',
  templateUrl: './payment-done.component.html',
  styleUrls: ['./payment-done.component.css']
})
export class PaymentDoneComponent implements OnInit {

  booking:BookingList|any;
  busNo:number|any;
  selected_seats : number[] = [];

  constructor(private bookinService:BookinglistService,private payment:PaymentService) { }

  ngOnInit(): void {
    this.bookinService.getLatestBooking().subscribe(data=>{
      console.log(data);
      this.booking=data;
    });
this.busNo=this.payment.busNo;
this.selected_seats=this.payment.selected_seats;
  }

}