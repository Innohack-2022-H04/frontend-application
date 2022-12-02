import styled from '@emotion/styled';

const Lead = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: ${(p) => p.theme.palette.text.secondary};
  margin: 0 0 1.5rem 0;

  strong {
    color: ${(p) => p.theme.palette.text.primary};
  }
`;
export default Lead;
