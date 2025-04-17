/**
 * @interface IProps
 * @property {string} item
 */

import styles from './index.module.css';
import Navigator from '../navigator/Navigator.jsx';

/**
 * @type {React.FC<IProps>}
 * @param {IProps} props
 */
const Title = ({ item }) => {
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
