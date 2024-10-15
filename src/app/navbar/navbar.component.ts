import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLoading:boolean=false
  constructor(private _AuthService:AuthService ) { }

  ngOnInit(): void {

    this._AuthService.userData.subscribe({
      next:()=>{
        if (this._AuthService.userData.getValue() != null){

          this.isLoading=true
        }
        else
        {
          this.isLoading=false
        }
      }
    })

  }


  logOut(){
    this._AuthService.signout();
  }}
