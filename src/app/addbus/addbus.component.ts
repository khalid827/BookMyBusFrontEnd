import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BusServiceService } from '../bus-service.service';
import { Bus } from '../bus';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {

  registerForm: FormGroup | any;
  bus: Bus = new Bus();
  submitted = false;

  City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai']

  constructor(private busservice:BusServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  get f() { return this.registerForm.controls; }

  newBus(): void {
    this.submitted = false;
    this.bus= new Bus();
  }
 
  save() {
    this.busservice.newBus(this.bus)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bus= new Bus();
    this.gotoList();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
 
  gotoList() {
    this.router.navigate(['/showbuses']).then(() => {
      window.location.reload();
    });
  }

}
