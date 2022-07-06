import { Component, OnInit } from '@angular/core';
import { Feedbackclass } from '../feedbackclass';
import { FeedbackserviceService } from '../feedbackservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback: Feedbackclass = new Feedbackclass();
  submitted = false;

  constructor(private feedbackservice:FeedbackserviceService,private router:Router ) { }

  ngOnInit(): void {
  }

  newFeedback(): void {
   this.submitted
  }
  save() {
    this.feedbackservice.newFeedback(this.feedback)
      .subscribe(data => console.log(data), error => console.log(error));
    this.feedback= new Feedbackclass();
   
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();   
    alert("Successfully Submitted Feedback") 
  }
  

}