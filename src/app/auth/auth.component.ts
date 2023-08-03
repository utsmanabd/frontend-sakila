import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoggedIn: boolean = false

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.apiService.isLoggedIn()

    if (this.isLoggedIn) {
      this.router.navigate(['/home'])
    }
  }
}
