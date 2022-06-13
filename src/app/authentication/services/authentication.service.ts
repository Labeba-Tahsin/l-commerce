import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { take, map, tap } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../models/auth-response.model';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private http: HttpClient) { }

  // getToken(): string | null {
  //   return localStorage.getItem('token');
  // }

  // setToken(token: string): void {
  //   localStorage.setItem('token', token);
  // }

  // login({ email, password }: any): Observable<any> {
  //   if (email === 'admin@gmail.com' && password === 'admin') {
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
  //   }
  //   return throwError(() => new Error('Failed to login'));
  // }

  // logout() {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['login']);
  // }

  // isLoggedIn() {
  //   return this.getToken() !== null;
  // }

  login(username: string, password: string): Observable<AuthResponse> {
    console.log(username)
    return this.http.post<AuthResponse>("https://fakestoreapi.com/auth/login", {
      "username": username,
      "password": password
    });
  }

  formatUser(auth: AuthResponse, username: string): User {
    const date = new Date();
    const user = new User(username, auth.token, date);
    return user;
  }

}
