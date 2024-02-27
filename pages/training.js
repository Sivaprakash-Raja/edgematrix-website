import styled from "styled-components";
import { TrainingData } from "../data/TrainingData";

const TrainingContainer = styled.div`
    width:calc(100% - 120px);
    margin:0 60px;
    margin-top:60px;
    display:flex;
    flex-direction:column;
    gap:40px;

    @media (max-width:800px){
        width:calc(100% - 70px);
        margin:0 35px; 
    }

`;

const TrainingBanner = styled.div`
    padding-top:160px;
    display: flex;
    justify-content : center;
    align-items: center;

    @media (min-width:800px){
        padding-top:150px;
    }
`;

const TrainingTextContainer = styled.div.attrs((props) => props)`
    color : ${props => props.textColor};
    font-size : ${props => props.textSize};
    margin-bottom : ${props => props.customMarginBottom};
    padding-left : ${props => props.customPaddingLeft};
    line-height : 1.5;
`;

const TrainingTextContainer1 = styled.div`
    color : #e72e33;
    font-size :40px ;
    line-height : 1.5;
    text-align:justify;

    @media (max-width:450px){
        font-size :28px ;
    }

    @media (min-width:800px){
        font-size :60px ;
    }
`;

const TrainingTextContainer2 = styled.div`
    color :white;
    font-size :20px ;
    margin-bottom : 20px;
    padding-left :3px ;
    line-height : 1.5;
    text-align:justify;

    @media (min-width:1000px){
        font-size :23.5px ;
    }
`;

const TrainingTextContainer3 = styled.div`
    color : white;
    font-size :45px ;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width:550px){
        font-size :32px ;
    }
`;

const TrainingTextContainer4 = styled.div`
    color : #e72e33;
    font-size :25px ;
    line-height : 1.5;
    margin-top:20px;

    @media (max-width:450px){
        font-size :18px ;
    }
`;

const TrainingContentSectionWrapper = styled.div`

`;

const TrainingContentSection= styled.div`
    margin : 30px 0px 30px 0px;

`;

const getTraningContentSection = (item) =>{
    return <TrainingContentSection>
                <TrainingTextContainer1 textColor={"#e72e33"} textSize={'60px'}>{item.heading}</TrainingTextContainer1>
                {item.content.map((data,index)=>{
                    return <TrainingTextContainer2 textColor={"rgba(255,255,255,0.8)"} >{data}</TrainingTextContainer2>
                })}
            </TrainingContentSection>
}

const Training = () =>{
    return (
                <TrainingContainer>
                    <TrainingBanner bannerSpace={"125px"}>
                        <div align={"center"}>
                            <TrainingTextContainer3 textColor={"white"} textSize={'45px'}>MATRIX POWER STEP TRAINING PROGRAM</TrainingTextContainer3>
                            <TrainingTextContainer4 textColor={"#e72e33"} textSize={'25px'}>Edge Matrix Corporation provides premium training programs</TrainingTextContainer4>
                        </div>
                    </TrainingBanner>
                    <TrainingContentSectionWrapper>
                        {TrainingData.map((item,index)=>{
                            return getTraningContentSection(item)
                        })}
                    </TrainingContentSectionWrapper>
                    <TrainingBanner bannerSpace={"50px"}>
                        <div align={"center"}>
                            <TrainingTextContainer textColor={"#e72e33"} textSize={'40px'}>Upcoming Courses</TrainingTextContainer>
                            <TrainingTextContainer textColor={"white"} textSize={'20px'}>We intend to provide the most updated and emerging technology-related programs.</TrainingTextContainer>
                        </div>
                    </TrainingBanner>
                </TrainingContainer>
    )
}

export default Training;