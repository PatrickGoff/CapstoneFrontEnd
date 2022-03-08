import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';





@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.css']
})
export class ShowProdComponent implements OnInit {

Product:any=[];
Seller:any=[];
Category:any=[];


//Will create Map later




  constructor(private service:SharedService) { }

  ngOnInit(): void {
     
   
    this.refreshProduct();
  
  }


refreshProduct(){
  this.service.GetProduct().subscribe(data =>{
    this.Product = data;
  });
}


  // refreshCategoryKeyMap(){
  //   this.service.GetCategory().subscribe(data => {
  //     this.Category = data;

  //     for(let i = 0; i < data.length; i++){
  //       this.CategoryKeyMap.set(this.Category[i].id, this.Category[i].
  //         name);
  //     }
  //   })
  // }

  // refreshSellerKeyMap(){
  //   this.service.GetSeller().subscribe(data => {
  //     this.Seller = data;

  //     for(let i = 0; i < data.length; i++){
  //       this.SellerKeyMap.set(this.Seller[i].id, this.Seller[i].
  //         name);
  //     }
  //   })
  // }

  modalTitle:string = '';
  activateAddEditProdComp:boolean = false;
  prod:any;


  modalAdd(){
    this.prod ={
      id:0,
      name:"",
      desc:"",
      sku:0,
      categoryid:0,
      price:0,
      sellerid:0
    }
    this.modalTitle = "Add Product";
    this.activateAddEditProdComp = true;
  }


  modalClose(){
    this.activateAddEditProdComp = false;
    this.refreshProduct();
  }

  editClick(dataitem){
    this.prod = dataitem;
    this.modalTitle = "Edit Product";
    this.activateAddEditProdComp = true;
  }

  deleteClick(dataitem){
    if(confirm('Are you sure?')){
      this.service.DeleteProduct(dataitem.id).subscribe(data =>{
        console.log(data.toString());
        this.refreshProduct();
        alert("Product deleted!")
      });
    }
  }
  
  


}  
 
  


  


