import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-add-edit-sellers',
  templateUrl: './add-edit-sellers.component.html',
  styleUrls: ['./add-edit-sellers.component.css']
})
export class AddEditSellersComponent implements OnInit {

  Seller$:any = [];

  constructor(private service:SharedService) { }

  activateAddEditSellComp:boolean = false;

  @Input() sell:any;
id: number;
name:string ;

  ngOnInit(): void {
    this.name = this.sell.name;
   this.refreshSellers();

  }

  refreshSellers(){
    this.service.GetSeller().subscribe(data=>{
      this.Seller$ = data;
    });
  }


  AddSeller(){
    var sell= {
  id:this.id, 
  name:this.name
  
    };

    console.log(sell);
    this.service.AddSeller(sell).subscribe(res =>{
      console.log(res.toString());
      alert("Seller Added!")
    });
    
  }

 UpdateSeller(){
  //   var sell= {
  // id:this.sell.id, 
  // name:this.name
  
  //   };

    
    this.service.UpdateSeller({id:this.sell.id,name:this.name}).subscribe(res =>{
      console.log(res.toString());
      alert("Seller Updated!")
    });
    
  }

}
