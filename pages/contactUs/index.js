import React from 'react'
import styles from '../../pages/contactUs/styles.module.css'
import styled from "styled-components";
import {  Grid, Card, CardContent, Typography, Link , TextField } from '@mui/material';


export const contactForm = { Name:"", Email:"", Mobile:"", Subject:"", Message:"" }

const ContactFormWrapper = styled.div`
`;

const ContactFormContainer = styled.div`
    flex:0.8;
    background-color : rgba(255,255,255,0.9);
    width:50vw;
    margin:auto;
    margin-top:50px;
    padding:50px 8px 80px 8px;

    @media (max-width:700px){
      width:80vw;
  }

`;

const ContactAddressSectionText = styled.div.attrs((props) => props)`
    color : ${props => props.textColor};
    font-size : ${props => props.textSize};
    padding-bottom : ${props => props.bottomPadding};
    padding-top : ${props => props.topPadding};
    width : ${props => props.customWidth};
    font-family : ${props => props.fontCursive};
    font-weight : 800;
`;

const getContactFormWrapper = () =>{
  return <ContactFormWrapper align={"center"}>
              {Object.keys(contactForm).map((item, index) => {
                      return <TextField id={item} label={item} variant="outlined" style={{width:'70%', margin:'20px'}}
                      InputProps={{sx: {'&:focus-within fieldset, &:focus-visible fieldset': {border: '1.4px solid black !important'}}}}/>
                  })
              }
              <div className={styles.FormSubmitButton}>Submit</div>
          </ContactFormWrapper>
}

const ContactUs = () => {
  return (
    <>
        <div className={styles.customDesign}>
          <div className={styles.textContainer}>
            <p>GIVE US A SHOT</p>
            <div className={styles.underline}></div>
          </div>
        </div>
        <div className={styles.halfDiv}>
          <p>
            USE THE BELOW FORM TO DROP US AN EMAIL. OLD-FASHIONED PHONE CALLS WORKS TOO -  +91 83005 75800
          </p>
        </div>
        <div className={styles.trianglediv}></div>
        <ContactFormContainer align = {"center"} >
          <ContactAddressSectionText align={"center"} fontCursive={"cursive"} textColor={"black"} topPadding={"30px"} bottomPadding = {"30px"} textSize = {"35px"}>Interact with us</ContactAddressSectionText>
          {getContactFormWrapper()}
        </ContactFormContainer>
        <Grid container spacing={3} className={styles.cover_section}>
            <Grid item md={4} sm={6} xs={12}>
                <Card className={styles.card}>
                    <CardContent className={`${styles.cover_over} ${styles.itemA}`}>
                        <Typography variant="h5" component="h2" className={styles.h1}>08, The Green ste.<br/> A Dover Delaware - 19901 <br/> +1 (929) 207-1726 <br/>writeus@edgematrixcorp.com</Typography>
                        <Typography variant="body2" className={styles.price}>United States</Typography>
                        <div className={styles.cardBack}>
                            <Link href="#">Contact Us</Link>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <Card className={styles.card}>
                    <CardContent className={`${styles.cover_over} ${styles.itemB}`}>
                        <Typography variant="h5" component="h2" className={styles.h1}>No : 9,<br/> Subramaniyapuram 4th st, <br/> Madurai - 625011 <br/> +91 83005 75800 <br/> writeus@edgematrixcorp.com</Typography>
                        <Typography variant="body2" className={styles.price}>India</Typography>
                        <div className={styles.cardBack}>
                            <Link href="#">Contact Us</Link>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <Card className={styles.card}>
                    <CardContent className={`${styles.cover_over} ${styles.itemC}`}>
                        <Typography variant="h5" component="h2" className={styles.h1}>Giuseppe Garibaldiego 7,<br/> 04-078 Warszawa. <br/> +48 793 916-894 <br/> anish@edgematrixcorp.com</Typography>
                        <Typography variant="body2" className={styles.price}>Poland</Typography>
                        <div className={styles.cardBack}>
                            <Link href="#">Contact Us</Link>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </>
  )
}

export default ContactUs