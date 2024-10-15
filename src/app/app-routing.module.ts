import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategoriesdetailsComponent } from './categoriesdetails/categoriesdetails.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import {  BrandsComponent } from './brand/brand.component';
import { BranddetailsComponent } from './branddetails/branddetails.component';
import { ProductdetailsComponent } from './prouductdetailes/prouductdetailes.component';
import { ProductsComponent } from './prouduct/prouduct.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard] , component:HomeComponent},
  {path:'about',  canActivate:[AuthGuard] , component:AboutComponent},
  {path:'branddetails/:id',  canActivate:[AuthGuard] , component:BranddetailsComponent},
  {path:'brand',  canActivate:[AuthGuard] , component:BrandsComponent},
  {path:'cart',  canActivate:[AuthGuard] , component:CartComponent},
  {path:'categories',  canActivate:[AuthGuard] , component:CategoriesComponent},
  {path:'categoriesdetails/:id',  canActivate:[AuthGuard] , component:CategoriesdetailsComponent},
  {path:"products",  canActivate:[AuthGuard], component:ProductsComponent},
  {path:"productdetails/:id",  canActivate:[AuthGuard], component:ProductdetailsComponent},
  {path:'checkout',  canActivate:[AuthGuard] , component:CheckoutComponent},
  {path:'footer',canActivate:[AuthGuard] ,  component:FooterComponent},
  {path:'navbar', canActivate:[AuthGuard] , component:NavbarComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
