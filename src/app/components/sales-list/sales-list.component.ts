import { Component } from '@angular/core';
import { SalesModel } from 'src/app/models/sales-model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.sass']
})
export class SalesListComponent {
  
  public salesModel: SalesModel[] = [];

  constructor(public salesService: SalesService) {}

  ngOnInit(): void {
    this.getAllSales(); 
  }

  private getAllSales(): void {
    this.salesService.getSales()
    .subscribe(sales => {
      this.salesModel = sales;
      console.log(sales);
    });
  }

}
