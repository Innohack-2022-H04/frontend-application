import HelpIcon from '@mui/icons-material/Help';
import { Meta, Story } from '@storybook/react';
import PureNavigationListItem, {
  PureNavigationListItemProps,
} from '../PureNavigationListItem';

export default {
  title: 'Layout/Navigation/NavigationList/NavigationListItem',
  component: PureNavigationListItem,
  args: {
    id: 'test-id',
    title: 'Test',
    icon: HelpIcon,
    onNavItemClick: () => {},
  },
} as Meta;

const Template: Story<PureNavigationListItemProps> = (args) => (
  <PureNavigationListItem {...args} />
);

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};

export const NotSelected = Template.bind({});
NotSelected.args = {
  selected: false,
};
