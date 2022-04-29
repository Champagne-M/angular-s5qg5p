import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  product : Product | undefined;

  addToCart(product: Product) {
    window.alert("your product has been added to the cart!");
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.product = products.find(product =>
        product.name === params.get('productName'));
    });
  }
}
