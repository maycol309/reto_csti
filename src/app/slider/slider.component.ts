import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { IntegrationService } from '../services/integration.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  listProducts: any = [];
  listCategory: any = [];
  listProductsStr: string = '';
  productsByCategory: any = [];
  category: string = '';
  cart: any = [];

  constructor(
    config: NgbCarouselConfig,
    private service: IntegrationService,
    private router: Router
    ) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() {
    this.listarProductos();
  }

  listarProductos() {
    this.service.listarProductos().subscribe((resp: any) => {
      this.listProducts = resp.list;
      this.listProducts.forEach((e: any) => {
        this.listCategory.push({
          id: e.category[0].id,
          category: e.category[0].description
        });
      });
      this.listProductsStr = JSON.stringify(resp.list);
      this.productsByCategory = JSON.parse(this.listProductsStr);
    });
  }

  buscarPorCategoria(id: string) {
    this.productsByCategory = JSON.parse(this.listProductsStr);
    let prod = this.productsByCategory.find((element) => element.category[0].id == id);
    this.productsByCategory = [prod];
  }

  agregarCarrito(item: any) {
    let idx = this.cart.findIndex((x) => x.productId === item.productId);
    if (idx == -1) {
      this.cart.push(item);
    } else {
      alert("El producto ya está agregado.");
    }
    sessionStorage.setItem("cart",JSON.stringify(this.cart));
  }

  irComprar() {
    if (this.cart.length > 0) {
      this.router.navigate(['/cart']);
    }
  }

}
