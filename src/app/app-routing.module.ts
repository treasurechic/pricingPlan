import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';


const routes: Routes = [
  {path: '', component: SubscriptionComponent},
  {path: 'purchase/:plan', component: PurchaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
