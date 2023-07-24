import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData:any = new BehaviorSubject(null);


  constructor(private _httpClient:HttpClient ,private _router:Router ) {
    if (localStorage.getItem('userToken') != null){
      this.saveUserData();
    }
   }
 saveUserData(){
 let encodedToken=JSON.stringify( localStorage.getItem('userToken'));
 let decodedToken: object = jwtDecode(encodedToken);
  this.userData.next(decodedToken);
 }

signOut(){
  localStorage.removeItem('userToken');
  this.userData.next(null);
  this._router.navigate(['/login'])

}

signUp(userData:object):Observable<any> {
  return this._httpClient.post('https://movies-api.routemisr.com/signup/', userData )
}
signIn(userData:object):Observable<any> {
  return this._httpClient.post('https://movies-api.routemisr.com/signin/', userData )
}

}
