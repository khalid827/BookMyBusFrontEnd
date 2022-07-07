import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { BookinglistService } from '../bookinglist.service';
import { BookingList } from '../booking-list';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {

  bookings: BookingList = new BookingList();
  id:string|any

  submitted = false;

  

  constructor(private router:Router,private bookingService:BookinglistService) { }

  ngOnInit(): void {
   
    this.bookings=new BookingList();
  }


  reloadData()
  {
    this.bookingService.getAllBookings();
    
  }


  deleteBooking(id: string) {
    this.bookingService.deleteBooking1(this.bookings.id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
        alert('successfully cancelled');
  
}
onSubmit() {
  this.submitted = true;
  this.deleteBooking(this.id);   
  this.router.navigate(['/home'])
}


}