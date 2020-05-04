import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../ui.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  detail;
  details;
  getParam: any;
  price;

  json_data = [
    {
       "name":"bronze",
       "price":"500/m"
    },
 
    {
       "name":"silver",
       "price":"1000/m"
    },
 
    {
       "name":"gold",
       "price":"2000/m"
    }
 ]

  constructor(private uiservice: UiService, private activatedRouter: ActivatedRoute) {
    
    this.getParam = this.activatedRouter.params['value'].plan;

   }

  ngOnInit() {
    console.log(this.getParam)
    let plan = this.getParam
    console.log(plan) 
     this.details = {}   
    this.json_data.forEach(data => {
      if(data.name == plan){
        this.details = data      
      }
    })
    console.log(this.details)    
    // this.detail = this.json_data.filter(each_plan => each_plan.name == plan)
    // this.price = this.detail.price 
    // console.log(this.price)
  }

  completeOrder(){
    this.uiservice.showToast(`You have successfully purchased Our ${this.getParam} plan`);
  }

}

