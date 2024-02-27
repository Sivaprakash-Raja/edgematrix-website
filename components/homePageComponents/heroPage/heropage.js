import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Logo from '../../../public/images/homePageImages/Logo.png'
import styles from '../heroPage/hero.module.css'

    const CommonContainer = styled.div`
        position: relative;
        width:100%;
        height:100vh;
        margin-top:60px;
        display:flex;
        justify-content:center;
        align-items:center;
    `

    const Container = styled.div`
        position: absolute;
        max-width:300px;

        @media (max-width:400px){
            margin:0
        }

    `;

    const StyledImage = styled(Image)`
        width:100%;
        height:auto;
        z-index:6;
    `;


const Heropage = () => {    

  return (
    <CommonContainer className={styles.container}>
        <video preload='auto' className={styles.video} autoPlay loop muted playsInline>
            <source 
                src='/video/landingpage.mp4'
                type="video/mp4"
            />
        </video> 
        <div className={styles.overlay}></div>
        <Container>
            <StyledImage src={Logo} alt='logo'  />
        </Container>
    </CommonContainer>
  )
}

export default Heropage