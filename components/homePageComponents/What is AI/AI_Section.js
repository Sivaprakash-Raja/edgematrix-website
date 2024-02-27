import React from 'react'
import styled from 'styled-components'
import  styles  from '../What is AI/articial.module.css'

const CommonContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    gap:20px;

    @media (max-width:800px){
        flex-direction:column
    }
`;

const TextContainer = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    gap:12px;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(231,46,51,1) 47%, rgba(1,1,1,1) 84%);
`;

const Title = styled.div`
    font-size:45px;
    font-weight:bold;
    padding:0px 30px 0px 30px;
    @media (max-width:450px){
        font-size:36px;
    }
    @media (min-width:801) and (max-width:1000px){
        font-size:28px
    }
`;

const Content = styled.div`
    font-size:24px;
    font-weight:bold;
    line-height:150%;
    text-align:justify;
    padding:30px;
    @media (max-width:450px){
        font-size:18px;
    }
    @media (min-width:451px) and (max-width:800px){
        font-size:20px;
    }
    @media (min-width:801px) and (max-width:1000px){
        font-size:14px
    }
    @media (min-width:1001px) and (max-width:1350px){
        font-size:18px
    }
    @media (min-width:1351px){
        font-size:26.5px
    }
`;

const VideoContainer = styled.div`
    flex:1;
    width:100%;
    height:100%

    @media (min-width:800px) and(max-width:1300px){
        height:auto
    }

`;



const AI_Section = () => {
  return (
    <CommonContainer>
        <TextContainer>
            <Title>
                What is Artificial Intelligence ?
            </Title>
            <Content>
                In general, AI systems work by ingesting large amounts of labeled training data, analyzing the data for correlations and patterns, and using these patterns to make predictions about future states. In this way, a chatbot that is fed examples of text can learn to generate lifelike exchanges with people, or an image recognition tool can learn to identify and describe objects in images by reviewing millions of examples. New, rapidly improving generative AI techniques can create realistic text, images, music and other media.
            </Content>
        </TextContainer>
        <VideoContainer>
            <video preload='auto' className={styles.video} autoPlay loop muted playsInline>
                <source 
                    src='/video/video.mp4'
                    type="video/mp4"
                />
                your browser doesnt support
            </video>   
        </VideoContainer>
    </CommonContainer>
  )
}

export default AI_Section