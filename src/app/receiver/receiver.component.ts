import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { ReceiverService } from '../receiver.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  receiverForm = this.fb.group({
    name: [''],
    address: [''],
    phone: ['']
  });

  constructor(
    private fb: FormBuilder,
    private rs: ReceiverService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(receiverFormValue: any) {
    this.rs.setReceiver(receiverFormValue);
    console.log("receiver has changed");
    this.router.navigate(['/cart']);
  }

}