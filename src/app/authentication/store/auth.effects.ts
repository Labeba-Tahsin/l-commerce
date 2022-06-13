import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { setLoadingSpinner } from 'src/app/shared/store/shared.actions';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';
import { loginStart, loginSuccess } from './auth.actions';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
  private readonly notifier: NotifierService;


  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private store: Store,
    private router: Router,
    notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.username, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.notifier.notify('success', 'Logged In');
            const user: User = this.authService.formatUser(data, action.username);
            return loginSuccess({ user: user, isAuthenticated: true });
          }),
          catchError((err) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.notifier.notify('error', err.error);
            console.log(err);
            return of();
          })


        )
      })
    )
  });

  loginNavigate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginSuccess),
      tap(() => {
        this.router.navigate(['/products/product-list']);
      })
    )
  }, { dispatch: false });

}
