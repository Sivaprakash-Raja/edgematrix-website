import React from 'react'
import styles from '../events/styles.module.css'
import Image from 'next/image'
import FirstImage from '../../public/images/Events/Events/2.jpg'
import SecondImage from '../../public/images/Events/Events/3.jpeg'
import ThirdImage from '../../public/images/Events/Events/5.jpeg'
import FourthImage from '../../public/images/Events/Events/12.jpeg'
import FivthImage from '../../public/images/Events/Events/7.jpg'
import SixthImage from '../../public/images/Events/Events/1.jpeg'
import SeventhImage from '../../public/images/Events/Events/22.jpg'
import EightImage from '../../public/images/Events/Events/20.jpeg'
import NinthImage from '../../public/images/Events/Events/16.jpeg'
import TenthImage from '../../public/images/Events/Events/31.jpeg'
import EleventhImage from '../../public/images/Events/Events/14.jpg'
import TwelevethImage from '../../public/images/Events/Events/4.jpeg'
import ThirteenImage from '../../public/images/Events/Events/8.jpg'
import FourteenImage from '../../public/images/Events/Events/11.jpg'
import FiveteenImage from '../../public/images/Events/Events/20.jpeg'
import SixteenImage from '../../public/images/Events/Events/18.jpeg'
import SeventeenImage from '../../public/images/Events/Events/26.jpeg'
import EighteenImage from '../../public/images/Events/Events/28.jpg'
import styled from 'styled-components'


let alt = 'Events Image'

const InnerContainer = styled.div`

    width:100%;
    display:flex;
    flex-direction:column;
    gap:20px;

    @media (min-width:451px) and (max-width:800px){
        display:flex;
        gap:20px
    }

`

const Events = () => {
  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            <div className={styles.componentContainer}>
                <div className={styles.imageContainer} id={styles.special1}>
                    <Image src={FirstImage} alt={alt} className={styles.image} id={styles.special} priority={true}/>
                </div>
                <InnerContainer className={styles.one}>
                    <div className={styles.imageContainer}>
                        <Image src={SecondImage} alt = {alt} className={styles.image} priority={true}/>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image src={ThirdImage} alt = {alt} className={styles.image} priority={true}/>
                    </div>
                </InnerContainer>
                <InnerContainer className={styles.two}>
                    <div className={styles.imageContainer}>
                        <Image src={FourthImage} alt = {alt} className={styles.image} priority={true}/>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image src={FivthImage} alt = {alt} className={styles.image} priority={true}/>
                    </div>
                </InnerContainer>    
            </div>
            <div className={styles.SecondContainer}>
                <div className={styles.imageContainer} id={styles.one}>
                    <Image src={SixthImage} alt='Events Image' className={styles.image} priority={true}/>
                </div>
                <div className={styles.imageContainer} id={styles.two}>
                    <Image src={SeventhImage} alt='Events Image' className={styles.image} priority={true}/>
                </div>
                <div className={styles.imageContainer} id={styles.three}>
                    <Image src={EightImage} alt='Events Image' className={styles.image} priority={true}/>
                </div>
                <div className={styles.imageContainer} id={styles.four}>
                    <Image src={NinthImage} alt='Events Image' className={styles.image} priority={true}/>
                </div>
            </div>
            <div className={styles.ThirdContainer}>
                <div className={styles.imageContainer} id={styles.five}>
                    <Image src={TenthImage} alt='Events Image' className={styles.image} priority={true}/>
                </div>
                <div className={styles.imageContainer} id={styles.six}>
                    <Image src={EleventhImage} alt='Events Image' className={styles.image} priority={true}/>
                </div>
                <div className={styles.imageContainer} id={styles.seven}>
                    <Image src={TwelevethImage} alt='Events Image' className={styles.image} id={styles.special} priority={true}/>
                </div>
                <div className={styles.imageContainer} id={styles.eight}>
                    <Image src={ThirteenImage} alt='Events Image' className={styles.image} priority={true}/>
                </div>
            </div>
            <div className={styles.componentContainer}>
                <div className={styles.imageContainer} id={styles.special2}>
                    <Image src={FourteenImage} alt={alt} className={styles.image} priority={true}/>
                </div>
                <InnerContainer className={styles.one}>
                    <div className={styles.imageContainer}>
                        <Image src={FiveteenImage} alt = {alt} className={styles.image} priority={true}/>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image src={SixteenImage} alt = {alt} className={styles.image} priority={true}/>
                    </div>
                </InnerContainer>
                <InnerContainer className={styles.two}>
                    <div className={styles.imageContainer}>
                        <Image src={SeventeenImage} alt = {alt} className={styles.image} priority={true}/>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image src={EighteenImage} alt = {alt} className={styles.image} priority={true}/>
                    </div>
                </InnerContainer>   
            </div>
        </div>
    </div>
  )
}

export default Events