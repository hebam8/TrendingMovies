import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';
// import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-productdetails',
  templateUrl: './prouductdetailes.component.html',
  styleUrls: ['./prouductdetailes.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService) { }
productID:any;
productDetails:any;
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((param)=>{
    this.productID=param.get('id')

    })

    this._ProductsService.getProductDetails(this.productID).subscribe({
      next:(repo)=>{
       this.productDetails= repo.data
  }


    })
  }
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     }},
  //   nav: true
  // }

}
