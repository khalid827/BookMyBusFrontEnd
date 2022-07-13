import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-welcomeadmin',
  templateUrl: './welcomeadmin.component.html',
  styleUrls: ['./welcomeadmin.component.css']
})
export class WelcomeadminComponent implements OnInit {

  constructor(public loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

}