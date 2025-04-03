import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductItemComponent} from '../product-item/product-item.component';
import {Product} from '../app.component';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products:Product[] = [];
  @Input() globalProducts:any;
  @Input() currentCategory:any;

}
