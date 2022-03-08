import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-show-catg',
  templateUrl: './show-catg.component.html',
  styleUrls: ['./show-catg.component.css']
})
export class ShowCatgComponent implements OnInit {

  Category$:any = [];

  constructor(private service: SharedService) { }

  modalTitle:string = '';
  activateAddEditCatgComp:boolean = false;
  catg:any;

  toggleModal = false;




  ngOnInit(): void {
   this.refreshCategory();
  }

  refreshCategory(){
    this.service.GetCategory().subscribe(data=>{
      this.Category$ = data;
    });
  }


  modalAdd(){
    this.catg ={
      id:0,
      name:null,
      desc:null
     
    }
    this.modalTitle = "Add Category";
    this.activateAddEditCatgComp = true;
  }


  modalClose(){
    this.activateAddEditCatgComp = false;
    this.refreshCategory();
  }

  editModal(item){
    console.log(item);
    this.catg = item;
    this.modalTitle = "Edit Category";
    this.activateAddEditCatgComp = true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.DeleteCategory(item.id).subscribe(data =>{
        console.log(data.toString());
        this.refreshCategory();
        alert("Category deleted!")
      });
    }
  }
  

}
