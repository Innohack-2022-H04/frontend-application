import styled from '@emotion/styled';
import A from '../A';
import Lead from '../Lead';
import Title from '../Title';
import Logos from './Logos';

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;

function Masthead() {
  return (
    <Wrapper>
      <Logos />
      <Title>React Boilerplate meets CRA</Title>
      <Lead>
        Now you can use the{' '}
        <A
          href="https://www.reactboilerplate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Boilerplate
        </A>{' '}
        as a{' '}
        <A
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create React App
        </A>{' '}
        template.
      </Lead>
    </Wrapper>
  );
}
export default Masthead;
