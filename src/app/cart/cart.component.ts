import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { IntegrationService } from '../services/integration.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  listProducts: any = [];
  total: number = 0;
  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.listProducts = JSON.parse(sessionStorage.getItem('cart'));
    this.listProducts.forEach((e: any) => {
      this.total += Number(e.price);
    });
  }

  comprar() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
