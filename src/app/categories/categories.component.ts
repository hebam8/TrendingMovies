import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _CategoriesService:CategoriesService) { }
categoriesDetails:any=''
  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next:(response)=> {
        this.categoriesDetails=response.data
        console.log(response.data)},
      error:(err)=>console.log(err)


    })
  }

specificCategory(categoryID:string){
  this._CategoriesService.getSpecificCategories(categoryID).subscribe({
    next:(response)=> {
      console.log(response)},
    error:(err)=>console.log(err)
  })
}



}
