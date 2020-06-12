import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  _url = 'http://localhost:8080/newUser'

  constructor(private http:HttpClient) { }

  register(userData){
    //it will return an observable
    return this.http.post(this._url,userData,{responseType:'text' as 'json'});
  }
}
