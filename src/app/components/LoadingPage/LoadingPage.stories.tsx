import { Meta, Story } from '@storybook/react';
import LoadingPage from './LoadingPage';

export default {
  title: 'Components/LoadingPage',
  component: LoadingPage,
} as Meta;

const Template: Story = (args) => <LoadingPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
