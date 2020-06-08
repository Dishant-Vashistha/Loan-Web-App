import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  constructor() { 
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
