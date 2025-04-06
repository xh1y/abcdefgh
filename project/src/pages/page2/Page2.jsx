import React from 'react'
import styles from './Page2.module.less'

import HostChart from './components/HostChart';
import CountChart from './components/CountChart';
import src1 from '../../images/two/circle.png'
function Page2(){
  
return (
    <div className={styles.container}>
        <span className={styles.title}>Olympic</span>
       <div className={styles.head}>
        <span className={styles.choose1} >首页</span>
        <span className={styles.choose2}>历届奥运数据可视化</span>
        <span className={styles.choose3} >在线预测</span>
        <span className={styles.choose4}>操作记录</span>
        
        <span className={styles.choose5} >联系我们</span>
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
              
          </div>
          <div className={styles.right}>
            <div className={styles.AthleteChart}>
           
            </div>
          <img src={src1} className={styles.circle}/>
        </div>
        </div>

)



}
export default Page2;