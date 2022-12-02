import SaveIcon from '@mui/icons-material/Save';
import { Meta, Story } from '@storybook/react';
import TooltipIconButton, { TooltipIconButtonProps } from './TooltipIconButton';

export default {
  title: 'Components/TooltipIconButton',
  component: TooltipIconButton,
  args: {
    tooltip: 'Save',
    icon: SaveIcon,
    onClick: () => {},
  },
} as Meta;

const Template: Story<TooltipIconButtonProps> = (args) => (
  <TooltipIconButton {...args} />
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const NoTooltip = Template.bind({});
NoTooltip.args = {
  tooltip: '',
};

export const CustomTooltipProps = Template.bind({});
CustomTooltipProps.args = {
  TooltipProps: {
    arrow: true,
    placement: 'right-end',
  },
};

export const CustomIconButtonProps = Template.bind({});
CustomIconButtonProps.args = {
  IconButtonProps: {
    color: 'primary',
    size: 'small',
  },
};

export const CustomSvgIconProps = Template.bind({});
CustomSvgIconProps.args = {
  SvgIconProps: {
    fontSize: 'small',
  },
};
