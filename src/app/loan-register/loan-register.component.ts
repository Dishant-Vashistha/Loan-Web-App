import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-register',
  templateUrl: './loan-register.component.html',
  styleUrls: ['./loan-register.component.css']
})
export class LoanRegisterComponent implements OnInit {
  loanCards:LoanCard[]=[];
  constructor() { }
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



}
interface LoanCard{
  rate:number , 
  amount:number
}
