import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigateToLogin() {
    this.router.navigate(['/signin']);
  }

  onNavigateToHome() {
    this.router.navigate(['/']);
  }

  addToken() {
    sessionStorage.setItem('signin', 'true');
  }
}
