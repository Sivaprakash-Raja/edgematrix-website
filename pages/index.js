import dynamic from 'next/dynamic'
import React from 'react'
import styles from '../styles/styles.module.css'

const AboutUsSection = dynamic(() => import('../components/homepageComponents/aboutSection/aboutUsSection'));
const HeroPage = dynamic(() => import('../components/homepageComponents/heroPage/heropage'));
const CountsPage = dynamic(() => import('../components/homepageComponents/CountsPage/countsPage'));
const ExploreSection = dynamic(() => import('../components/homepageComponents/exploreSection/exploreSection'));
const AI_Section = dynamic(() => import('../components/homepageComponents/What is AI/AI_Section'));
const Service = dynamic(() => import('../components/homepageComponents/serviceSection/service'));
const Carosel = dynamic(() => import('../components/homepageComponents/carosel/carosel'));


const index = () => {
  return (
    <div className={styles.Container}>
      <HeroPage/>
      <AboutUsSection/>
      <CountsPage/>
      <ExploreSection/>
      <AI_Section/>
      <Service/>
      <Carosel/>
    </div>
  )
}

export default index;