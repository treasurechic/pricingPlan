import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  constructor(private http: HttpClient, private Router: Router) { }

  ngOnInit() {

  } 

  // purchase(planDetail){
  //    console.log(planDetail)
  //     this.Router.navigate([`./purchase/${planDetail}`])
    
  // }

}
