import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-inv',
  templateUrl: './show-inv.component.html',
  styleUrls: ['./show-inv.component.css']
})
export class ShowInvComponent implements OnInit {
  Inventory: any=[];


  constructor(private service:SharedService) { }

  ngOnInit(): void {

    this.refreshInventory();
  }

  refreshInventory(){
    this.service.GetInventory().subscribe(data =>{
      this.Inventory = data;
    });
  }

  modalTitle:string = '';
  activateAddEditInvComp:boolean=false;
  inv:any;

  modalAdd(){
    this.inv = {
      id:0,
      productid:0,
      quantity:0,
      reorder:0
    }
    this.modalTitle = "Add Inventory";
    this.activateAddEditInvComp = true;
  }

  modalClose(){
    this.activateAddEditInvComp = false;
    this.refreshInventory();

  }

  editClick(item){
    this.inv = item;
    this.modalTitle = "Edit Product";
    this.activateAddEditInvComp = true;
  }

  deleteClick(item){
    if(confirm("Are you sure?")){
      this.service.DeleteInventory(item.id).subscribe(data =>{
        console.log(data.toString());
        this.refreshInventory();
        alert("Inventory deleted!")
      });
    }
  }

}
