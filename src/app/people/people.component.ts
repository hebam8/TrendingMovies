import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class MoviedetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { }
  item:any;
  mediaType:string='';
  semilarData:any []=[];
  ngOnInit(): void {
  let {id, media_type}=  this._ActivatedRoute.snapshot.params
  this.mediaType=media_type;
  console.log(id);
  console.log(media_type);


  this._MoviesService.getItemDetails(id, media_type).subscribe({
    next:(data)=>{
this.item=data
    }
  })

  this._MoviesService.getSimilar(id, media_type).subscribe({
    next:(data)=>{
      this.semilarData=data.results

    }
  })}

 getSemiar(id:string, media_type:string){
  this._MoviesService.getSimilar(id, media_type).subscribe({
    next:(data)=>{
      this.semilarData=data.results

  },


  })
  this._MoviesService.getItemDetails(id, media_type).subscribe({
    next:(data)=>{
this.item=data
    }
  })


  }



}
