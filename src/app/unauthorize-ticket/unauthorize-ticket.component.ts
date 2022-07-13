import { Component, OnInit } from '@angular/core';
import { Unauthorizeduser } from '../unauthorizeduser';
import { UnauthorizeduserpaymentService } from '../unauthorizeduserpayment.service';

@Component({
  selector: 'app-unauthorize-ticket',
  templateUrl: './unauthorize-ticket.component.html',
  styleUrls: ['./unauthorize-ticket.component.css']
})
export class UnauthorizeTicketComponent implements OnInit {

  booking:Unauthorizeduser|any;
  busNo:number|any;
  selected_seats : number[] = [];

  constructor(private bookService:UnauthorizeduserpaymentService) { }

  ngOnInit(): void {
    this.bookService.getLatest().subscribe(data=>{
      console.log(data);
      this.booking=data;
    });
this.busNo=this.bookService.busNo;
this.selected_seats=this.bookService.selected_seats;
  }

}