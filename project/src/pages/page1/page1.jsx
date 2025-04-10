import React from 'react'
import styles from './Page1.module.css'
import img1 from '../../images/one/first.jpg'
import img2 from '../../images/one/page1.jpg'
import img3 from '../../images/one/page2.jpg'
import img4 from '../../images/one/page3.jpg'
import img5 from '../../images/one/page4.jpg'
import img6 from '../../images/one/page5.jpg'
import img7 from '../../images/one/page6.jpeg'

function Page1() {
    return (
    <div>
         <span className={styles.title}>Olympic</span>
           <div className={styles.head}>
                    
                   <span className={styles.choose1} >首页</span>
                   <span className={styles.choose2} >历届奥运数据可视化</span>
                   <span className={styles.choose3} >在线预测</span>
                   <span className={styles.choose4}>操作记录</span>
                   
                   <span className={styles.choose5} >联系我们</span>
                   </div>               
        <div className={styles.shell}>
       
         <img src={img1} alt=""  className={styles.image}/>
          <div className={styles.heading}>
            <h1 className={styles.special}>Faster,Higher,Stronger</h1>
            <h1 className={styles.special}> - Together</h1>
          </div>
          <div className={styles.text}>
            <h1>奥运超燃时刻</h1>
          </div>

          <img src={img2} alt=""  className={styles.image}/>
          <div className={styles.heading}>
            <h1>苏炳添</h1>
          </div>
          <div className={styles.text}>
            <h1>9秒83</h1>
          </div>


          <img src={img3} alt=""  className={styles.image}/>
          <div className={styles.heading}>
            <h1>郑钦文</h1>
          </div>
          <div className={styles.text}>
            <h1>人生就要不虚此行</h1>
          </div>


          <img src={img4} alt=""  className={styles.image}/>
          <div className={styles.heading}>
            <h1>全红婵</h1>
          </div>
          <div className={styles.text}>
            <h1>拿捏！</h1>
          </div>

          <img src={img5} alt=""  className={styles.image}/>
          <div className={styles.heading}>
            <h1>樊振东</h1>
          </div>
          <div className={styles.text}>
            <h1>我从没想过输</h1>
          </div>


          <img src={img6} alt=""  className={styles.image}/>
          <div className={styles.heading}>
            <h1>马龙</h1>
          </div>
          <div className={styles.text}>
            <h1>生命中所有的路口,绝不是尽头</h1>
          </div>


          <img src={img7} alt=""  className={styles.image}/>
          <div className={styles.heading}>
            <h1>潘展乐</h1>
          </div>
          <div className={styles.text}>
            <h1>心怀热爱,无畏前行</h1>
          </div>

        </div>
        </div>
    )
}

export default Page1