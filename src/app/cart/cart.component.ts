import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from '../products';
import { Receiver } from '../receiver';

import { CartService } from '../cart.service';
import { ReceiverService } from '../receiver.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  receiver: Receiver;
  items: Product[];

  constructor(
    private router: Router,
    private cartService: CartService,
    private receiverService: ReceiverService
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.receiver = this.receiverService.getReceiver();
  }

  onSubmit() {
    this.router.navigate(['/pay']);
  }
}
