import * as slice from './slice';
import { ThemeState } from './types';

// TODO: check initial state logic
/*
  Attempt to get theme from localStorage 
    -> require localStorage mock
  if undefined, get user preference (match media; media query)
    -> require matchMedia mock
*/

describe('theme slice', () => {
  let state: ThemeState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should toggleTheme', () => {
    expect(
      slice.reducer(state, slice.themeActions.toggleTheme()),
    ).toEqual<ThemeState>({
      selected: state.selected === 'light' ? 'dark' : 'light',
    });
  });
});
