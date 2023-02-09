import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesModel } from '../models/sales-model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private _httpClient: HttpClient) { }

  public getSales(): Observable<SalesModel[]> {
    return this._httpClient.get<SalesModel[]>('http://localhost:9000/sales/list');
  }
}
