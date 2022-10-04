import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-securitycode',
  templateUrl: './securitycode.component.html',
  styleUrls: ['./securitycode.component.css'],
})
export class SecuritycodeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigateToLogin() {
    this.router.navigate(['/signin']);
  }

  onNavigateToRegister() {
    this.router.navigate(['/signup']);
  }

  onNavigateToHome() {
    this.router.navigate(['']);
  }

  addToken() {
    sessionStorage.setItem('signin', 'true');
  }
}
