import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  email:string='abc@gmail.com';
  password:string='123456';
  constructor() { }

  authenticate(email,password){
     if(email===this.email && password===this.password){
            
      sessionStorage.setItem('authenticatedUser',email);

            return true;
     }
     else return false;
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser');
    
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
