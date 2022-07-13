import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.css']
})
export class ProfitsComponent implements OnInit {

  total:number|any;

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.authService.getProfit().subscribe(data=>{
      console.log(data);
      this.total=data;
    });
  }

}
