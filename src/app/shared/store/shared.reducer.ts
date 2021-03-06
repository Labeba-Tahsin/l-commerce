import { Action, createReducer, on } from "@ngrx/store";
import { setLoadingSpinner } from "./shared.actions";
import { initialState } from "./shared.state";

const _sharedReducer = createReducer(initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status
    }
  })
);

export function SharedReducer(state = initialState, action: Action) {
  return _sharedReducer(state, action);
}
