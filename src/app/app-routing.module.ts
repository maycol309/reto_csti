import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { SliderComponent } from './slider/slider.component';


const routes: Routes = [
  {
    path: '', component: SliderComponent,
  },
  {
    path: 'cart', component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
