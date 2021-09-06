import P from 'prop-types';
import * as Styled from './styles';
import { LeftContainer } from '../../components/LeftContainer';

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
      <div>
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
        <Styled.Button>Tweet</Styled.Button>
      </div>
      <div>
        <Styled.AvatarContent>
          <Styled.Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeepl3eOLpVOGxYCTXhbTmDPBUnKWzi2Wa3JsXtLxz0Kr6Jq7uNzyglT0FVMak9_qnpXU&usqp=CAU"
            alt=""
          />
          Giovanna Alcini <br /> @gi_alcini
          <Styled.AvatarIcon src="assets/pointsLight.png" alt="" />
        </Styled.AvatarContent>
      </div>
    </LeftContainer>
  );
};
