import { Meta, Story } from '@storybook/react';
import { PureThemeSwitch, PureThemeSwitchProps } from './ThemeSwitch';

export default {
  title: 'Layout/Toolbar/ThemeSwitch',
  component: PureThemeSwitch,
  args: {
    handleThemeChange: () => {},
  },
} as Meta;

const Template: Story<PureThemeSwitchProps> = (args) => (
  <PureThemeSwitch {...args} />
);

export const Light = Template.bind({});
Light.args = {
  mode: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  mode: 'dark',
};
