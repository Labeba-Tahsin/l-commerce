import { createAction, props } from "@ngrx/store";

const SET_LOADING_SPINNER = "[Shared] set loading spinner";

export const setLoadingSpinner = createAction(SET_LOADING_SPINNER, props<{ status: boolean }>());
