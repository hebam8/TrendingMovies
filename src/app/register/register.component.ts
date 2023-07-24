import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
isLoading:boolean=false;
  registerForm:FormGroup = new FormGroup ({
    first_name: new FormControl (null, [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    last_name:new FormControl (null, [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    age:new FormControl (null, [Validators.min(16), Validators.max(90), Validators.required]),
    email:new FormControl (null, [Validators.email, Validators.required]),
   password:new FormControl (null, [Validators.pattern(/^[A-Z]/)])
  })

  constructor(private _authService:AuthService , private _router:Router) { }
error:string='';

  submitRegisterForm(registerForm:FormGroup){
  this.isLoading= true;
    console.log('hi');
    
    this._authService.signUp(registerForm.value).subscribe({
      next:(response) => {
        this.isLoading= false;
        if (response.message === 'success') {
          console.log('success');
          this._router.navigate(['/login']);
        }else {
           this.error=response.message;}  
}})}
  ngOnInit(): void {
  }

}
