import React from 'react'
import styles from '../Footer/footer.module.css'
import Image from 'next/image'
import { MdLocationPin } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from '../../public/images/homePageImages/Logo.png'


const Footer = () => {

    const data = [<FaFacebook className={styles.links}/>,<AiFillTwitterCircle className={styles.links}/>,<FaLinkedin className={styles.links}/>,<FaInstagram className={styles.links} />]

  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div className={styles.imageContainer}>  
                <Image className={styles.image} src={Logo} alt='EdgeMatrix logo' priority={true} />
            </div>
            <div className={styles.secondContainer}>
                <div className={styles.firstPart}>
                    <div className={styles.symbolContainer}>
                        <MdLocationPin className={styles.location}/>
                    </div>
                    <div className={styles.addressContainer}>
                        <p>08, The Green</p>
                        <p>Ste, A Dover</p>
                        <p>Delaware-19901</p>
                        <p>United States</p>
                    </div>
                </div>
                <div className={styles.secondPart}>
                    <p id={styles.title}>Contact Us</p>
                    <p>+1(929)207-1726</p>
                    <p>+91 8300575800</p>
                </div>
                <div className={styles.thirdPart}>
                    <p id={styles.title}>Social Networks</p>
                    <div className={styles.linksContainer}>
                        {data.map((data,index)=>(
                            <div className={styles.socialLinksImage} key={index}>
                                {data}
                            </div>
                        ))}
                    </div>
                    <p>Term of use</p>
                    <p>Privacy policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer