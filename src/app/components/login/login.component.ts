import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


public loginForm! :FormGroup|any
  isSubmitted  =  false;

  constructor(private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      username : new FormControl('',[Validators.maxLength(20),Validators.required,Validators.pattern('[a-zA-Z0-9]+')]),
      password : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$')])
    });
  }

  get username(){
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password')
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      alert("Invalid Form : Login Unsuccessful");
      return;
    }
    window.alert("Login Successfull")
    localStorage.setItem('username',this.loginForm.value.username)
    this.router.navigate(['/home'])
  
  }

}

