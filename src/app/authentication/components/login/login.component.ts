import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/shared/store/shared.actions';
import { AuthenticationService } from '../../services/authentication.service';
import { loginStart } from '../../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.store.dispatch(setLoadingSpinner({ status: true }));
      this.store.dispatch(loginStart({ username, password }));
    }
  }

}
