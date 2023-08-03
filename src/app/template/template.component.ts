import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent {
  isLoggedIn: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.apiService.isLoggedIn();
    if (!this.isLoggedIn) {
      this.router.navigate(['/auth']);
    }
  }
}
