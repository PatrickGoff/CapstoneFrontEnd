import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ShowProdComponent } from './components/products/show-prod/show-prod.component';
import { AddEditProdComponent } from './components/products/add-edit-prod/add-edit-prod.component';
import { SharedService } from './components/shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditCatgComponent } from './components/categories/add-edit-catg/add-edit-catg.component';
import { ShowCatgComponent } from './components/categories/show-catg/show-catg.component';
import { SellersComponent } from './components/sellers/sellers.component';
import { AddEditSellersComponent } from './components/sellers/add-edit-sellers/add-edit-sellers.component';
import { ShowSellersComponent } from './components/sellers/show-sellers/show-sellers.component';

import { InventoriesComponent } from './components/inventories/inventories.component';
import { ShowInvComponent } from './components/inventories/show-inv/show-inv.component';
import { AddEditInvComponent } from './components/inventories/add-edit-inv/add-edit-inv.component';
import { LoginComponent } from './user/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AboutComponent } from './components/about/about.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './components/cart/cart.component';




   @NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    ShowProdComponent,
    AddEditProdComponent,
    AddEditCatgComponent,
    ShowCatgComponent,
    SellersComponent,
    AddEditSellersComponent,
    ShowSellersComponent,
    InventoriesComponent,
    ShowInvComponent,
    AddEditInvComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    RegisterComponent,
    NavBarComponent,
    FooterComponent,
    ProductPageComponent,
    AboutComponent,
    CategoryPageComponent,
    UserComponent,
    CartComponent,
 
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
