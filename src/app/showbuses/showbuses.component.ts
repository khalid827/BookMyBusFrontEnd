import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Bus } from '../bus';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-showbuses',
  templateUrl: './showbuses.component.html',
  styleUrls: ['./showbuses.component.css']
})
export class ShowbusesComponent implements OnInit {
 
  buses:Observable<Bus[]> | any;

  constructor(private router:Router,private bService:BusServiceService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.buses=this.bService.getBusesList();
  }

 /* productDetails(id:string)
  {
    this.router.navigate(['details',id])
  }

  editProduct(id:string)
  {
    this.router.navigate(['update',id]);  //navigate to component from method
  }
*/
  deleteBus(id: string) {
    this.bService.deleteBus(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
