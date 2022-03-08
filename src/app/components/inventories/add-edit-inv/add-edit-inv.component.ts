import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-inv',
  templateUrl: './add-edit-inv.component.html',
  styleUrls: ['./add-edit-inv.component.css']
})
export class AddEditInvComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input()inv:any;
  id:number;
  ProductID:number;
  quantity:number;
  reorder:number;

  Inventory:any = [];
  Product:any = [];


  ngOnInit(): void {
    this.ProductID = this.inv.ProductID;
    this.quantity = this.inv.quantity;
    this.reorder = this.inv.reorder;
    this.refreshInventory();

    this.service.GetProduct().subscribe((category) =>{this.Product= category 
      console.log(this.Product);
    
     });
  }


  AddInventory(){
    var inv ={
      ProductID:this.ProductID,
      quantity:this.quantity,
      reorder:this.reorder,
      prod:{id:0,name:'',desc:'',sku:0,categoryID:0,price:0,sellerID:0}
    };

    console.log(inv);
    this.service.AddInventory(inv).subscribe(res =>{
      console.log(res.toString());
      alert("Inventory added!")
    });
  }

  UpdateInventory(){
    var inv ={
      ProductID:this.ProductID,
      quantity:this.quantity,
      reorder:this.reorder,
      prod:{id:0,name:'',desc:'',sku:0,categoryID:0,price:0,sellerID:0}
    };

    console.log(inv);
    this.service.UpdateInventory(inv).subscribe(res =>{
      console.log(res.toString());
      alert("Inventory updated!")
    });
  }

  refreshInventory(){
    this.service.GetInventory().subscribe(data=>{
      this.Product = data;
    });
  }

}
