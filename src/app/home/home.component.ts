import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
trendingMovie:any[]=[];
trendingTv:any[]=[];
trendingPeople:any[]=[]
  ngOnInit(): void {
this._MoviesService.getMovieTrending('movie').subscribe({
  next:(data)=>{
     this.trendingMovie=data.results.filter((data:any)=>data.profile_path !== null).slice(0,10)
  }
})

this._MoviesService.getMovieTrending('tv').subscribe({
  next:(data)=>{
     this.trendingTv=data.results.filter((data:any)=>data.profile_path !== null).slice(0,10)
  }
})

this._MoviesService.getMovieTrending('person').subscribe({
  next:(data)=>{
     this.trendingPeople=data.results.filter((data:any)=>data.profile_path !==null).slice(0,10)
  }
})

  }




}
