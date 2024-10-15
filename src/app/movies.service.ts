import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient:HttpClient) { }

  getTrending(media_Type:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${media_Type}/week?api_key`)
  }
  getSimilar(id:string, media_Type:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/${media_Type}/${id}/similar?api_key`)
  }
  getItemDetails(id:string, mediaType:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key`)
  }

  
}
