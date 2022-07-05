import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { BookinglistService } from '../bookinglist.service';
import { BookingList } from '../booking-list';

@Component({
  selector: 'app-showbookings',
  templateUrl: './showbookings.component.html',
  styleUrls: ['./showbookings.component.css']
})
export class ShowbookingsComponent implements OnInit {

  bookinglist:Observable<BookingList[]> |any;

  constructor(private bookingService:BookinglistService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
reloadData()
{
  this.bookinglist=this.bookingService.getAllBookings();
}

}
