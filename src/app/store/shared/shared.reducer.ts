import {
  setLanguage, setTheme,
} from './shared.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './shared.state';

const _sharedReducer = createReducer(
  initialState,
  on(setLanguage, (state: any, action: any) => {
    return {
      ...state,
      Language: action.status,
    };
  }),
  on(setTheme, (state: any, action: any) => {
    return {
      ...state,
      Theme: action.status,
    };
  }),
);



export function SharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}

