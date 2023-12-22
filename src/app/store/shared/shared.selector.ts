import { SharedState } from './shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const SHARED_STATE_NAME = 'shared';
export const SET_LANGUAGE = 'shared';
export const SET_THEME = 'shared';

const getLanguageState = createFeatureSelector<SharedState>(SET_LANGUAGE);
const getThemeState = createFeatureSelector<SharedState>(SET_THEME);

export const getLanguage = createSelector(getLanguageState, (state) => {
  return state.Language;
});

export const getTheme = createSelector(getThemeState, (state) => {
  return state.Theme;
});
