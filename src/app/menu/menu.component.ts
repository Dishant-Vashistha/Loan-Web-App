import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService) { }
  
  //loginStatus:boolean =false;

  ngOnInit(): void {
    
  }
  
  loginStatus(){
    return this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
