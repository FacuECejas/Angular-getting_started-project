import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ){ }

  onSubmit(){
    this.items = this.cartService.clearCart();
    console.log(this.checkoutForm);
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  hasErrors(controlName: string, errorType: string){
    return this.checkoutForm.get(controlName)?.hasError(errorType) && this.checkoutForm.get(controlName)?.touched
  }

}
