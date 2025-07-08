import './styles/global.css';
import './styles/theme.css';

import Container from './components/Container';
import Heading from './components/Heading';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Countdown from './components/Countdown';

function App() {
  return (
    <div>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>

      <Container>
        <Heading>Footer</Heading>
      </Container>
    </div>
  );
}

export default App;
