import { loanCard } from './../home/home.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-register',
  templateUrl: './loan-register.component.html',
  styleUrls: ['./loan-register.component.css']
})
export class LoanRegisterComponent implements OnInit {
  loanCards:LoanCard[]=[];

  constructor() { }

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
  }

}
interface LoanCard{
  rate:number , 
  amount:number
}
