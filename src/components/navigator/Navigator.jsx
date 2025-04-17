import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';

const Navigator = ({ onclick_5 }) => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  const token = localStorage.getItem('token');
  return (
    <>
      <span
        className={styles.choose1}
        onClick={() => handleNavigation('/page1')}
      >
        首页
      </span>
      <span
        className={styles.choose2}
        onClick={() => handleNavigation('/page2')}
      >
        历届奥运数据可视化
      </span>
      <span
        className={styles.choose3}
        onClick={() => handleNavigation('/page3')}
      >
        在线预测
      </span>
      <span
        className={styles.choose5}
        onClick={(e) => {
          onclick_5 ? onclick_5(e) : handleNavigation('/page5');
        }}
      >
        联系我们
      </span>
      <span
        className={styles.choose4}
        onClick={() => {
          token ? handleNavigation('/index') : handleNavigation('/page4');
        }}
      >
        {token ? '查看留言' : '登录页面'}
      </span>
    </>
  );
};

export default Navigator;
