/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import Layout from 'layout';
import { GlobalStyle } from 'styles/global-styles';

import Routes from 'routes/Routes';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Layout>
        {/* <Switch>
          <Route exact path="/home" component={HomePage} />
          <Redirect exact from="/" to="/home" />
          <Route component={NotFoundPage} />
        </Switch> */}
        <Routes />
      </Layout>
      <GlobalStyle />
    </BrowserRouter>
  );
}
export default App;
