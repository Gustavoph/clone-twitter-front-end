import P from 'prop-types';
import * as Styled from './styles';
import { LeftContainer } from '../../components/LeftContainer';

//import HomeImg from '../../../public/assets/home.png';

const links = [
  'Home',
  'Explore',
  'Notifications',
  'Messages',
  'Bookmarks',
  'Lists',
  'Profile',
  'More',
];

export const AsideLinks = () => {
  return (
    <LeftContainer>
      <Styled.Container>
        <Styled.Logo src="assets/Logo.png" />
      </Styled.Container>
      {links.map((link) => {
        return (
          <>
            <Styled.Container>
              <Styled.Link>
                <img src={`assets/${link}Light.png`} />
                {link}
              </Styled.Link>
            </Styled.Container>
          </>
        );
      })}
      <Styled.Container></Styled.Container>
    </LeftContainer>
  );
};
