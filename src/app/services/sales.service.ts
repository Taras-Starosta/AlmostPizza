import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Sale, Sales } from '../models/sales-model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  constructor(private http: HttpClient) { }

  public getSales(): Observable<Sale[]> {
    return this.http.get<Sales>('http://localhost:9000/sales/list').pipe(map(x => {return x.sales}));
  }
}