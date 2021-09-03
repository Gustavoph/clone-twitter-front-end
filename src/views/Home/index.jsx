import { Container } from '../../components/Container';
import PostsContainer from '../../components/PostsContainer';
import { RightContainer } from '../../components/RightContainer';
import { AsideLinks } from '../AsideLinks';

const Home = () => {
  return (
    <Container>
      <AsideLinks />
      <PostsContainer>Teste</PostsContainer>
      <RightContainer>Right</RightContainer>
    </Container>
  );
};

export default Home;
