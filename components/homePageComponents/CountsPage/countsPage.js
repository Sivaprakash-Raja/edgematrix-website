import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import styles from '../CountsPage/countsPage.module.css'
import {numbers} from '../../../data/CountsPageData'

const CountsPage = () => {
    const [counterSetUp,setCounterSetUp] = useState(false)
  return (
    <div className={styles.container}>
        <div className={styles.commonContainer}>
            <div className={styles.Title}>OUR SUCCESS</div>
            <div className={styles.numberContainer}>
                {numbers.map((number,index)=>(
                    <ScrollTrigger onEnter={()=>setCounterSetUp(true)} onExit={()=>setCounterSetUp(false)} key={index}>
                            {counterSetUp && 
                            <div className={styles.verticalSpacing}>
                                <p  className={styles.containerForSpace}>
                                    <CountUp start={0} end={number.number} duration={5} delay={0} className={styles.numbers}/>
                                    <span className={styles.plus}>+</span>
                                </p>
                                <p className={styles.dynamicContent}>{number.content}</p>
                            </div>
                            }
                    </ScrollTrigger>
                ))}                
            </div>
        </div>
    </div>
  )
}

export default CountsPage