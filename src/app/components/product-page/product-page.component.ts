import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  Product: any =[];
  Category: any = [];

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.service.GetProduct()
    .subscribe(res =>{

      this.Product = res;
    })


    }

}
