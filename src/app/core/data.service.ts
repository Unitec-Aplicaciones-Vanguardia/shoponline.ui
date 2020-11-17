import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = "https://localhost:44319";
  constructor(private httpClient : HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/api/products`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProductsById(id : number) : Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/api/products/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error : any){
    console.error('server error:', error);
    if(error.error instanceof Error){
      const errorMessage = error.error.message;
      return Observable.throw(errorMessage);
    }

    return Observable.throw(error || 'Server error');
  }
}
