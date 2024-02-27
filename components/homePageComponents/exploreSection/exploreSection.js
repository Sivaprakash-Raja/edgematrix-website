import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import FirstImage from '../../../public/images/homePageImages/digiTwin.jpg'

const Container = styled.div`
  width: 100%;
  height:100%;
  background: radial-gradient(circle,rgb(85 169 184) 0%, rgba(130,130,130,1) 65%);
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width:500px){
    height:100%;
  }
`;

const SecondContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  gap:50px;
  @media (max-width:500px){
    width:100%;
    height:100%;
    flex-direction:column;
  }
  @media (min-width:749px) and (max-width:800px){
    width:100%;
    height:100%;
  }
  @media (min-width:500px){
    gap:20px
  }
`;

const ImageContainer = styled.div`
    flex:1;
    width:100%;
    height:auto;
`;

const TextContainer = styled.div`
  flex:1;
  width:100%;
  display:flex;
  flex-direction:column;
  gap:15px;
  justify-content:center;
  align-items:center;
  margin:20px;
  @media (max-width:500px){
    margin:20px 0px;
  }
  @media (min-width:1440px){
    justify-content:center;
  }
`;

const TitleContainer = styled.div`
  font-size:42px;
  font-weight:bold;
  color: #e72e33
  @media (max-width:350px){
    font-size:25px
  }
  @media screen and  (min-width:351px) and  (max-width:500px) {
    font-size:28px;
  }
  @media screen and  (min-width:501px) and  (max-width:600px) {
    font-size:22px;
  }
  @media screen and  (min-width:601px) and  (max-width:850px) {
    font-size:30px;
  }
  @media (min-width:851px) and  (max-width:1000px) {
    font-size:32px;
  }
  @media (min-width:1001px) and  (max-width:1150px) {
    font-size:34px;
  }
  @media (min-width:1151px) and  (max-width:1300px) {
    font-size:36px;
  }
  @media (min-width:1301px) and  (max-width:1500px) {
    font-size:38px;
  }
`

const FirstContent = styled.div`
  font-size:26px;
  font-weight:bold;
  line-height:140%;
  text-align:justify;
  padding:20px;
  @media screen and (max-width:350px) {
    font-size:14px;
  }
  @media (min-width:351px) and  (max-width:500px) {
    font-size:17px;
  }
  @media (min-width:501px) and  (max-width:600px) {
    font-size:14px;
    line-height:130%;
  }
  @media (min-width:601px) and  (max-width:850px) {
    font-size:16px;
    line-height:130%;
  }
  @media (min-width:851px) and  (max-width:1000px) {
    font-size:18px;
    line-height:130%;
  }
  @media (min-width:1001px) and  (max-width:1150px) {
    font-size:20px;
  }
  @media (min-width:1151px) and  (max-width:1300px) {
    font-size:22px;
  }
  @media (min-width:1301px) and  (max-width:1500px) {
    font-size:24px;
  }
`;

const Imaged = styled(Image)`
  width:100%;
  height:100%;
`

const ExploreSection = () => {
  return (
    <Container>
      <SecondContainer>
          <ImageContainer>
            <Imaged src={FirstImage} alt='Edgematrix_Image'/>
          </ImageContainer>
          <TextContainer>
            <TitleContainer>
                Digital Twin
            </TitleContainer>
            <FirstContent>
              A digital twin requires data about an object or process in order for a virtual model to be created that can represent the behaviours or states of the real world item or procedure. This data may relate to the lifecycle of a product and include design specifications, production processes or engineering information.
            </FirstContent>
          </TextContainer>
      </SecondContainer>
    </Container>
  )
}

export default ExploreSection