import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl

  public httpOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  constructor(private httpClient: HttpClient) { }

  login(data: any) {
    return this.httpClient.post(`${this.apiUrl}/auth/login`, data, this.httpOptions())
  }

  logout() {
    return localStorage.removeItem('authToken')
  }
}
