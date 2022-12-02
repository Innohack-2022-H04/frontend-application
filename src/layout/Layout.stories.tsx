import { Meta, Story } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import styled from '@emotion/styled';
import { PureLayout, PureLayoutProps } from './Layout';

export default {
  title: 'Layout/_Index_',
  component: PureLayout,
  decorators: [StoryRouter()],
} as Meta;

const Template: Story<PureLayoutProps> = (args) => <PureLayout {...args} />;

const Wrapper = styled.div`
  padding: 1rem;
`;
const children = <Wrapper>Content</Wrapper>;

export const Default = Template.bind({});
Default.args = {
  children,
};

export const HideNavigation = Template.bind({});
HideNavigation.args = {
  config: {
    navigation: {
      display: false,
    },
  },
  children,
};

export const HideToolbar = Template.bind({});
HideToolbar.args = {
  config: {
    toolbar: {
      display: false,
    },
  },
  children,
};

export const ContentScroll = Template.bind({});
const ContentScrollWrapper = styled.div`
  padding: 1rem;
  min-height: 2160px;
`;
ContentScroll.args = {
  children: <ContentScrollWrapper>Content</ContentScrollWrapper>,
};
