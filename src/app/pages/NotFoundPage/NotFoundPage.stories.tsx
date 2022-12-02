import { Meta, Story } from '@storybook/react';
import { HelmetProvider } from 'react-helmet-async';
import StoryRouter from 'storybook-react-router';
import NotFoundPage from './NotFoundPage';

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  decorators: [
    StoryRouter(),
    (story) => <HelmetProvider>{story()}</HelmetProvider>,
  ],
} as Meta;

const Template: Story = (args) => <NotFoundPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
