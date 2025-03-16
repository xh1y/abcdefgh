import React from 'react';
import styles from './Page1.module.css';

function Page1() {
  

    return (
        <div className={styles.shell}>
            {/* 第一部分 */}
            <div className={`${styles.image} ${styles.image1}`}></div>
            <div className={styles.heading}>
                <h1>Faster, Higher, Stronger - Together</h1>
            </div>
            <div className={styles.text}>
                <h1>奥运超然时刻</h1>
            </div>

            {/* 第二部分 */}
            <div className={`${styles.image} ${styles.image2}`}></div>
            <div className={styles.heading}>
                <h1>苏炳添</h1>
            </div>
            <div className={styles.text}>
                <h1>9秒83</h1>
            </div>

            {/* 第三部分 */}
            <div className={`${styles.image} ${styles.image3}`}></div>
            <div className={styles.heading}>
                <h1>郑钦文</h1>
            </div>
            <div className={styles.text}>
                <h1>人生就要不虚此行</h1>
            </div>

            {/* 第四部分 */}
            <div className={`${styles.image} ${styles.image4}`}></div>
            <div className={styles.heading}>
                <h1>全红婵</h1>
            </div>
            <div className={styles.text}>
                <h1>拿捏!</h1>
            </div>

            {/* 第五部分 */}
            <div className={`${styles.image} ${styles.image5}`}></div>
            <div className={styles.heading}>
                <h1>樊振东</h1>
            </div>
            <div className={styles.text}>
                <h1>我从没想过输</h1>
            </div>

            {/* 第六部分 */}
            <div className={`${styles.image} ${styles.image6}`}></div>
            <div className={styles.heading}>
                <h1>马龙</h1>
            </div>
            <div className={styles.text}>
                <h1>生命的路口,绝不是尽头</h1>
            </div>
          

            {/* 第七部分 */}
            <div className={`${styles.image} ${styles.image7}`}></div>
            <div className={styles.heading}>
                <h1>潘展乐</h1>
            </div>
            <div className={styles.text}>
                <h1>心怀热爱,无畏前行</h1>
            </div>
        </div>
    );
}

export default Page1;