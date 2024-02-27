import React from 'react'
import {Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import styles from '../aboutSection/aboutSection.module.css'
import Image from 'next/image'
import Globe from '../../../public/images/homePageImages/PngItem1.png'


const AboutUsSection = () => {

    const theme = useTheme()
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                src={Globe}
                alt="EdgeMatrix-HomepageImage"
                className={styles.images}
                width={300}
                height={200}
                priority={true}
                />
            </div>

            <div className={styles.textContainer} >
                <div style={{ padding: theme.spacing(2) }} className={styles.paperContainer}>
                    <Typography variant="h6" className={`${styles.title} ${styles.headings}`}>ABOUT US</Typography>
                    <Typography className={styles.firstContent}>
                        A great world is the result of best minds on the planet
                    </Typography>
                    <Typography className={styles.secondContent}>
                        Edge Matrix Multinational Corporation is a corporate initiative that uses Artificial Intelligence, Robotics and Data Science to make humanity more powerful. Therefore we act as the Gateway to Industry 5.0. It is the result of great visionaries innovative ideas . We proved our expertise at the field of Artificial Intelligence, AI - IoT and Robotics, by developing a variety of products and services around the globe.                     </Typography>
                </div>
            </div>
        </div>
  )
}

export default AboutUsSection