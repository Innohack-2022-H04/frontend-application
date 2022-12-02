import { Link } from '@components';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import A from '../A';
import Lead from '../Lead';
import Title from '../Title';
import { ReactComponent as CodeAnalysisIcon } from './assets/code-analysis.svg';
import { ReactComponent as CSSIcon } from './assets/css.svg';
import { ReactComponent as InstantFeedbackIcon } from './assets/instant-feedback.svg';
import { ReactComponent as INTLIcon } from './assets/intl.svg';
import { ReactComponent as RouteIcon } from './assets/route.svg';
import { ReactComponent as ScaffoldingIcon } from './assets/scaffolding.svg';
import { ReactComponent as SEOIcon } from './assets/seo.svg';
import { ReactComponent as StateIcon } from './assets/state.svg';
import { ReactComponent as TSLogo } from './assets/ts.svg';
import GithubRepoForm from './GithubRepoForm';
import SubTitle from './SubTitle';

const Feature = styled.li`
  display: flex;
  margin: 6.25rem 0 6.25rem 2.25rem;

  .feature-icon {
    width: 6.25rem;
    height: 6.25rem;
    margin-right: 2.25rem;
    flex-shrink: 0;
  }
`;
const Content = styled.div`
  flex: 1;
`;

const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;

const StyledTypography = styled((props) => (
  <Typography {...props} variant="body1" color="textSecondary" />
))`
  margin: 0.625rem 0 1.5rem 0;
`;

function Features() {
  return (
    <>
      <Title as="h2">Features</Title>
      <Lead>
        Crafted for <strong>highly scalable</strong>,{' '}
        <strong>easily maintainable</strong> and{' '}
        <strong>highly performant</strong> React.js applications with a focus on{' '}
        <strong>best DX</strong> and <strong>best practices</strong>.
      </Lead>
      <List>
        <Feature>
          <StateIcon className="feature-icon" />
          <Content>
            <SubTitle>Predictable State</SubTitle>
            <StyledTypography>
              Build easy to test and debug, flexible and extensible applications
              using{' '}
              <A
                href="https://redux.js.org/basics/usage-with-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </A>
              . Unidirectional data flow allows for change logging and time
              travel debugging.{' '}
              <A
                href="https://github.com/zalmoxisus/redux-devtools-extension"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Chrome Redux Dev Tools
              </A>{' '}
              to see how your application&apos;s state changes and travel in
              time to debug. Type any github username below and see it in action
              with Redux Dev Tools.
            </StyledTypography>
            <GithubRepoForm />
          </Content>
        </Feature>
        <Feature>
          <CSSIcon className="feature-icon" />
          <Content>
            <SubTitle>Next Generation CSS</SubTitle>
            <StyledTypography>
              Write composable CSS that’s co-located with your components for
              complete modularity. Ship only the styles that are on the page for
              the best performance. Generate application-wide styles and themes
              for your components. Change the theme below to see how easy and
              intuitive theming can ever be!
            </StyledTypography>
          </Content>
        </Feature>
        <Feature>
          <INTLIcon className="feature-icon" />
          <Content>
            <SubTitle>i18n Internationalization & Pluralization</SubTitle>
            <StyledTypography>
              Scalable apps need to support multiple languages, easily add and
              support multiple languages.
            </StyledTypography>
          </Content>
        </Feature>
        <Feature>
          <RouteIcon className="feature-icon" />
          <Content>
            <SubTitle>Industry-standard Routing</SubTitle>
            <StyledTypography>
              It&apos;s natural to want to add pages (e.g. `/about`) to your
              application, and routing makes this possible.
              <br />
              <small>
                Go to our{' '}
                <Link to={`${process.env.PUBLIC_URL}/notfound`}>/NotFound</Link>{' '}
                page to see how routing works
              </small>
            </StyledTypography>
          </Content>
        </Feature>
        <Feature>
          <InstantFeedbackIcon className="feature-icon" />
          <Content>
            <SubTitle>Instant Feedback</SubTitle>
            <StyledTypography>
              Enjoy the best DX and code your app at the speed of thought! Your
              saved changes to the CSS and JS are reflected instantaneously
              without refreshing the page.
            </StyledTypography>
          </Content>
        </Feature>
        <Feature>
          <ScaffoldingIcon className="feature-icon" />
          <Content>
            <SubTitle>Quick Scaffolding</SubTitle>
            <StyledTypography>
              Automate the creation of components, features, routes, selectors
              and sagas - and their tests - right from the CLI! Avoid fighting
              the glue of your code and focus on your app!
            </StyledTypography>
          </Content>
        </Feature>
        <Feature>
          <SEOIcon className="feature-icon" />
          <Content>
            <SubTitle>SEO</SubTitle>
            <StyledTypography>
              Supports SEO (document head tags management) for search engines
              that support indexing of JavaScript content.
            </StyledTypography>
          </Content>
        </Feature>
        <Feature>
          <TSLogo className="feature-icon" />
          <Content>
            <SubTitle>TypeScript</SubTitle>
            <StyledTypography>
              Typescript is the key to scalability. Build self-documented code,
              easy-to-debug code and create maintainable large applications and
              codebases with a highly productive development experience.
            </StyledTypography>
          </Content>
        </Feature>
        <Feature>
          <CodeAnalysisIcon className="feature-icon" />
          <Content>
            <SubTitle>Static Code Analysis</SubTitle>
            <StyledTypography>
              Focus on writing new features without worrying about formatting or
              code quality. With the right editor setup, your code will
              automatically be formatted and linted as you work.
            </StyledTypography>
          </Content>
        </Feature>
      </List>
    </>
  );
}
export default Features;
