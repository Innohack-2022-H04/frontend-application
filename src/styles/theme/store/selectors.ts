import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { themes } from '../themes';
import { initialState } from './slice';

export const selectTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  (theme) => {
    return themes[theme.selected];
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  (theme) => theme.selected,
);
