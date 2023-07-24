import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 isLogin:boolean=false;
  constructor( private _authService:AuthService) { }

  ngOnInit(): void {
 this._authService.userData.subscribe({
  next:()=> {
    if (this._authService.userData.getValue() != null ) {
      this.isLogin = true
    }
    else {
      this.isLogin=false
    }
  }}
 )
  }

  logOut(){
    this._authService.signOut();
  }

}
