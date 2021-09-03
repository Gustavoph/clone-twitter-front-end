import P from 'prop-types';
import * as Styled from './styles';

export const LeftContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

LeftContainer.propTypes = {
  children: P.node.isRequired,
};
