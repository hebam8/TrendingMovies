import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private _MoviesServicee:MoviesService , private _ActivatedRoute:ActivatedRoute) { }
  item:any;
  mediaType:string='';
  semilarData:any []=[];
  ngOnInit(): void {


    let {id, media_type}=  this._ActivatedRoute.snapshot.params
   this.mediaType=media_type;
 console.log(id);
  console.log(media_type);


  this._MoviesServicee.getItemDetails(id, media_type).subscribe({
    next:(data)=>{
 this.item=data
    }
   })


   this._MoviesServicee.getSimilar(id, media_type).subscribe({
   next:(data)=>{
     this.semilarData=data.results

    }
  })}



  getSemiar(id:string, media_type:string){
   this._MoviesServicee.getSimilar(id, media_type).subscribe({
    next:(data)=>{
     this.semilarData=data.results
 },
})

   this._MoviesServicee.getItemDetails(id, media_type).subscribe({
    next:(data)=>{
this.item=data
  } })}


   }






