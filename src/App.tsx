import './styles/global.css';
import './styles/theme.css';

import Container from './components/Container';
import Heading from './components/Heading';

function App() {
  return (
    <div>
      <Container>
        <Heading>Logo</Heading>
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
