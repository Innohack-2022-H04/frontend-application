import { Meta, Story } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Navigation, { NavigationProps } from './Navigation';

export default {
  title: 'Layout/Navigation/_Index_',
  component: Navigation,
  decorators: [StoryRouter()],
} as Meta;

const Template: Story<NavigationProps> = (args) => <Navigation {...args} />;

export const Show = Template.bind({});
Show.args = {};

export const Hide = Template.bind({});
Hide.args = {
  display: false,
};
