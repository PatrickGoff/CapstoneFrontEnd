import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-add-edit-catg',
  templateUrl: './add-edit-catg.component.html',
  styleUrls: ['./add-edit-catg.component.css']
})
export class AddEditCatgComponent implements OnInit {

  Category: any = [];

  constructor(private service:SharedService) { }

  @Input() catg:any;
  
id: number = 0;
name:string = "";
desc:string = "";


  ngOnInit(): void {
    this.name = this.catg.name;
    this.desc = this.catg.desc;
    this.refreshCategory();
  }

  refreshCategory(){
    this.service.GetCategory().subscribe(data=>{
      this.Category = data;
    });
  }

  AddCategory(){
    var catg = {
     
  name:this.name,
  desc:this.desc
 
    };

    console.log(catg);
    this.service.AddCategory(catg).subscribe(res =>{
      console.log(res.toString());
      alert("Category Added!")
    });
  }

UpdateCategory(){
  this.service.UpdateCategory({id:this.catg.id,name:this.name,desc:this.desc}).subscribe(res =>{
    console.log(res.toString());
    alert("Category Updated!")
  });
  
}

  // UpdateCategory(){
  //   var catg = {
     
  // name:this.name,
  // desc:this.desc,
 
  //   };

  //   console.log(catg);
  //   this.service.UpdateCategory(catg).subscribe(res =>{
  //     console.log(res.toString());
  //   });
  // }


// editModal(item:any){
//   this.catg = item;
  // Update modal boolean to toggle to true for show modal @input()
  
}
  


