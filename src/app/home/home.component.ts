import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  
}
export interface loanCard{
  title:string,
  image:string,
  summary:string
}