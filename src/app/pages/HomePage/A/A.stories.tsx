import { Meta, Story } from '@storybook/react';
import A from './A';

export default {
  title: 'Pages/HomePage/A',
  component: A,
} as Meta;

const Template: Story = (args) => <A {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '<a> Link',
};
