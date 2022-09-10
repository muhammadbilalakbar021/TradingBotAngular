import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigateToRegister() {
    this.router.navigate(['/signup']);
  }

  onNavigateToForgetPasswordr() {
    this.router.navigate(['/forgetpassword']);
  }

  onNavigateToHome() {
    this.router.navigate(['']);
  }

  addToken() {
    sessionStorage.setItem('signin', 'true');
  }
}
