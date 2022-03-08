import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIURL = "https://localhost:7294/api";
  constructor(private http:HttpClient) { }

 //Authoriazation

 
 
 
 
 
  //Product Table

  GetProduct():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Products');
  }

  GetProductByID():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Products/');
  }


  AddProduct(val:any){

    return this.http.post(this.APIURL + '/Products', val);
  }

  UpdateProduct(val:any){

    return this.http.put(this.APIURL + '/Products', val);
  }

  DeleteProduct(val:any){

    return this.http.delete(this.APIURL + '/Products/' + val);
  }

  //Category Table


  GetCategory():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Categories');
  }

  GetCategoryByID():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Categories/');
  }

  AddCategory(val:any){

    return this.http.post(this.APIURL+ '/Categories', val);
  }

  UpdateCategory(val:any){

    return this.http.put(this.APIURL+ '/Categories',val);
  }

  DeleteCategory(val:any){

    return this.http.delete(this.APIURL+ '/Categories/' + val);
  }

  //Cart Item Table


  GetCart_Item():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Cart_Items');
  }

  GetCart_ItemByID():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Cart Items/{id}');
  }

  AddCart_Item(val:any){

    return this.http.post(this.APIURL+ '/Cart_Items', val);
  }

  UpdateCart_Item(val:any){

    return this.http.put(this.APIURL+ '/Cart_Items',val);
  }

  DeleteCart_Item(val:any){

    return this.http.delete(this.APIURL+ '/Cart_Items/{id}' + val);
  }


  //Seller Table

  GetSeller():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Sellers');
  }

  GetSellerByID():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Sellers/');
  }

  AddSeller(val:any){

    return this.http.post(this.APIURL+ '/Sellers', val);
  }

  UpdateSeller(val:any){
console.log(val);
    return this.http.put(this.APIURL+ '/Sellers',val);
  }

  DeleteSeller(val:any){

    return this.http.delete(this.APIURL+ '/Sellers/' + val);
  }

  // Inventory Table

  GetInventory():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Inventories');
  }

  GetInventoryByID():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Inventories/');
  }

  AddInventory(val:any){

    return this.http.post(this.APIURL+ '/Inventories', val);
  }

  UpdateInventory(val:any){

    return this.http.put(this.APIURL+ '/Inventories',val);
  }

  DeleteInventory(val:any){

    return this.http.delete(this.APIURL+ '/Inventories/' + val);
  }

  // Product Sold Table

  GetProductSold():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Product_Sold');
  }

  GetProductSoldByID():Observable<any[]>{

    return this.http.get<any>(this.APIURL+ '/Product_Sold/{id}');
  }

  AddProductSold(val:any){

    return this.http.post(this.APIURL+ '/Product_Sold', val);
  }

  UpdateProductSold(val:any){

    return this.http.put(this.APIURL+ '/Product_Sold',val);
  }

  DeleteProductSold(val:any){

    return this.http.delete(this.APIURL+ '/Product_Sold/' + val);
  }









}
