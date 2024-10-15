import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ApikeyInterceptor } from './apikey.interceptor';
import { SearchbynamePipe } from './searchbyname.pipe';
import { CartComponent } from './cart/cart.component';
import {  BrandsComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesdetailsComponent } from './categoriesdetails/categoriesdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './prouduct/prouduct.component';
import { ProductdetailsComponent } from './prouductdetailes/prouductdetailes.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,

    NavbarComponent,
    NotfoundComponent,

    RegisterComponent,



    SearchbynamePipe,
    CartComponent,
    BrandsComponent,
    CategoriesComponent,
    CategoriesdetailsComponent,
    CheckoutComponent,
    ProductsComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:ApikeyInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
