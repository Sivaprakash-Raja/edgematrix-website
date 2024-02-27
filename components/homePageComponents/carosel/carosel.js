import React from 'react'
import styled from 'styled-components'
import styles from '../carosel/carosel.module.css'
import Image from 'next/image'
import first from '../../../public/images/homePageImages/poseEstimation.jpg'
import second from '../../../public/images/homePageImages/selfDriving.jpg'
import third from '../../../public/images/homePageImages/segmentation.png'
    const TextContainer = styled.p`
        font-size:24px;
        font-weight:bold;
        text-align:center;
        @media (min-width:500px) and (max-width:570px){
            font-size:12px
        }
        @media (min-width:571px) and (max-width:700px){
            font-size:21px
        }
    `
    const TitleTextContainer = styled.div`    
        font-size:20px;
        font-weight:bold;
        @media (min-width:500px) and (max-width:800px) {
            font-size:24px;
        }
        @media (min-width:801px) and (max-width:1000px) {
            font-size:26px;
        }
        @media (min-width:1001px) and (max-width:1200px) {
            font-size:28px;
        }
        @media (min-width:1200px) {
            font-size:32px;
        }    
    `;

const Carosel = () => {   
    const data = [
        {
            image:first,
            content:'Pose Estimation'
        },
        {
            image:second.src,
            content:'Autonomous Driving Vehicle'
        },
        {
            image:third,
            content:'Segmentation'
        },
    ]

  return (
    <div className={styles.container}>
        <TitleTextContainer>Explore More</TitleTextContainer>
        <div className={styles.innerContainer}>
            {data.map((data,index)=>(
                <div className={styles.cardContainer} key={index}>
                    <div className={styles.imageContainer}>
                        <Image src={data.image} alt='edgeMatrix' layout='fill' objectFit='cover' className={styles.image} priority={true}/>
                    </div>
                    <TextContainer>
                        {data.content}
                    </TextContainer>
                </div>    
            ))}
        </div>
    </div>
  )
}

export default Carosel