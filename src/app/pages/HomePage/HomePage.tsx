import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import Masthead from './Masthead';
import Features from './Features';

const Wrapper = styled.div`
  padding: 1rem;
`;

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Wrapper>
        <Masthead />
        <Features />
      </Wrapper>
    </>
  );
}
export default HomePage;
