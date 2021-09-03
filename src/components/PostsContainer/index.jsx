import P from 'prop-types';
import * as Styled from './styles';

const PostsContainer = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

PostsContainer.propTypes = {
  children: P.node.isRequired,
};

export default PostsContainer;
