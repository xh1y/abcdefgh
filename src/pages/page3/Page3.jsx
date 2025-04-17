import React from 'react';
import styles from './Page3.module.less';
import WorldMap from '../page2/components/WorlMap';
import Navigator from '../../components/navigator/Navigator.jsx';
function Page3() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Olympic</span>
      <div className={styles.head}>
        <Navigator />
      </div>

      <div className={styles.worldmapWrapper}>
        <WorldMap
          style={{ width: '100%', height: '100%' }}
          showTooltipName={false}
        />
      </div>

      <div className={styles.data}>
        {/* 这里是数据区域内容 */}
        数据展示区
      </div>
    </div>
  );
}

export default Page3;
