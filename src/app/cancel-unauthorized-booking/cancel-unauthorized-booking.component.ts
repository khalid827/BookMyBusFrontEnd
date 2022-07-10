import { Component, OnInit } from '@angular/core';
import { Unauthorizeduser } from '../unauthorizeduser';
import { Router } from '@angular/router';
import { UnauthorizeduserpaymentService } from '../unauthorizeduserpayment.service';

@Component({
  selector: 'app-cancel-unauthorized-booking',
  templateUrl: './cancel-unauthorized-booking.component.html',
  styleUrls: ['./cancel-unauthorized-booking.component.css']
})
export class CancelUnauthorizedBookingComponent implements OnInit {

  constructor(private router:Router,private unauthorizedService:UnauthorizeduserpaymentService) { }
  bookings:Unauthorizeduser = new Unauthorizeduser();
  submitted = false;

  ngOnInit(): void {
  }

   deleteBooking(id: string) {
    this.unauthorizedService.deleteBooking1(this.bookings.id)
      .subscribe(
        data => {
          console.log(data);
          
        },
        error => console.log(error));
        alert('successfully cancelled');
  
}

onSubmit() {
  this.submitted = true;
  this.deleteBooking(this.bookings.id);   
  this.router.navigate(['/home'])
}
}
