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



   @NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    ShowProdComponent,
    AddEditProdComponent,
    AddEditCatgComponent,
    ShowCatgComponent,
    
    
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
