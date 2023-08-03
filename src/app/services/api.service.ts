import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // API URL
  private apiUrl = environment.apiUrl

  // Reqest Header
  public httpOptions(): any {
    let token = this.getToken()
    return {
      headers : new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      })
    }
  }

  constructor(private httpClient: HttpClient) { }

  // Login Token
  setToken(token: any) {
    localStorage.setItem('authToken', token)
  }

  getToken() {
    return localStorage.getItem('authToken')
  }
  
  isLoggedIn(): boolean {
    return !!this.getToken()
  }

  // Actor Endpoints
  getAllActor() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/actor`, this.httpOptions())
  }
  insertActor(data: any) {
    return this.httpClient.post<any>(`${this.apiUrl}/master/actor`, {form_data : data}, this.httpOptions())
  }
  updateActor(id: number, data: any) {
    return this.httpClient.put<any>(`${this.apiUrl}/master/actor/${id}`, {form_data : data}, this.httpOptions())
  }
  deleteActor(id: number) {
    return this.httpClient.delete<any>(`${this.apiUrl}/master/actor/${id}`, this.httpOptions())
  }

  // Film Endpoints
  getAllFilm() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/film`, this.httpOptions())
  }
  insertFilm(data: any) {
    return this.httpClient.post<any>(`${this.apiUrl}/master/film`, {form_data : data}, this.httpOptions())
  }

  // Query Endpoints
  getCountBySpecialFeatures() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/count-by-special-features`, this.httpOptions())
  }
  getCountByRating() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/count-by-rating`, this.httpOptions())
  }
  getTopCustomer() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/get-customer-by-top-rental`, this.httpOptions())
  }
  getTotalFilmByCategoryPercentage() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/get-film-category-percentage`, this.httpOptions())
  }
  getFilmByMostActor() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/get-film-by-most-actor`, this.httpOptions())
  }
  getTopSpenderCustomer() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/get-top-spender-customer`, this.httpOptions())
  }
  getTotalFilmLanguage() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/get-total-film-language`, this.httpOptions())
  }
  getDailyIncome() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/get-daily-income`, this.httpOptions())
  }
  getRentalCountByCategory() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/get-rental-count-by-category`, this.httpOptions())
  }
  getTopRentalDurationFilm() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/get-top-rental-duration`, this.httpOptions())
  }
}
