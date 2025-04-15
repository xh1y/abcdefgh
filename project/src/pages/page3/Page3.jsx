import React from 'react';
import styles from './Page3.module.less';
import WorldMap from '../page2/components/WorlMap';

function Page3() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>预测页面</div>

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
