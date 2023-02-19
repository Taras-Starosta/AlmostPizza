import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { Product, Products } from '../models/products-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code
      // The response body may contain clues as to what went wrong
      console.error(`Backend returned code ${ error.status }, body was: `, error.error);
    }
    // Return an observable with a user-facing error message
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  // Real GET
  //public getProducts(): Observable<Product[]> {
  //  return this.http.get<Products>('http://localhost:9000/products/list').pipe(map(x => {return x.products}), catchError(this.handleError));
  //}
  // Fake GET
  public getProducts(): Observable<Product[]> {
    return this.http.get<Products>('../../assets/productsDB.json').pipe(map(x => { return x.products }), catchError(this.handleError));
  }
}
