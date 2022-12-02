import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './store';
import { selectTheme } from './store/selectors';

export const ThemeProvider = ({ children }: { children: React.ReactChild }) => {
  useThemeSlice();

  const theme = useSelector(selectTheme);
  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        {React.Children.only(children)}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};
