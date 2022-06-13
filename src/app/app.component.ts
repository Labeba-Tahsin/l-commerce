import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from './app-state';
import { getLoadding } from './shared/store/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'l-commerce';
  showLoading$: Observable<boolean> = of(false);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.showLoading$ = this.store.select(getLoadding);
  }
}
