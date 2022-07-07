import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Bus } from '../bus';
import { BusDetails } from '../bus-details';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  buses:Observable<Bus[]> | any;

  bus:BusDetails=new BusDetails();

  newdate='';
  id=0;

  constructor(private busService:BusServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.bus=this.route.snapshot.params['bus'];

    this.reloadData();
  }

  reloadData()
  {
    this.newdate=this.busService.date;
    this.buses=this.busService.getBusBySearch(this.busService.departureLocation,this.busService.arrivalLocation,this.busService.date);
  }
  bookBus(id:string)
  {
    this.router.navigate(['booking',id]);
  }

}
