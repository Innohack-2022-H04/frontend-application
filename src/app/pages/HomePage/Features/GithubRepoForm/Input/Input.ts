import styled from '@emotion/styled';

const Input = styled.input`
  border: 2px solid ${(p) => p.theme.palette.grey[500]};
  border-radius: 4px;
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${(p) => p.theme.palette.text.primary};
  background-color: ${(p) => p.theme.palette.background.default};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  height: 2.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    font-weight: 300;
    color: ${(p) => p.theme.palette.text.secondary};
  }

  &:focus {
    border-color: ${(p) => p.theme.palette.secondary.main};
    box-shadow: 0 0 0 3px ${(p) => p.theme.palette.secondary.dark};
  }
`;
export default Input;
