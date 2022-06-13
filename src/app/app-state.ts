import { SHARED_STATE_NAME } from "../app/shared/store/shared.selectors";
import { SharedState } from "../app/shared/store/shared.state";
import { AuthReducer } from "./authentication/store/auth.reducer";
import { AUTH_STATE_NAME } from "./authentication/store/auth.selectors";
import { AuthState } from "./authentication/store/auth.state";
import { SharedReducer } from "./shared/store/shared.reducer";

export interface AppState {
  [SHARED_STATE_NAME]: SharedState,
  [AUTH_STATE_NAME]: AuthState
}


export const AppReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer
}
