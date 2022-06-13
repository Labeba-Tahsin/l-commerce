import { Action, createReducer, on } from '@ngrx/store';
import { loginSuccess, logout } from './auth.actions';
import { initialState } from './auth.state';

const _authReducer = createReducer(initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      isAuthenticated: action.isAuthenticated
    }
  }),
  on(logout, (state, action) => {
    return {
      ...state,
      user: null,
      isAuthenticated: false
    }
  })
);

export function AuthReducer(state = initialState, action: Action) {
  return _authReducer(state, action);
}
