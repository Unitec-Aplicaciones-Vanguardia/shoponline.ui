import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProduct : Product;

  constructor(private route : ActivatedRoute, private dataService : DataService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getProductById(id)
      .subscribe(
        (product : Product) => this.selectedProduct = product
      );
  }

  addToBasket(){
    this.dataService.addProductToBasket(this.selectedProduct)
      .subscribe(
        data => {
          alert('se agregó al carrito')
        }
      )
  }

}
