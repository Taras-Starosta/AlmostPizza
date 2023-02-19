import { Component } from '@angular/core';
import { Sale } from 'src/app/models/sales-model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.sass']
})
export class SalesListComponent {
  public data: Sale[] = [];
  public errorForUser!: string;
  public imgPath: string = "../../../assets/sales-images/";
  public keyboard = true;
  public pauseOnHover = true;
	public pauseOnFocus = true;
  
  constructor(public salesService: SalesService) {}
  
  ngOnInit(): void { this.getAllSales(); }
  
  private getAllSales(): void {
    this.salesService.getSales().subscribe(sales => {
      this.data = sales;
    }, error => { this.errorForUser = error; });
  }
}
