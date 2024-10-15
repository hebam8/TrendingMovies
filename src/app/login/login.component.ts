import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService:AuthService , private _router:Router) { }



  loginForm:FormGroup= new FormGroup ({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]/)]),


  })
  isLoading:boolean=false;
  errorMsg:string = ''
  submitLoginForm(login:FormGroup){
    this.isLoading=false;
  this._authService.signin(login.value).subscribe({

    next: (response) =>{

      this.isLoading=true;
      if (response.message === "success"){
        localStorage.setItem('userToken', response.token)
       this._authService.saveUserData();

        this._router.navigate(['/home'])
      }
      else{
  this.errorMsg=response.message
      }
    }
  })

  }


  ngOnInit(): void {

    this._authService.userData.subscribe({
      next:()=>{
        if (this._authService.userData.getValue() != null){
          this._router.navigate(['/home'])
          this.isLoading=true
        }
        else
        {
          this.isLoading=false
        }
      }
    })

  }}

