import P from 'prop-types';
import * as Styled from './styles';

export const Tweet = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

Tweet.propTypes = {
  children: P.node.isRequired,
};
