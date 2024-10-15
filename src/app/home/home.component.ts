import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { CartService } from '../carts.service';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _ProductsService:ProductsService, private _CartService:CartService) { }

addToCart(productId:string){
  return this._CartService.addToCart(productId).subscribe({
    next:(response:any)=>{
      this._CartService.numberOfCartItem.next(response.numOfCartItems)
console.log(response)}
 ,
    error:(err:any)=>{
console.log(err);

    }
  })

}


products:any []=[];
  ngOnInit(): void {
 this._ProductsService.allProducts().subscribe({
  next:(response)=>{
  this.products=response.data
  console.log(response.data);

  }
 })
  }

}
