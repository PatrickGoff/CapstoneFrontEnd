import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SellersComponent } from './components/sellers/sellers.component';
import { InventoriesComponent } from './components/inventories/inventories.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
{path:'products',component:ProductsComponent},
{path:'categories',component:CategoriesComponent},
{path:'sellers',component:SellersComponent},
{path:'inventories',component:InventoriesComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'admin',component:AdminComponent},
{path:'home', component:HomeComponent},

{path:'product_page', component:ProductPageComponent},
{path:'category_page', component:CategoryPageComponent},
{path:'about',component:AboutComponent},
{path: 'cart',component:CartComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
