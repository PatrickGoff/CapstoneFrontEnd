import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-show-sellers',
  templateUrl: './show-sellers.component.html',
  styleUrls: ['./show-sellers.component.css']
})
export class ShowSellersComponent implements OnInit {
  Seller:any = [];

  constructor(private service: SharedService) { }

  modalTitle:string = '';
  activateAddEditSellComp:boolean = false;
  sell:any;
 
  ngOnInit(): void {
    
    
    this.refreshSeller();
  }

 
 
 
  refreshSeller(){
    this.service.GetSeller().subscribe(data =>{
      this.Seller = data;
      console.log(data);
      console.log(this.Seller);
    });
  }


 

  modalAdd(){
    this.sell ={
      id:0,
      name:null
     
     }
    
    this.modalTitle = "Add Seller";
    this.activateAddEditSellComp = true;
}

editModal(item){
  console.log(item);
  this.sell = item;
  this.modalTitle = "Edit Seller";
  this.activateAddEditSellComp = true;
}


modalClose(){
  this.activateAddEditSellComp = false;
  this.refreshSeller();
}

deleteClick(item){
  if(confirm('Are you sure?')){
    this.service.DeleteSeller(item.id).subscribe(data =>{
      console.log(data.toString());
      this.refreshSeller();
      alert("Seller deleted");
    });
  }
}
 
  
}