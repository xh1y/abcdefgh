import styles from './index.module.css';
import Navigator from '../navigator/Navigator.jsx';

const Title = () => {
  return (
    <div
      style={{
        height: '10vh',
      }}
    >
      <span className={styles.title}>Olympic</span>
      <div className={styles.head}>
        <Navigator />
      </div>
    </div>
  );
};

export default Title;
