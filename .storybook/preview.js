import { ThemeProvider } from '@emotion/react';
import { withThemes } from '@react-theming/storybook-addon';
import { handleOnSwitch } from '@react-theming/storybook-addon/dist/preview/onThemeSwitch';
// import { setCurrent } from '@react-theming/storybook-addon/dist/actions';
import { addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { themeActions } from 'styles/theme/store/slice';
import { ThemeProvider as StoreThemeProvider } from 'styles/theme/ThemeProvider';
import { themes } from 'styles/theme/themes';
import { GlobalStyle } from 'styles/global-styles';

/* GlobalStyle Decorator - Start */
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
/* GlobalStyle Decorator - End */

/* Store Provider and Store Theme Decorator - Start */
const store = configureAppStore();
addDecorator((story) => (
  <Provider store={store}>
    <StoreThemeProvider>{story()}</StoreThemeProvider>
  </Provider>
));
/* Store Provider and Store Theme Decorator - End */

/* Storybook React Theming Decorator - Start */
const themeProviderFn = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
const onThemeSwitch = (callback) => (context) => {
  const { theme } = context;
  const parameters = {
    backgrounds: {
      default: theme.palette.background.default,
    },
  };

  if (typeof callback === 'function') {
    callback(theme);
  }

  return {
    parameters,
  };
};
// update store provider selected theme
const changeSelectedTheme = (currTheme) => {
  store.dispatch(themeActions.setTheme(currTheme.palette.mode));
};
addDecorator(
  withThemes(null, Object.values(themes), {
    providerFn: themeProviderFn,
    onThemeSwitch: onThemeSwitch(changeSelectedTheme),
  }),
);
/* Storybook React Theming Decorator - End */

/* Store Provider selected theme listener - Start */
store.subscribe(() => {
  const currThemeKey = store.getState().theme.selected;
  const theme = themes[currThemeKey];

  /*
    Update storybook canvas/theming background through react-theming handleOnSwitch
    Note: this will not trigger storybook ui to point to the respective theme.
    TODO: see if can use setCurrent (https://github.com/react-theming/storybook-addon/blob/master/src/actions.js), to change switch theme
  */
  handleOnSwitch({
    theme,
    onThemeSwitch: onThemeSwitch(),
  });
});
/* Store Provider selected theme listener - End */

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Components', 'Containers', 'Pages', 'Layout'],
    },
  },
};
