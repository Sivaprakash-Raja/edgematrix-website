import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import styles from '../serviceSection/service.module.css'

const Service = () =>{
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <div className={styles.firstBox}>
          <div className={styles.boxText} id={styles.one}>
            <p className={styles.roboticsText}>Robotics</p>
            <div className={styles.arrowContainer}>
                <IoArrowForwardCircleOutline className={styles.arrow}/>
            </div>
          </div>
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.secondBox}>
            <div className={styles.boxText} id={styles.one}>
              <p className={styles.innerText}>Matrix Voice AI</p>
              <div className={styles.arrowContainer}>
                  <IoArrowForwardCircleOutline className={styles.arrow}/>
              </div>
            </div>
          </div>
          <div className={styles.thirdBox}>
            <div className={styles.boxText} id={styles.one}>
              <p className={styles.innerText}>Matrix Vision AI</p>
              <div className={styles.arrowContainer}>
                  <IoArrowForwardCircleOutline className={styles.arrow}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.title}>Service We Provide</p>
        <p className={styles.subTitle}>Our Purpose is To Deliver Excellence in Service and Execution</p>
        <p className={styles.Content}>Achievers’ uses a few visual elements, like the loading percentages and icons, to draw users in and get them interested. The design gets audiences excited enough to keep scrolling. It’s also simple enough to prevent users from feeling overwhelmed.Achievers has a well-balanced and straightforward services page layout that focuses on the user and integrates small moving elements to catch the reader’s attention and keep them engaged.</p>
        <p className={styles.Content}>
          Achievers has a well-balanced and straightforward services page layout that focuses on the user and integrates small moving elements to catch the reader’s attention and keep them engaged.
        </p>
      </div>
    </div>
  )
}

export default Service