import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = "https://consumer.huawei.com/cn/phones/?ic_medium=hwdc&ic_source=corp_header_consumer";
  }

}