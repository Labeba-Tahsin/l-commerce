import { Action, createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const LOGIN_START = '[Auth] login start';
export const LOGIN_SUCCESS = '[Auth] login success';
export const LOGIN_FAIL = '[Auth] login faled';
export const LOGOUT = '[Auth] logout';

export const loginStart = createAction(LOGIN_START, props<{ username: string; password: string }>());

export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: User, isAuthenticated: Boolean }>());

export const loginFailed = createAction(LOGIN_FAIL);

export const logout = createAction(LOGOUT);


