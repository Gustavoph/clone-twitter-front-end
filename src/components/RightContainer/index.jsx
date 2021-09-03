import P from 'prop-types';
import * as Styled from './styles';

export const RightContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

RightContainer.propTypes = {
  children: P.node.isRequired,
};
