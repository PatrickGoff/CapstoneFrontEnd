
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-edit-prod',
  templateUrl: './add-edit-prod.component.html',
  styleUrls: ['./add-edit-prod.component.css']
})
export class AddEditProdComponent implements OnInit {

  Product$: Observable<any[]>;
  Category$: Observable<any[]>;
  Seller$: Observable<any[]>;

  constructor(private service:SharedService) { }

  


@Input() prod:any;
id: number = 0;
name:string = "";
desc:string = "";
sku: number = 0;
categoryID: number;
price:number = 0;
sellerID:number;

  ngOnInit(): void {
  this.id = this.prod.id;
  this.name = this.prod.name;
  this.desc = this.prod.desc;
  this.sku = this.prod.sku;
  this.categoryID = this.prod.categoryID;
  this.price = this.prod.price;
  this.sellerID = this.prod.sellerID;
  this.Product$ = this.service.GetProduct();
  this.Category$ = this.service.GetCategory();
  this.Seller$ = this.service.GetSeller();
  }

  AddProduct(){
    var prod = {
     
  name:this.name,
  desc:this.desc,
  sku:this.sku,
  categoryID:this.categoryID,
  price:this.price,
  sellerID:this.sellerID
    }
    this.service.AddProduct(prod).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert')
      if(showAddSuccess){
        showAddSuccess.style.display = 'block';
      }

      setTimeout(function() {
        if(showAddSuccess){
          showAddSuccess.style.display = "none"
        }
      },4000);
    })
  }



}
