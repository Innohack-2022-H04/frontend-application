import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { getThemeFromStorage, isSystemDark, saveTheme } from '../utils';
import { ThemeKeyType, ThemeState } from './types';

export const initialState: ThemeState = {
  selected: getThemeFromStorage() || (isSystemDark ? 'dark' : 'light'),
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeKeyType>) {
      state.selected = action.payload;
    },
    toggleTheme(state) {
      const prevSelected = state.selected;
      const selected = prevSelected === 'light' ? 'dark' : 'light';

      saveTheme(selected);
      state.selected = selected;
    },
  },
});

export const { actions: themeActions, reducer, name } = slice;
