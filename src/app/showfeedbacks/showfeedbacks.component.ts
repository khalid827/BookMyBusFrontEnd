import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedbackclass } from '../feedbackclass';
import { FeedbackserviceService } from '../feedbackservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showfeedbacks',
  templateUrl: './showfeedbacks.component.html',
  styleUrls: ['./showfeedbacks.component.css']
})
export class ShowfeedbacksComponent implements OnInit {

  showallfeedback:Observable<Feedbackclass[]> | any;

  constructor(private showallfeedbackService:FeedbackserviceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.showallfeedback=this.showallfeedbackService.getUserList();
  }nInit(): void {
  }

}