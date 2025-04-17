import React from 'react';
import styles from './Page2.module.less';
import HostChart from './components/HostChart';
import CountChart from './components/CountChart';
import src1 from '../../images/two/circle.png';
import AthleteChart from './components/AthleteChart';
import WorldMap from './components/WorlMap';
import Navigator from '../../components/navigator/Navigator.jsx';

function Page2() {
  const page2Style = {
    width: '40vw',
    height: '50vh',
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Olympic</span>
      <div className={styles.head}>
        {/*<Navigator />*/}
        <Navigator />
      </div>
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
          <WorldMap style={page2Style} />
        </div>
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
