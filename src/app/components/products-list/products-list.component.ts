import { Component } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
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
  public imgPath: string = "../../../assets/sales-images/";

  constructor(public productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts(); 
  }

  private getAllProducts(): void {
    this.productsService.getProducts().subscribe(products => {
      this.data = products;
      //console.log(products);
    }, error => {
      this.errorForUser = error;
    });
  }
}