import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
})
export class ForgetpasswordComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigateToLogin() {
    this.router.navigate(['/login']);
  }

  onNavigateToPhoneVerification() {
    this.router.navigate(['/2fa']);
  }
}
