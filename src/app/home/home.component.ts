import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _moviesServiec:MoviesService) { }
  searchItem:string='';
trendingMovies:any []=[];
trendingTV:any []=[];
trendingPeople:any []=[];
  ngOnInit(): void {
    this._moviesServiec.getTrending('movie').subscribe({
      next:(data) =>{
        this.trendingMovies= data.results.filter((data:any)=>data.profile_path !== null).slice(0,10)
      }})

    this._moviesServiec.getTrending('tv').subscribe({
      next:(data) =>{
        this.trendingTV= data.results.filter((data:any)=>data.profile_path !== null).slice(0,10)
      }})
    this._moviesServiec.getTrending('person').subscribe({
      next:(data) =>{
        this.trendingPeople=data.results.filter((data:any)=>data.profile_path !== null).slice(0,10)
      }
    })

  }

}
