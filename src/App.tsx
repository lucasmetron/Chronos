import { TimerIcon } from 'lucide-react';
import Heading from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

function App() {
  return (
    <div>
      <Heading>
        Olá
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </div>
  );
}

export default App;
