import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { AUTH_STATE_NAME } from './store/auth.selectors';
import { AuthReducer } from './store/auth.reducer';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    //StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
  ]
})
export class AuthenticationModule { }
