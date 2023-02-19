import { Component, HostListener } from '@angular/core';
import { Product } from 'src/app/models/products-model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent {
  public data: Product[] = [];
  public errorForUser!: string;
  public imgPath: string = "../../../assets/products-images/";
  public gridColumns!: number;
  public scrWidth: any;
  
  constructor(public productsService: ProductsService) { this.getScreenSize(); }
  
  @HostListener('window:resize', ['$event'])
  
  getScreenSize() {
    this.scrWidth = window.innerWidth;
    if (this.scrWidth <= 880) { this.gridColumns = 2; }
    else if (this.scrWidth <= 1300) { this.gridColumns = 3; } else { this.gridColumns = 4; }
    console.log(this.scrWidth);
  }
  
  ngOnInit(): void { this.getAllProducts(); }
  
  private getAllProducts(): void {
    this.productsService.getProducts().subscribe(products => {
      this.data = products;
    }, error => { this.errorForUser = error; });
  }
}