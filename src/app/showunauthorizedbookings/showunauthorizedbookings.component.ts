import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UnauthorizeduserpaymentService } from '../unauthorizeduserpayment.service';
import { Unauthorizeduser } from '../unauthorizeduser';

@Component({
  selector: 'app-showunauthorizedbookings',
  templateUrl: './showunauthorizedbookings.component.html',
  styleUrls: ['./showunauthorizedbookings.component.css']
})
export class ShowunauthorizedbookingsComponent implements OnInit {



  bookinglist:Observable<Unauthorizeduser[]> |any;

  constructor(private unauthService:UnauthorizeduserpaymentService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
reloadData()
{
  this.bookinglist=this.unauthService.getAllBookings();
}

}
