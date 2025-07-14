import './styles/global.css';
import './styles/theme.css';

import Container from './components/Container';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Countdown from './components/Countdown';
import DefaultInput from './components/DefaultInput';

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
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='task'
              type='text'
              labelText='Task'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 </p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default App;
