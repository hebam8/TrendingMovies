import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brand.service';



@Component({
  selector: 'app-brands',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private _BrandsService:BrandsService ) { }
brandsDetails:any=''
  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next:(response)=>{this.brandsDetails=response.data
        console.log(response.data)} ,
      error:(err)=>console.log(err)


    })
  }


}
