import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  categories : Array<Category>;

  constructor() { }

  ngOnInit(): void {
    this.categories = [
      {id: 0, name: "none"},
      {id: 1, name: "consoles"},
      {id: 2, name: "mobile devices"}
    ]
  }

  @Output() changed = new EventEmitter<number>();
  
  onChange(categoryId : number){
    console.log(categoryId);
    this.changed.emit(categoryId);
  } 
}
