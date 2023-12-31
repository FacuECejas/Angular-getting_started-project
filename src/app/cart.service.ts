import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(newProduct: Product){
    this.items.push(newProduct);
  }

  getItems (){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices (){
    return this.http.get<{type: string, price: number}[]>('assets/shipping.json');
  }

}
