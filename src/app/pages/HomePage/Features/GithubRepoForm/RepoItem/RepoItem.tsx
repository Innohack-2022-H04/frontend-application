import styled from '@emotion/styled';
import A from '../../../A';
import { ReactComponent as NewWindowIcon } from './assets/new-window.svg';
import { ReactComponent as StarIcon } from './assets/star.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  min-height: 2.75rem;
  font-weight: 500;
  color: ${(p) => p.theme.palette.text.primary};

  &:nth-child(odd) {
    background-color: ${(p) => p.theme.palette.background.paper};
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Name = styled.div`
  flex: 1;
  padding: 0.625rem 0;
`;

const Info = styled.div`
  display: flex;
`;

const StarCount = styled.div`
  display: flex;
  align-items: center;
  min-width: 6rem;
  .icon {
    margin-right: 0.125rem;
  }
`;
interface Props {
  name: string;
  starCount: number;
  url: string;
}

function RepoItem({ name, starCount, url }: Props) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Info>
        <StarCount>
          <StarIcon />
          {starCount}
        </StarCount>
        <A href={url} target="_blank" rel="noopener noreferrer">
          <NewWindowIcon />
        </A>
      </Info>
    </Wrapper>
  );
}
export default RepoItem;
