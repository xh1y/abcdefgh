import React from 'react'
import styles from './Page2.module.less'
import { useNavigate } from 'react-router-dom';
import HostChart from './components/HostChart';
import CountChart from './components/CountChart'
import src1 from '../../images/two/circle.png'
import AthleteChart from './components/AthleteChart';
import MedalCard from './components/MedalCard';
import Title from '../../components/Title/Title';


function Page2(){
  const page2Style={
    width:'40vw',
    height:'50vh'
  }
    const navigate=useNavigate()
    const handleNavigation = (path) => {
      navigate(path);
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
          <MedalCard />
          </div>
          <div className={styles.right}>
            <div className={styles.AthleteChart}>
           <AthleteChart />
            </div>
          <img src={src1} className={styles.circle}/>
        </div>
        </div>

)



}
export default Page2;