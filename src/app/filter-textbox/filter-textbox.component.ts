import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  template: `
    <input class="form-control mx-2 col-sm-10" type="text" [(ngModel)]="filter" />
  `
})
export class FilterTextboxComponent implements OnInit {

  private _filter : string;

  set filter(value : string){
    this._filter = value;
    console.log(value);
    this.changed.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

  @Output() changed = new EventEmitter<string>();

}
