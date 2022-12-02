import styled from '@emotion/styled';

const A = styled.a`
  color: ${(p) => p.theme.palette.secondary.main};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
export default A;
