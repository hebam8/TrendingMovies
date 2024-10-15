import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';



@Component({
  selector: 'app-products',
  templateUrl: './prouduct.component.html',
  styleUrls: ['./prouduct.component.css']
})
export class ProductsComponent implements OnInit {
  productsDetails:any =''
  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {
    this._ProductsService.allProducts().subscribe({
      next:(response)=>{this.productsDetails=response.data
        console.log(response.data)} ,
      error:(err)=>console.log(err)


    })
  }

}
