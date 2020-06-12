import { RegisterService } from './../service/register.service';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  

  //use of Dependency Injection
  constructor(private router:Router,private hs:HardcodedAuthenticationService,private rs:RegisterService) { }
  
  errorMessage:string="Invalid Login Credentials.";

  signupForm:FormGroup;
  signinForm:FormGroup;
  ngOnInit(): void {
    this.signupForm=new FormGroup({
       'username' : new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z0-9_]*$"),Validators.minLength(5)]),
       'firstName': new FormControl(null,[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
       'lastName': new FormControl(null,[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
       'phone': new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
       'email' :  new FormControl(null,[Validators.required,Validators.email]),
       'password': new FormControl(null,[Validators.required,Validators.minLength(6)])
    });
    this.signinForm=new FormGroup({
      'email' :  new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(20)])
   });
  }

  inValidLogin:boolean =false;

  handleLogin():boolean{
    if(this.hs.authenticate(this.signinForm.get('email').value,this.signinForm.get('password').value))
    {
      //Redirect to After-Login-Page
      this.router.navigate(['after-login']);
      return true;
    }
    else {
      this.inValidLogin=true;
      return false;}
  }
  
  
  
  onSubmit(){  
    let formData: FormData = new FormData();
    formData.append("email", this.signupForm.get('email').value);
    formData.append("password", this.signupForm.get('password').value);
    formData.append("firstName", this.signupForm.get('firstName').value);
    formData.append("lastName", this.signupForm.get('lastName').value);
    formData.append("username", this.signupForm.get('username').value);
    formData.append("phone", this.signupForm.get('phone').value);
        
        
     let result:boolean = this.rs.register(formData);
     
     if(result==true){
       alert("User Registered SuccessFully!! Now You can SignIn");
     }
     else{
       alert("UserName already Exists!!")
     }
  }



}

