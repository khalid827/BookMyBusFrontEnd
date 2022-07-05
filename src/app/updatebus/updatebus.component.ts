import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Bus } from '../bus';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-updatebus',
  templateUrl: './updatebus.component.html',
  styleUrls: ['./updatebus.component.css']
})
export class UpdatebusComponent implements OnInit {

  id: string | any;
  bus: Bus | any;
  submitted = false;
  buses: Observable<Bus[]> | any;

  constructor(private route: ActivatedRoute,private router: Router,
    private busService: BusServiceService) { }

  ngOnInit(): void {

    this.bus = new Bus();
   
    this.id = this.route.snapshot.params['id'];
    
    this.busService.getBus(this.id)
      .subscribe(data => {
        console.log(data)
        this.bus = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateBus(); 
  }

  updateBus() {
    this.busService.updateBus(this.id, this.bus)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bus = new Bus();
    this.reloadData();
    this.gotoList();
  }

  reloadData() {
    this.bus = this.busService.getBusesList();
  }

  gotoList() {
    this.router.navigate(['/showbuses']).then(() => {
      window.location.reload();
    });
  }

}
