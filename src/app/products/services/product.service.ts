import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { setLoadingSpinner } from '../../shared/store/shared.actions';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private store: Store,) { }

  getProducts(): Observable<Object> {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    return this.http.get('https://fakestoreapi.com/products');
  }

  addCart() {

  }
}
