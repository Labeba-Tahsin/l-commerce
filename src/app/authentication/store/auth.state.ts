import { User } from "../models/user.model"

export interface AuthState {
  user: User | null;
  isAuthenticated: Boolean;
}

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false
}
