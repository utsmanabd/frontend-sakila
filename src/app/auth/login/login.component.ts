import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from './login-data';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  response: any;
  isLoading: boolean = false;

  loginData: LoginData = {
    nik: null,
    password: '',
  };

  isNIKEmpty: boolean = false;
  isPasswordEmpty: boolean = false;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login() {
    this.validateForm();
    if (!this.isNIKEmpty && !this.isPasswordEmpty) {
      this.isLoading = true;
      this.authService.login(this.loginData).subscribe(
        (res) => {
          this.isLoading = false;
          this.response = res;
          this.apiService.setToken(this.response.token);
          console.log(`Login success. Token: ${this.response.token}`);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.isLoading = false;
          this.showSnackBar("Invalid login credentials")
          console.error(`Login failed. Error: ${error}`);
        }
      );
    }
  }

  validateForm() {
    this.isNIKEmpty = this.loginData.nik === null;
    this.isPasswordEmpty = this.loginData.password.trim() === '';
  }

  showSnackBar(msg: string) {
    this.snackBar.open(msg, 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    })
  }
}
