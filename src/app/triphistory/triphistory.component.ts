import { Component, OnInit } from '@angular/core';
import { Userdetails } from '../userdetails';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { BookinglistService } from '../bookinglist.service';
import { BookingList } from '../booking-list';

@Component({
  selector: 'app-triphistory',
  templateUrl: './triphistory.component.html',
  styleUrls: ['./triphistory.component.css']
})
export class TriphistoryComponent implements OnInit {

  bookinglist:Observable<BookingList[]> |any;
  email:string|any;
  userprof:Userdetails|any;
  //username=sessionStorage.getItem('username');

  constructor(private route:ActivatedRoute,private router:Router,private authService:AuthenticationService,private bookingService:BookinglistService ) { }

  ngOnInit(): void {
    this.userprof=new Userdetails();
    
    this.email=sessionStorage.getItem('username');

    this.bookinglist=this.bookingService.getBookingByEmail(this.email);
    
   
  }
  


}