import React from 'react';
import styles from './Page3.module.less';
import WorldMap from '../page2/components/WorlMap';
import { useNavigate } from 'react-router-dom';
function Page3() {
        const navigate=useNavigate()
        const handleNavigation = (path) => {
          navigate(path);
        };
      
  return (
    <div className={styles.container}>
         <span className={styles.title}>Olympic</span>
               <div className={styles.head}>
                <span className={styles.choose1}  onClick={() => handleNavigation('/page1')}>首页</span>
                <span className={styles.choose2}   onClick={() => handleNavigation('/page2')}>历届奥运数据可视化</span>
                <span className={styles.choose3}  onClick={() => handleNavigation('/page3')}>在线预测</span>
                <span className={styles.choose4}  onClick={() => handleNavigation('/page4')}>登录页面</span>
                
                <span className={styles.choose5}  onClick={() => handleNavigation('/page5')}>联系我们</span>
                </div>
  
      <div className={styles.worldmapWrapper}>
      <WorldMap style={{ width: '100%', height: '100%' }} showTooltipName={false} />

      </div>

      <div className={styles.data}>
        {/* 这里是数据区域内容 */}
        数据展示区
      </div>
    </div>
  );
}

export default Page3;
