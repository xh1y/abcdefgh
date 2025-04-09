import { useState } from 'react'
import styles from './Page5.module.less'

function Page5(){
     const [click,setClick]=useState(false)
      function handleClick(){
           setClick(!click)
      }
    return (
        <div className={styles.container}>
                 <span className={styles.title}>Olympic</span>
   <div className={styles.head}>
            
           <span className={styles.choose1} >首页</span>
           <span className={styles.choose2} >历届奥运数据可视化</span>
           <span className={styles.choose3} >在线预测</span>
           <span className={styles.choose4}>操作记录</span>
           
           <span className={styles.choose5} onClick={handleClick}>联系我们</span>
           </div>
           {click &&(<div className={styles.content}>
             <p>
                We'd  like to hear from you 
             </p>
             <p>
                If you have any further questions,please let us know
             </p>
             <input type="text" name="" id="" className={styles.question}/>
             <button className={styles.btn}>提交</button>
           </div>)}
        </div>
     
    )
}
export default Page5