import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'nx-mf-demo-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string;
  password: string;

  get loggedInUserName(): string {
    return this.authService.userName;
  }

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.userName, this.password);
  }

}
