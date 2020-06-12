import { HttpClient } from '@angular/common/http';
import { loanUser } from './../model/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) { }
  url1='http://localhost:8080/newUser';
  loanRegister(user:loanUser):Boolean{
      try{
        this.http.post(this.url1,user).subscribe(response=>{
              return true
        },error=>{
          return false
        })
      }catch(err){
        return false
      }
  }
}
