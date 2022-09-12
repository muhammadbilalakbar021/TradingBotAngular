import { SecuritycodeComponent } from './securitycode/securitycode.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: LoginComponent,
  },
  {
    path: 'forgetpassword',
    component: ForgetpasswordComponent,
  },
  {
    path: '2fa',
    component: SecuritycodeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
