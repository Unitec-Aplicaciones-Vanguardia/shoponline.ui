import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Array<Product>;
  filteredProducts : Array<Product>;
  selectedProduct : Product;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getProducts()
      .subscribe(
        (products : Product[]) => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error => console.log(error)
      )
  }

  filter(productName : string){
    if(productName){
      this.filteredProducts = this.products.filter((product : Product) => product.name.toLowerCase().indexOf(productName.toLowerCase()) > -1);
    }else{
      this.filteredProducts = this.products;
    }
  }

  filterCategory(categoryId : number){
    if(categoryId == 0){
      this.filteredProducts = this.products;
    }else{
      this.filteredProducts = this.products.filter((product : Product) => product.categoryId == categoryId);
    }
  }

  onClick(product : Product) : void{
    this.selectedProduct = product;
  }

}
