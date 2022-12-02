import { TooltipIconButton, TooltipIconButtonProps } from '@components';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeSlice } from 'styles/theme/store';
import { selectThemeKey } from 'styles/theme/store/selectors';
import { ThemeState } from 'styles/theme/store/types';

const tooltipIconButtonProps = {
  dark: {
    icon: Brightness7Icon,
    tooltip: 'Turn on the light',
  },
  light: {
    icon: Brightness4Icon,
    tooltip: 'Turn off the light',
  },
};
export interface PureThemeSwitchProps {
  mode: ThemeState['selected'];
  onClick: TooltipIconButtonProps['onClick'];
}
export function PureThemeSwitch({ mode, onClick }: PureThemeSwitchProps) {
  return (
    <TooltipIconButton {...tooltipIconButtonProps[mode]} onClick={onClick} />
  );
}

function ThemeSwitch() {
  const { actions: themeActions } = useThemeSlice();
  const mode = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(themeActions.toggleTheme());
  };

  return <PureThemeSwitch mode={mode} onClick={handleClick} />;
}

ThemeSwitch.defaultProps = {
  label: '',
};

export default ThemeSwitch;
