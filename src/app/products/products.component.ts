import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Array<Product>;
  selectedProduct : Product;

  constructor() { }

  ngOnInit(): void {
    this.products = [
      { id:1, name: "xbox", stock:5, brandName: "Microsoft", categoryName: "consoles", price: 499 },
      { id:2, name: "Play Station 5", stock:3, brandName: "Sony", categoryName: "consoles", price: 599 },
      { id:3, name: "iPhone", stock:5, brandName: "Apple", categoryName: "mobile devices", price: 1200 }
    ]
  }

  onClick(product : Product) : void{
    this.selectedProduct = product;
  }

}
