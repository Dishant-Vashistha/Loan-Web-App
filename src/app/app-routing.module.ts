import { LoanHistoryComponent } from './loan-history/loan-history.component';
import { LogoutComponent } from './logout/logout.component';
import { LoanRegisterComponent } from './loan-register/loan-register.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouteGuardService } from './service/route-guard.service';
    

    const routes: Routes = [
      {path:'' , component:HomeComponent },
      {path:'home' ,component:HomeComponent },
      {path:'about' ,component:AboutComponent },
      {path:'register-user' ,component:RegisterUserComponent },
      {path:'after-login' ,component:AfterLoginComponent,canActivate:[RouteGuardService]},
      {path:'loan-register' ,component:LoanRegisterComponent,canActivate:[RouteGuardService]},
      {path:'logout' ,component:LogoutComponent,canActivate:[RouteGuardService]},
      {path:'loanHistory' ,component:LoanHistoryComponent,canActivate:[RouteGuardService]}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
