import { Meta, Story } from '@storybook/react';
import FormLabel from './FormLabel';

export default {
  title: 'Pages/HomePage/Features/FormLabel',
  component: FormLabel,
} as Meta;

const Template: Story = (args) => <FormLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '<label> Text',
};
