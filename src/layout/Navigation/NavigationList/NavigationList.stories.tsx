import { Meta, Story } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import NavigationList from './NavigationList';

export default {
  title: 'Layout/Navigation/NavigationList/_Index_',
  component: NavigationList,
  decorators: [StoryRouter()],
} as Meta;

const Template: Story = (args) => <NavigationList {...args} />;

export const Default = Template.bind({});
Default.args = {};
