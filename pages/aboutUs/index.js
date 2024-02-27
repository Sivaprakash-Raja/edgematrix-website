import styled from "styled-components";
import Image from "next/image";
import BannerGif from '../../public/gifs/Robotics_black.gif'
import Digital from '../../public/images/aboutPageImages/aboutPageImage.png'
import Globe from '../../public/images/aboutPageImages/visions.png'
import styles from '../../pages/aboutUs/about.module.css'
import CountsPage from "../../components/homePageComponents/CountsPage/countsPage";

const AboutContainer = styled.div`
    width:calc(100% - 50px);
    margin:0 25px;
    margin-top:100px;
    display:flex;
    flex-direction:column;
    gap:40px;

    @media (min-width:500px){
        width:calc(100% - 100px);
        margin:100px 50px; 
}
`;

const AboutBanner = styled.div`
    width:100%;
    max-width:650px;
    max-height:650px;
    display: flex;
    justify-content : center;
    align-items: center;
`;

const AboutTitle = styled.div`
    color: red;
    font-size: 40px;

    @media (max-width:600px){
        font-size: 32px;  
    }
`;

const AboutHeading = styled.div`
    color: white;
    font-size: 76px;
    @media (max-width:600px){
        font-size:40px;
    }

    @media (min-width:601px) and (max-width:1000px){
        font-size:60px;
    }
`;

const AboutContent = styled.div`
    color: white;
    font-size: 20px;
    padding-top : 10px;
    line-height: 2;
    text-align:justify;

    @media (min-width:1000px) and (max-width:1400px){
        font-size:24px;
    }

    @media (min-width:1401px) and (max-width:1800px){
        font-size:26px;
    }
    @media (min-width:1801px){
        font-size:30px;
    }
`;

const AboutUsWrapper = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
`;

const FlexContainer = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    width:100%;
    height:auto;
    gap:20px;

    @media (max-width:750px){
        flex-direction:column;
    }
`;

const FlexImageContainer = styled.div`
    flex:1;
    width :100%;
`;

const FlexContentContainer = styled.div`
    flex:1;
    width :100%;
`;

const ClientWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
`;

const ClientText = styled.div`
    color: white;
    line-height: 1.5;
    text-decoration: ${props => props.$heading ? "none" : "underline"};
    font-size : ${props => props.$heading ? "50px" : "18px"};
 
    @media (max-width:600px){
       font-size : ${props => props.$heading ? "30px" : "18px"};
    }
`

const About = () => {
    return (
    <AboutContainer>
        <div className={styles.ImageContainer}>
        <AboutBanner>
            <Image src={BannerGif}  className={styles.image} alt='Edgematrix_Image' priority={true}/>
        </AboutBanner>
        </div>
        <ClientWrapper>
            <ClientText $heading={false}>WE DO IT FOR YOU WITH HAPPINESS</ClientText>
            <ClientText $heading={true}>We work through every aspect at the planning</ClientText>
            <CountsPage aboutPage='aboutPage'/>
        </ClientWrapper>
        <FlexContainer>
            <FlexContentContainer>
                <AboutTitle>VISION</AboutTitle>
                <AboutContent>Artificial Intelligence and Robotics are said to be the world's most powerful technologies. Edge Matrix works to integrate these powerful technologies into human lives in order to drive humanity into the Industry 5.0 and evolve the human race to rule the age of intelligent machines.</AboutContent>
            </FlexContentContainer>
            <FlexImageContainer><Image src={Globe} className={styles.image} alt="Edgematrix_image"/></FlexImageContainer>
        </FlexContainer>
        <FlexContainer>
            <FlexImageContainer><Image src={Digital} height={350} className={styles.image} alt="EdgeMatrix_image"/></FlexImageContainer>
            <FlexContentContainer>
                <AboutTitle>MISSION</AboutTitle>
                <AboutContent>We strive to solve everyday problems all over the world by utilizing Artificial Intelligence, Robotics, data Science, Internet of Things, Digital Twin, Blockchain, and Big data analytics. Our mission is to help mankind do difficult and dangerous tasks easily using technology.</AboutContent>
            </FlexContentContainer>
        </FlexContainer>
        <AboutUsWrapper>
            <AboutTitle>ABOUT US</AboutTitle>
            <AboutHeading>A great world is the result of the best minds on the planet</AboutHeading>
            <AboutContent>Edge Matrix Multinational Corporation is a corporate initiative that uses Artificial Intelligence, Robotics and Data Science to make humanity more powerful. Therefore we act as the Gateway to Industry 5.0. It is the result of great visionaries innovative ideas . We proved our expertise at the field of Artificial Intelligence, AI - IoT and Robotics, by developing a variety of products and services around the globe. We have expert teams working on a variety of technologies. With our work, we demonstrate that we are more competitive in the industry.</AboutContent>
        </AboutUsWrapper>
    </AboutContainer>
    )
}

export default About;