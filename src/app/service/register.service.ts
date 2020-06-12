import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  _url = 'http://localhost:8080/newUser'

  constructor(private http:HttpClient) { }

  register(userData:FormData):boolean{
    //it will return an observable
    try{
    this.http.post(this._url,userData,{responseType:'text' as 'json'}).subscribe(
      response=>{ return true;},
      error=> {return false;}
    );
    }catch(err){
      return false;
    }
  }
}
