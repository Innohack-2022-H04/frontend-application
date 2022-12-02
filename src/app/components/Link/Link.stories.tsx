import { Meta, Story } from '@storybook/react';
import { LinkProps } from 'react-router-dom';
import StoryRouter from 'storybook-react-router';
import Link from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  decorators: [StoryRouter()],
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Router Link',
};
