import Container from '../../components/Container';
import Countdown from '../../components/Countdown';
import MainForm from '../../components/MainForm';
import MainTemplate from '../../templates/MainTemplate';

const Home = () => {
  return (
    <MainTemplate>
      <Container>
        <Countdown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
};

export default Home;
