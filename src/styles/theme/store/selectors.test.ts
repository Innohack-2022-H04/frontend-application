import { Theme } from '@emotion/react';
import { RootState } from 'types';
import { themes } from '../themes';
import { selectTheme, selectThemeKey } from './selectors';
import * as slice from './slice';
import { ThemeKeyType } from './types';

describe('theme selectors', () => {
  it('selectTheme', () => {
    let thisState: RootState = {};
    expect(selectTheme(thisState)).toEqual<Theme>(
      themes[slice.initialState.selected],
    );

    thisState = {
      theme: { selected: 'dark' },
    };
    expect(selectTheme(thisState)).toEqual<Theme>(themes.dark);
  });

  it('selectThemeKey', () => {
    let thisState: RootState = {};
    expect(selectThemeKey(thisState)).toEqual<ThemeKeyType>(
      slice.initialState.selected,
    );

    thisState = {
      theme: { selected: 'dark' },
    };
    expect(selectThemeKey(thisState)).toEqual<ThemeKeyType>('dark');
  });
});
