import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.css']
})
export class ShowProdComponent implements OnInit {

Product$:Observable<any[]>;
Category$:Observable<any[]>;
Category:any=[];
InventoryList$:Observable<any[]>;
Cart_ItemList$:Observable<any[]>;
Product_SoldList$:Observable<any[]>;
Seller$:Observable<any[]>;
Seller:any=[];


//Will create Map later

CategoryKeyMap:Map<number, string> = new Map()
SellerKeyMap:Map<number, string> = new Map()


  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.Product$ = this.service.GetProduct();
    this.Category$ = this.service.GetCategory();
    this.Seller$ = this.service.GetSeller();
    this.refreshCategoryKeyMap();
    this.refreshSellerKeyMap();
  }





  refreshCategoryKeyMap(){
    this.service.GetCategory().subscribe(data => {
      this.Category = data;

      for(let i = 0; i < data.length; i++){
        this.CategoryKeyMap.set(this.Category[i].id, this.Category[i].
          name);
      }
    })
  }

  refreshSellerKeyMap(){
    this.service.GetSeller().subscribe(data => {
      this.Seller = data;

      for(let i = 0; i < data.length; i++){
        this.SellerKeyMap.set(this.Seller[i].id, this.Seller[i].
          name);
      }
    })
  }

  modalTitle:string = '';
  activateAddEditProdComp:boolean = false;
  prod:any;


  modalAdd(){
    this.prod ={
      id:0,
      name:null,
      desc:null,
      sku:null,
      categoryID:null,
      price:null,
      sellerID:null
    }
    this.modalTitle = "Add Product";
    this.activateAddEditProdComp = true;
  }


  modalClose(){
    this.activateAddEditProdComp = false;
    this.Product$ = this.service.GetProduct();
  }
  
}  
 
  


  


