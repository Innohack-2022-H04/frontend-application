import styled from '@emotion/styled';
// import Divider from '@mui/material/Divider';
// import ThemeSwitch from './ThemeSwitch';
// import Feedback from './Feedback';
import { ReactComponent as LogoIcon } from './assets/react.svg';
import Notification from './Notification';
import SearchTextField from './SearchTextField';
// import UserMenu from './UserMenu';

interface WrapperProps {
  height: string;
}
const Wrapper = styled.header<WrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${(p) => p.height};
  width: 100%;
  position: relative;
  box-shadow: 0 1px 0 0 ${(p) => p.theme.palette.grey[500]};
  background-color: ${(p) => p.theme.palette.background.paper};
  justify-content: space-between;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 50%;
`;

interface IconWrapperProps {
  size: string;
}
const IconWrapper = styled.div<IconWrapperProps>`
  width: ${(p) => p.size};
  height: ${(p) => p.size};
`;

const StyledLogoIcon = styled(LogoIcon)`
  padding: ${(p) => p.theme.spacing(1)};
  width: inherit;
  height: inherit;
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  margin: 0 ${(p) => p.theme.spacing(1)};

  > * {
    margin: 0px 4px !important;
  }
`;

export interface ToolbarProps {
  display?: boolean;
  height: string;
}
function Toolbar({ display, height }: ToolbarProps) {
  if (!display) {
    return <></>;
  }

  return (
    <Wrapper height={height}>
      <SearchWrapper>
        <IconWrapper size={height}>
          <StyledLogoIcon />
        </IconWrapper>

        <SearchTextField />
      </SearchWrapper>

      <ActionWrapper>
        {/* <UserMenu /> */}
        <Notification />
        {/* <ThemeSwitch />
        <Divider orientation="vertical" flexItem />
        <Feedback /> */}
      </ActionWrapper>
    </Wrapper>
  );
}
Toolbar.defaultProps = {
  display: true,
};

export default Toolbar;
