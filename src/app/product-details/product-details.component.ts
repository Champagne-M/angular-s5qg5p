import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  product : Product | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      console.log(typeof params);
      console.log(String(params['productId']));
    });

  }

}