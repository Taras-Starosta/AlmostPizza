import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesInterface } from '../../interfaces/sales-interface';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.sass']
})
export class SalesListComponent {
  result: SalesInterface[] = [];
  currentIndex: number = 0;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http
      .get<SalesInterface[]>('../../../assets/data.json')
      .subscribe((response) => {
        this.result = response;
      });
  }

  changeShowcase(i: number) {
    this.resetValues();
    this.result[i].status = true;
  }

  nextBook() {
    this.getCurrentIndex();
    this.resetValues();
    this.currentIndex++;
    this.currentIndex > this.result.length - 1 ? (this.currentIndex = 0) : '';
    this.result[this.currentIndex].status = true;
  }

  prevBook() {
    this.getCurrentIndex();
    this.resetValues();
    this.currentIndex > 0
      ? this.currentIndex--
      : (this.currentIndex = this.result.length - 1);
    this.result[this.currentIndex].status = true;
  }

  getCurrentIndex() {
    for (var i = 0; i < this.result.length; i++) {
      if (this.result[i].status) {
        this.currentIndex = i;
      }
    }
  }

  resetValues() {
    for (var index = 0; index < this.result.length; index++) {
      this.result[index].status = false;
    }
  }

}
