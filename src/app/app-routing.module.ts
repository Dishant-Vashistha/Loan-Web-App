import { LoanRegisterComponent } from './loan-register/loan-register.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
    

    const routes: Routes = [
      {path:'' ,pathMatch:"full", component:HomeComponent },
      {path:'home' ,component:HomeComponent },
      {path:'about' ,component:AboutComponent },
      {path:'register-user' ,component:RegisterUserComponent },
      {path:'after-login' ,component:AfterLoginComponent },
      {path:'loan-register' ,component:LoanRegisterComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
