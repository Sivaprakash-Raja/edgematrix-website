import React from 'react'
import styles from '../services/service.module.css'
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const Services = () => {
  return (
        <div className={styles.container}>
            <div className={styles.backgroundLayer}>
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        Our Purpose is To Deliver Excellence in Service and Execution
                    </p> 
                </div>
                <div className={styles.commonContainer}>
                    <div class={styles.firstContainer}>
                        <div class={styles.one}>
                            <div className={styles.boxText} id={styles.one}>
                                <p className={styles.innerText}>Matrix Voice AI</p>
                                <div className={styles.arrowContainer}>
                                    <IoArrowForwardCircleOutline className={styles.arrow}/>
                                </div>
                            </div>
                        </div>
                        <div class={styles.two}>
                            <div className={styles.boxText} id={styles.two}>
                                <p className={styles.innerText}>Data Science</p>
                                <div className={styles.arrowContainer}>
                                    <IoArrowForwardCircleOutline className={styles.arrow} />
                                </div>
                            </div>
                        </div>
                        <div class={styles.three}>
                            <div className={styles.boxText} id={styles.three}>
                                <p className={styles.innerText}>Business Intelligence</p>
                                <div className={styles.arrowContainer}>
                                    <IoArrowForwardCircleOutline className={styles.arrow} />
                                </div>
                            </div>
                        </div>
                        <div class={styles.four}>
                            <div className={styles.boxText} id={styles.four}>
                                <p className={styles.innerText}>Digital Twin</p>
                                <div className={styles.arrowContainer}>
                                    <IoArrowForwardCircleOutline className={styles.arrow}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondContainer}>
                        <div class={styles.five}>
                            <div className={styles.boxText} id={styles.five}>
                                <p className={styles.innerText}>Matrix Vision AI</p>
                                <div className={styles.arrowContainer}>
                                    <IoArrowForwardCircleOutline className={styles.arrow}/>
                                </div>
                            </div>
                        </div>
                        <div class={styles.six}>
                            <div className={styles.boxText} id={styles.six}>
                                <p className={styles.innerText}>Robotics</p>
                                <div className={styles.arrowContainer}>
                                    <IoArrowForwardCircleOutline className={styles.arrow}/>
                                </div>
                            </div>
                        </div>
                        <div class={styles.seven}>
                            <div className={styles.boxText} id={styles.seven}>
                                <p className={styles.innerText}>Predictive Analytics</p>
                                <div className={styles.arrowContainer}>
                                    <IoArrowForwardCircleOutline className={styles.arrow}/>
                                </div>
                            </div>
                        </div>
                        <div class={styles.eight}>
                            <div className={styles.boxText} id={styles.eight}>
                                <p className={styles.innerText}>IOT</p>
                                <div className={styles.arrowContainer}>
                                    <IoArrowForwardCircleOutline className={styles.arrow}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Services