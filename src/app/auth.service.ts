import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData:any= new BehaviorSubject(null);

saveUserData(){
  let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
  let decodedToken:object= jwtDecode(encodedToken)
this.userData.next(decodedToken) ;
 console.log(this.userData._value);

}

  constructor(private _httpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem('userToken') != null){
      this.saveUserData();
    }
   }

signup(userData:object):Observable<any>{
 return  this._httpClient.post("https://movies-api.routemisr.com/signup/", userData)
}

signin(userData:object):Observable<any>{
  return  this._httpClient.post("https://movies-api.routemisr.com/signin/", userData)
 }
 signout(){
  localStorage.removeItem('userToken');
  this.userData.next(null);
  this._Router.navigate(['/login'])

 }
}
