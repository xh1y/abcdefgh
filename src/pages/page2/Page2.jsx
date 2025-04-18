import React, { useState } from 'react';
import styles from './Page2.module.less';
import HostChart from './components/HostChart';
import CountChart from './components/CountChart';
import src1 from '../../images/two/circle.png';
import AthleteChart from './components/AthleteChart';
import WorldMap from './components/WorldMap';
import Navigator from '../../components/navigator/Navigator.jsx';
import { medalData } from './settings.js';
import Title from '../../components/Title/Title.jsx';

// 导入奖牌数据（假设已经处理好）

function Page2() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const page2Style = {
    width: '40vw',
    height: '50vh',
  };

  // 处理国家选择
  const medalDataObj = medalData.reduce((acc, curr) => {
    const [country, count] = Object.entries(curr)[0];
    acc[country] = count;
    return acc;
  }, {});
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className={styles.container}>
      <Title />
      <div className={styles.content1}>
        <div className={styles.HostChart}>
          <HostChart />
        </div>
        <div className={styles.CountChart}>
          <CountChart />
        </div>
      </div>
      <div className={styles.MedalChart}>
        <div className={styles.WorldMap}>
          <WorldMap style={page2Style} onCountryClick={handleCountryClick} />
        </div>

        {/* 直接在Page2中渲染国家数据 */}
        {selectedCountry && (
          <div className={styles.countryDataPanel}>
            <h3>{selectedCountry} 奥运历史奖牌总数</h3>
            <div className={styles.medalCount}>
              <span className={styles.medalNumber}>
                {medalDataObj[selectedCountry] || 0}
              </span>
              <span className={styles.medalLabel}>枚</span>
            </div>
            <p>自首次奥运以来共获得</p>
          </div>
        )}
      </div>
      <div className={styles.right}>
        <div className={styles.AthleteChart}>
          <AthleteChart />
        </div>
        <img src={src1} className={styles.circle} />
      </div>
    </div>
  );
}

export default Page2;
