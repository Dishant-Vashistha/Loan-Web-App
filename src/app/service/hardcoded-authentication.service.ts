import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
 email:string='abc@gmail.com';
 password:string='123456';
  constructor(private http:HttpClient) { }
  _url='http://localhost:8080/newUser';
  authenticate(email:string,password:string){
     if(email===this.email && password===this.password){
            
      sessionStorage.setItem('authenticatedUser',email);

            return true;
     }
     else return false;
     
      var formData:FormData=new FormData();
      formData.append('email',email);
      formData.append('password',password);
      let res=this.http.post(this._url,formData);
      
      res.subscribe(response=>{
        if(response===true){
          sessionStorage.setItem('authenticatedUser',email);
          return true;
        }else return false
      },error=>{
        console.log("hi"+error);
        return false
      })


      return false;
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser');
    
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
