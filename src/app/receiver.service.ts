import { Injectable } from '@angular/core';

import { Receiver } from './receiver';

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {
  receiver: Receiver = {
    name: '',
    address: '',
    phone: ''
  };

  constructor() { }

  setReceiver(receiverInfo: object) {
    this.receiver.name = receiverInfo['name'];
    this.receiver.address = receiverInfo['address'];
    this.receiver.phone = receiverInfo['phone'];
  }

  getReceiver() {
    return this.receiver;
  }
}