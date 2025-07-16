import { PlayCircleIcon } from 'lucide-react';

import styles from './styles.module.css';
import DefaultInput from '../DefaultInput';
import Cycles from '../Cycles';
import DefaultButton from '../DefaultButton';

const MainForm = () => {
  return (
    <form className={styles.form} action=''>
      <div className={styles.formRow}>
        <DefaultInput
          id='task'
          type='text'
          labelText='Task'
          placeholder='Digite algo'
        />
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
};

export default MainForm;
