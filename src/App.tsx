import './styles/global.css';
import './styles/theme.css';

import Container from './components/Container';
import Heading from './components/Heading';
import Logo from './components/Logo';

function App() {
  return (
    <div>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>

      <Container>
        <Heading>Form</Heading>
      </Container>

      <Container>
        <Heading>Footer</Heading>
      </Container>
    </div>
  );
}

export default App;
