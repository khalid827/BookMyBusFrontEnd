import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Bus } from '../bus';
import { BusServiceService } from '../bus-service.service';


@Component({
  selector: 'app-admin-bus',
  templateUrl: './admin-bus.component.html',
  styleUrls: ['./admin-bus.component.css']
})
export class AdminBusComponent implements OnInit {

  id:string |any;
  bus:Bus | any;

  constructor(private route:ActivatedRoute,private router:Router,private busService:BusServiceService) { }

  ngOnInit(): void {
    this.bus=new Bus();

    /* Snapshot is used to get the Route Parameters */
    this.id=this.route.snapshot.params['id'];

    /**
     * As a publisher, you create an Observable instance that defines a subscriber function. 
     * This is the function that is executed when a consumer calls the subscribe() method. 
     * The subscriber function defines how to obtain or generate values or messages to be published.
     */
     this.busService.getBus(this.id)
     .subscribe(data => {
       console.log(data)
       this.bus = data;
     }, error => console.log(error));
  }

  list()
  {
    this.router.navigate(['showbuses']);
  }

  }


