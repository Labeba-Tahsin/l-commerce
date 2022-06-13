import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { addToCart } from './cart.actions';
import { ProductService } from '../services/product.service';


@Injectable()
export class AuthEffects {
  private readonly notifier: NotifierService;


  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router,
    private service: ProductService,
    notifierService: NotifierService) {
    this.notifier = notifierService;
  }

}
