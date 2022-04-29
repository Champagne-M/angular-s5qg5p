export interface Product {
  id : number;
  name : string;
  price : number;
  description : string;
  url : string;
};

export const products = [
  {
    id : 1,
    name: 'HUAWEI Mate 40 Pro',
    price: 799,
    description: '5 nm Kirin 9000 5G SoC | Ultra Vision Cine Camera and Selfie Camera | Dual HUAWEI SuperCharge',
    url: 'https://consumer.huawei.com/en/phones/p40-pro/'
  },
  {
    id : 2,
    name: 'HUAWEI P50 Pocket',
    price: 699,
    description: 'Premium Foldable Design | Ultra Spectrum Camera | Smart Cover Screen, 6.9" Main Screen',
    url: 'https://consumer.huawei.com/en/phones/p50-pocket/'
  },
  {
    id : 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    url: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/