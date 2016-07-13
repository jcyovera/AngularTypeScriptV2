import { Component, OnInit } from '@angular/core';
import { Product, ProductService} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers:[ProductService]
})
export class HomeComponent implements OnInit {
  products:Product[];
  errorMessage:string;
  constructor(
    private _productService:ProductService
  ) {}

  ngOnInit() {
    /*this._productService.getProducts()
    .then(data=>this.products=data.slice(0,5));*/
    this._productService.getProducts()
    .subscribe(
      dataProducts=>this.products=dataProducts,
      error=>this.errorMessage = <any>error
    );
  }

}
