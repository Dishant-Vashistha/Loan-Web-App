import { LoanService } from './../service/loan-service.service';
import { loanCard } from './../home/home.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { loanUser } from '../model/model';

@Component({
  selector: 'app-loan-register',
  templateUrl: './loan-register.component.html',
  styleUrls: ['./loan-register.component.css']
})
export class LoanRegisterComponent implements OnInit {
  loanCards:LoanCard[]=[];
  constructor(private ls:LoanService) { }
  registerForm:FormGroup;
  ngOnInit(): void {
    this.loanCards.push({
       rate:14.75,
       amount:1
    });
    this.loanCards.push({
      rate:12.75,
      amount:5
   });
   this.loanCards.push({
    rate:10.75,
    amount:10
    });
    this.registerForm =new FormGroup({
      'amount' : new FormControl(null,[Validators.required,Validators.pattern("[0-9]*")]),
      'rate': new FormControl(null,[Validators.required,Validators.pattern("[0-9]*")]),
      'time': new FormControl(null,[Validators.required,Validators.pattern("[0-9]*")]),
      'monthlySavings': new FormControl(null,[Validators.required,Validators.pattern("[0-9]*")])
   });

  }

  onSubmit(){
    let user:loanUser={
      loanAmount:this.registerForm.get('amount').value,
      rate:this.registerForm.get('rate').value,
      time:this.registerForm.get('time').value,
      savings:this.registerForm.get('monthlySavings').value,
    }

     let ans:Boolean = this.ls.loanRegister(user) ;

     if(ans===true){
       alert("You have succesfull Applied for the loan");
     }
     else{
      alert("Loan is not Accepted");
     }

  }



}
interface LoanCard{
  rate:number , 
  amount:number
}
