import { Meta, Story } from '@storybook/react';
import { PureFeedback, PureFeedbackProps } from './Feedback';

export default {
  title: 'Layout/Toolbar/Feedback',
  component: PureFeedback,
  args: {
    onClick: () => {},
  },
} as Meta;

const Template: Story<PureFeedbackProps> = (args) => <PureFeedback {...args} />;

export const Default = Template.bind({});
Default.args = {};
