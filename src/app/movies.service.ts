import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

getMovieTrending(media_type:string):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media_type}/week?api_key=3cd8b56ef542810e4ef2740a0a5dd4df`)
}

getItemDetails(id:string, mediaType:string):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=3cd8b56ef542810e4ef2740a0a5dd4df`)
}
getSimilar(id:string, media_Type:string):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/${media_Type}/${id}/similar?api_key=3cd8b56ef542810e4ef2740a0a5dd4df`)
}

}
