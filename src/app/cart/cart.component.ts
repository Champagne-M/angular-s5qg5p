import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Product } from '../products';
import { Receiver } from '../receiver';

import { CartService } from '../cart.service';
import { ReceiverService } from '../receiver.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  receiver: Receiver;
  items: Product[];
  checkoutForm;

  constructor(
    private cartService: CartService,
    private receiverService: ReceiverService,
    private formBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: " ",
      address: " "
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.receiver = this.receiverService.getReceiver();
  }

  onSubmit(customerData) {
    console.warn("your oder has been submitted", customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    console.log("what the fuck?");
  }

}