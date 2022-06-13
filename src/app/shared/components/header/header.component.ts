import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { isAuthenticated } from 'src/app/authentication/store/auth.selectors';
import { AuthState } from 'src/app/authentication/store/auth.state';
import { logout } from '../../../authentication/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated$: Observable<Boolean> = of(false);

  constructor(
    private store: Store<AuthState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(isAuthenticated);
  }

  logoutUser() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }

  loginUser() {
    this.router.navigate(['/login']);
  }

}
