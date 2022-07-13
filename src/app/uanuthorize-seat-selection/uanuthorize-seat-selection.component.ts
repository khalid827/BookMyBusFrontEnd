import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Unauthorizeduser } from '../unauthorizeduser';
import { Bus } from '../bus';
import { BusServiceService } from '../bus-service.service';
import { UnauthorizeduserpaymentService } from '../unauthorizeduserpayment.service';

@Component({
  selector: 'app-uanuthorize-seat-selection',
  templateUrl: './uanuthorize-seat-selection.component.html',
  styleUrls: ['./uanuthorize-seat-selection.component.css']
})
export class UanuthorizeSeatSelectionComponent implements OnInit {

  id:string|any;
  booking:Observable<Unauthorizeduser[]>|any;
  submitted=false;
  book:Unauthorizeduser|any
  totalamount:number|any;
  bus: Bus | any;
  total_seats:number|any;

  seats:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

  static booked=new Array();
  
  clr='red';
  seat=0;
  total_selected : number[] = [];

  constructor(private route:ActivatedRoute,private router:Router,private payment:UnauthorizeduserpaymentService,
    private busService:BusServiceService) { }

  ngOnInit(): void {

    this.booking=new Unauthorizeduser();
    this.bus = new Bus();
    this.id=this.route.snapshot.params['id'];
    this.total_seats=this.payment.numberOfseats;
    this.total_seats=this.payment.numberOfseats;
    alert("select "+this.total_seats+" seats from below");
    

  }

  color(st:number){
    return 'skyblue';
  }
  
  
  pushCheckBoxValue(st: any) {
    this.total_selected.push(st);
  }
  
  onSubmit(){
    this.payment.selected_seats=this.total_selected;
    alert(this.total_selected);
    this.router.navigate(['unauthbook',this.id]);
  }

}