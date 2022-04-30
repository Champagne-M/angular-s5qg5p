import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { ReceiverService } from '../receiver.service';

import { ValidatePhoneInput } from '../form-validation';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css'],
})
export class ReceiverComponent implements OnInit {
  receiverForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', [Validators.required, ValidatePhoneInput(/^[1-9]/)]],
  });

  get phoneGetter() {
    return this.receiverForm.get('phone');
  }

  constructor(
    private fb: FormBuilder,
    private rs: ReceiverService,
    private router: Router
  ) {}

  ngOnInit() {
    this.receiverForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );
  }

  onValueChanged(data) {}

  onSubmit(receiverFormValue: any) {
    this.rs.setReceiver(receiverFormValue);
    console.log('receiver has changed');
    this.router.navigate(['/cart']);
  }
}
