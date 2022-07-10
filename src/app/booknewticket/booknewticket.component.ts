import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookinglistService } from '../bookinglist.service';
import { BusServiceService } from '../bus-service.service';
import { BookingList } from '../booking-list';

@Component({
  selector: 'app-booknewticket',
  templateUrl: './booknewticket.component.html',
  styleUrls: ['./booknewticket.component.css']
})
export class BooknewticketComponent implements OnInit {

  seats:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

  static booked=new Array();
  
  clr='red';
  seat=0
 

  constructor(private route: ActivatedRoute,private busService:BusServiceService,
    private bookingservice:BookinglistService,private router:Router) { }

  ngOnInit(): void {
   
      this.reload();
  }

  reload(){
    this.bookingservice.getAllBookings()
    .subscribe(info=>{
      console.log(info);
  BooknewticketComponent.booked=info
    });
  }

  check(st:number){
    if(BooknewticketComponent.booked.length==0)
    return;
    for(let s of BooknewticketComponent.booked)
    {
      if(s==st){
      return true;}
  }
  return;
}

color(st:number){
  if(BooknewticketComponent.booked.length==0)
    return 'lightpink';
    for(let s of BooknewticketComponent.booked)
    {
      if(s==st){
      return 'green';}
  }
  return 'lightpink';
}

onSelect(st:number){
  this.seat=st;
}

onSubmit(){
  console.log(this.seat)
  
  // this.bookingservice.saveSeat(this.seat)
  BookinglistService.seat=this.seat
  
  this.router.navigate(['payment/:id/:user'])
}

}
