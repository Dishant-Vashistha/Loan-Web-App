import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { loanCard } from '../home/home.component';
@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {
  cards:loanCard[]=[];
  constructor() { 
    this.cards.push({
      title: 'Car Loan',
      image:' ../assets/cloan.png',
      summary:'We provide you car loan at cheaper rate of interest and less Documentation . Now Everyone will own a Car!!'
    });
    this.cards.push({
      title: 'Home Loan',
      image:"../assets/hloan.jpg",
      summary:'We provide you home Loans at very economical rates and less liability.Now Everyone will have their own home!'
    });
    this.cards.push({
      title: 'Education Loan',
      image:' ../assets/eloan.png',
      summary:'Money should not be a barrier in Education.We Provide you study loan at cheaper rates and less Documentation'
    });
  }

  ngOnInit(): void {
  }
  
  loan:number;
  rate:number;
  time:number;
  isValid:boolean=false;
  result:number=0;
  findLoan(){
    this.isValid=true;
    this.result=(this.loan)*Math.pow(((100+this.rate)/100),this.time);
    console.log(this.loan +" "+this.rate+" "+this.time);
  }

}
