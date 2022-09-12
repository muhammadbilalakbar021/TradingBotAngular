import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SecuritycodeComponent } from './securitycode/securitycode.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ImageDirective } from 'src/app/shared/directives/image.directive';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    SecuritycodeComponent,
    ImageDirective,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    AuthenticationRoutingModule,
  ],
})
export class AuthenticationModule {}
