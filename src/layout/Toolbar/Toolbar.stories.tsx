import { Meta, Story } from '@storybook/react';
import { StyleConstants } from 'styles/StyleConstants';
import Toolbar, { ToolbarProps } from './Toolbar';

export default {
  title: 'Layout/Toolbar/_Index_',
  component: Toolbar,
  args: {
    height: StyleConstants.TOOLBAR_HEIGHT,
  },
} as Meta;

const Template: Story<ToolbarProps> = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Show (Default)';
Default.args = {};

export const Hide = Template.bind({});
Hide.args = {
  display: false,
};
