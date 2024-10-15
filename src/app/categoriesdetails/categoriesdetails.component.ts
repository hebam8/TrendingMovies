import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categoriesdetails',
  templateUrl: './categoriesdetails.component.html',
  styleUrls: ['./categoriesdetails.component.css']
})
export class CategoriesdetailsComponent implements OnInit {

  constructor(private _CategoriesService:CategoriesService, private _ActivatedRoute:ActivatedRoute) { }
  categoryDetails:any='';
  categoryID:any=''
  ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((param)=>{
    this.categoryID=param.get('id')
  })
  this._CategoriesService.getSpecificCategories(this.categoryID).subscribe({
    next:(response)=>{this.categoryDetails=response.data
      console.log(response.data)},
    error:(err)=>  console.log(err)

 })
  }

//   specificCategory(){
//     this._CategoriesService.getSpecificCategories(categoryID).subscribe({
//       next:(response)=> {
//         console.log(response)},
//       error:(err)=>console.log(err)
//     })
// }
}
