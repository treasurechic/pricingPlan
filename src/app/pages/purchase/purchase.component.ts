import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../ui.service';
import { ActivatedRoute } from '@angular/router';
import {} from '../../plans.json';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  
  getParam: any;

  constructor(private uiservice: UiService, private activatedRouter: ActivatedRoute) {
    
    this.getParam = this.activatedRouter.params['value'].plan;

   }

  ngOnInit() {
    console.log(this.getParam)

  }

  completeOrder(){
    this.uiservice.showToast(`You have successfully purchased Our ${this.getParam} plan`);
  }

}
