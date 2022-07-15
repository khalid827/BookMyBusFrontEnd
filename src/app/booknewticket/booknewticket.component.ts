import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookinglistService } from '../bookinglist.service';
import { BusServiceService } from '../bus-service.service';
import { Bookingclass } from '../bookingclass';
import { Observable } from 'rxjs';
import { Bus } from '../bus';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-booknewticket',
  templateUrl: './booknewticket.component.html',
  styleUrls: ['./booknewticket.component.css']
})
export class BooknewticketComponent implements OnInit {

  id:string|any;
  booking:Observable<Bookingclass[]>|any;
  submitted=false;
  book:Bookingclass|any
  totalamount:number|any;
  bus: Bus | any;
  total_seats:number|any;

  seats:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

  static booked=new Array();
  
  clr='red';
  seat=0;
  total_selected : number[] = [];

  constructor(private route: ActivatedRoute,private busService:BusServiceService,
    private bookingservice:BookinglistService,private router:Router,private payment:PaymentService) { }

  ngOnInit(): void {
    this.booking=new Bookingclass();
    this.bus = new Bus();
    this.id=this.route.snapshot.params['id'];
    this.total_seats=this.payment.numberOfseats;
    alert("select "+this.total_seats+" seats from below");
      
      
  }

 



color(st:number){
  return 'grey';
}


pushCheckBoxValue(st: any) {
  this.total_selected.push(st);
}

onSubmit(){
  this.payment.selected_seats=this.total_selected;
  let user = sessionStorage.getItem('username')
  alert(this.total_selected);
  this.router.navigate(['payment',this.id,user]);
}

}