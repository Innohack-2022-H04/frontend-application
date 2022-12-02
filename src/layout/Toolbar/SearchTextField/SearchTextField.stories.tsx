import { Meta, Story } from '@storybook/react';
import {
  PureSearchTextField,
  PureSearchTextFieldProps,
} from './SearchTextField';

export default {
  title: 'Layout/Toolbar/SearchTextField',
  component: PureSearchTextField,
  args: {
    onChange: () => {},
    onSearch: () => {},
  },
} as Meta;

const Template: Story<PureSearchTextFieldProps> = (args) => (
  <PureSearchTextField {...args} />
);

export const NoValue = Template.bind({});
NoValue.args = {
  value: '',
};

export const HasValue = Template.bind({});
HasValue.args = {
  value: '123',
};

export const LongValue = Template.bind({});
LongValue.args = {
  value:
    '1234567890 abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890abcdefghijkl mnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ',
};
