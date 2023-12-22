import { createAction, props } from '@ngrx/store';
export const SET_LANGUAGE = '[shared] Set Language';
export const SET_THEME = '[shared] Toggle Theme';

export const setLanguage = createAction(SET_LANGUAGE, props<{ status: {} }>());
export const setTheme = createAction(SET_THEME, props<{ status: {} }>());
