import { Component } from '@angular/core';
import { Product } from 'src/app/models/products-model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent {
  public data: Product[] = [];

  constructor(public productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts(); 
  }

  private getAllProducts(): void {
    this.productsService.getProducts().subscribe(products => {
      this.data = products;
      //console.log(products);
    });
  }
}
