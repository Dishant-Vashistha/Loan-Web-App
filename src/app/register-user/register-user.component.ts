import { RegisterService } from './../service/register.service';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  

  //use of Dependency Injection
  constructor(private router:Router,private HardcodedAuthenticationService:HardcodedAuthenticationService,private rs:RegisterService) { }
  
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
    if(this.HardcodedAuthenticationService.authenticate(this.signinForm.get('email').value,this.signinForm.get('password').value))
    {
      //Redirect to After-Login-Page
      this.router.navigate(['after-login']);
      return true;
    }
    else {
      this.inValidLogin=true;
      return false;}
  }
  
  formData: FormData = new FormData();
  
  onSubmit(){  
    /*this.formData.append("email", this.signupForm.get('email').value);
    this.formData.append("password", this.signupForm.get('password').value);
    this.formData.append("firstName", this.signupForm.get('firstName').value);
    this.formData.append("lastName", this.signupForm.get('lastName').value);
    this.formData.append("username", this.signupForm.get('username').value);
    this.formData.append("phone", this.signupForm.get('phone').value);
         
        this.rs.register(this.signupForm.value).subscribe(
          response=> console.log('success',response)
        );*/
        console.log(this.signupForm.value);
        return true;
  }



}

