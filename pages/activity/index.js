import styled from "styled-components";
import Image from "next/image";
import { ActivityData } from "../../data/ActivityData";
import BannerGif from '../../public/gifs/Robotics_black.gif';
import styles from '../activity/styles.module.css'

const ActivityBanner = styled.div`
    width:100%;
    display: flex;
    justify-content : center;
    align-items: center;
    max-width:650px;
    max-height:650px;
    margin:0 auto;

    @media (max-width:800px){
        margin-top:30px;
    }
`;

const ActivityContainer = styled.div`

    width:calc(100% - 100px);
    margin:0 50px;
    margin-top:60px;
    display:flex;
    flex-direction:column;
    gap:40px;

    @media (min-width:800px) and (max-width:1200px){
        width:calc(100% - 70px);
        margin:0 35px;
}

`;

const ActivitySection = styled.div`
    display: flex;
    padding : 20px 0px;
    justify-content : center;
    align-items: center;
    gap:30px;

    @media (max-width:800px){
        flex-direction:column;
        gap:30px;
    }
`;

const ActivitySectionContentWrapper = styled.div.attrs((props) => props)`
    width : 100%;
`;

const ActivitySectionContentTitle = styled.div`
    line-height:1;
    font-size :65px;
    color : #E72E33;
    padding-bottom :15px;

    @media (max-width:650px){
        font-size:38px;
    }

    @media (min-width:651px) and (max-width:1000px){
        font-size:42px;
    }

`;

const ActivitySectionContent = styled.div`
    line-height:1.5;
    font-size :20px;
    color : white;
    text-align:justify;

    @media (min-width:401px) and  (max-width:650px){
        font-size:22px;
    }

    @media (min-width:651px) and (max-width:800px){
        font-size:24px;
    }

    @media (min-width:1500px){
        font-size:26px;
    }
`;

const ActivitySectionImageWrapper = styled.div`
    width:100%;
    height:100%;

`;

const ActivitySectionImageBg = styled.div.attrs((props) => props)`
        width: 88%;
        background-color: ${props => props.background};
        float: ${props => props.align == 'right' ? 'left' : 'right'};

        @media (max-width:800px){
            width:100%;
        }
`;

const ActivitySectionImage = styled.div.attrs((props) => props)`
        float: ${props => props.align == 'right' ? 'left' : 'right'};
        width:100%;
        min-width:220px;
        height:100%;

        @media (max-width:800px){
            width:100%;
            padding:0;
        }

        @media (min-width:800px){
            min-height:430px;
        }
`;


const getActivityContent = (item) => {
    return <ActivitySectionContentWrapper alignment= {item.align}>
                <ActivitySectionContentTitle $heading={true}>{item.heading}</ActivitySectionContentTitle>
                <ActivitySectionContent>{item.content}</ActivitySectionContent>
            </ActivitySectionContentWrapper>
}

const getActivityImage = (item) => {
    return  <ActivitySectionImageWrapper align= {item.align}>
                <ActivitySectionImageBg align= {item.align} background = {item.background}>
                    <ActivitySectionImage align= {item.align}><Image src={item.image} className={styles.image} alt='EdgeMatrix_images'/></ActivitySectionImage>
                </ActivitySectionImageBg>
            </ActivitySectionImageWrapper>
}

const Activity = () =>{
    return (
                <ActivityContainer>
                    <ActivityBanner>
                        <Image src={BannerGif} alt="EdgeMtarix-iamges" className={styles.image} priority={true}/>
                    </ActivityBanner>
                    {ActivityData.map((item, index)=>{
                        if (item.align=='left'){
                            return <ActivitySection>{getActivityContent(item)}{getActivityImage(item)}</ActivitySection>
                        }else{
                            return <ActivitySection>{getActivityImage(item)}{getActivityContent(item)}</ActivitySection>
                        }
                    })}
            </ActivityContainer>
    )   
}

export default Activity;