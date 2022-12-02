import { Meta, Story } from '@storybook/react';
import { PureNotification, PureNotificationProps } from './Notification';

export default {
  title: 'Layout/Toolbar/Notification',
  component: PureNotification,
  args: {
    onClick: () => {},
  },
} as Meta;

const Template: Story<PureNotificationProps> = (args) => (
  <PureNotification {...args} />
);

export const NoCount = Template.bind({});
NoCount.args = {
  badgeContent: 0,
};

export const SingleDigit = Template.bind({});
SingleDigit.args = {
  badgeContent: 1,
};

export const DoubleDigit = Template.bind({});
DoubleDigit.args = {
  badgeContent: 10,
};

export const TripleDigit = Template.bind({});
TripleDigit.args = {
  badgeContent: 100,
};
