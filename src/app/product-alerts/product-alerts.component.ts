import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../products'

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html'
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
