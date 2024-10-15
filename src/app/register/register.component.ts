import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private _authService:AuthService , private _router:Router) { }




registerForm:FormGroup= new FormGroup ({
  first_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(90)]),
  last_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(90)]),
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]/)]),
  age: new FormControl(null,[Validators.required,Validators.min(3),Validators.max(80)]),

})
isLoading:boolean=false;
errorMsg:string = ''
submitRegisterForm(registerForm:FormGroup){
  this.isLoading=false;
this._authService.signup(registerForm.value).subscribe({

  next: (response) =>{
    this.isLoading=true;
    if (response.message === "success"){
      this._router.navigate(['/login'])
    }
    else{
this.errorMsg=response.message
    }
  }
})

}


  ngOnInit(): void {
  }

}
