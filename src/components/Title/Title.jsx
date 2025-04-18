import styles from './index.module.css';
import Navigator from '../navigator/Navigator.jsx';

const Title = () => {
  return (
    <>
      <span className={styles.title}>Olympic</span>
      <div className={styles.head}>
        <Navigator />
      </div>
    </>
  );
};

export default Title;
