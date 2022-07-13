import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Userdetails } from '../userdetails';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-inactivecustomers',
  templateUrl: './inactivecustomers.component.html',
  styleUrls: ['./inactivecustomers.component.css']
})
export class InactivecustomersComponent implements OnInit {

  user:Observable<Userdetails[]> | any;

  constructor(private userService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.user=this.userService.inactiveUsers();
  }

}
