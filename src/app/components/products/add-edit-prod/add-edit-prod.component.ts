
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-add-edit-prod',
  templateUrl: './add-edit-prod.component.html',
  styleUrls: ['./add-edit-prod.component.css']
})
export class AddEditProdComponent implements OnInit {

  
 

  constructor(private service:SharedService) { }

  


@Input() prod:any;
id: number;
name:string;
desc:string;
sku: number;
categoryid: number;
price:number;
sellerid:number;


Product:any = [];
Category:any = [];
Seller:any = [];
  

  ngOnInit(): void {
  //  this.id = this.prod.id;
    this.name = this.prod.name;
    this.desc = this.prod.desc;
    this.sku = this.prod.sku;
    this.categoryid = this.prod.categoryid;
    this.price = this.prod.price;
    this.sellerid = this.prod.sellerid;
    this.refreshProduct();



     this.service.GetCategory().subscribe((category) =>{this.Category = category 
     console.log(this.Category);
  
    });

   //this.getService.getCategories().subscribe((category) =>(this.category = category));

    this.service.GetSeller().subscribe((seller) =>{this.Seller = seller 
      console.log(this.Seller);
     });
  }


  AddProduct(){
    var prod = {
     
  name:this.name,
  desc:this.desc,
  sku:this.sku,
  categoryid:this.categoryid,
  catg:{ id:0, name:"", desc:""},
  price:this.price,
  sellerid:this.sellerid,
  sell:{ id:0, name:""}
  
  
    };

    console.log(prod);
    this.service.AddProduct(prod).subscribe(res =>{
      console.log(res.toString());
      alert("Product added!")
    });
  }

  UpdateProduct(){
    var prod = {
  id:this.prod.id,  
  name:this.name,
  desc:this.desc,
  sku:this.sku,
  categoryID:this.categoryid,
  price:this.price,
  sellerID:this.sellerid,
  catg:{id:0, name:'', desc:''},
  sell:{id:0, name:''}
  
    };

    console.log(prod);
    this.service.UpdateProduct(prod).subscribe(res =>{
      console.log(res.toString());
      alert("Product Updated!")
    });
  }

  refreshProduct(){
     this.service.GetProduct().subscribe(data=>{
      this.Product = data;
    });
   }
  }
