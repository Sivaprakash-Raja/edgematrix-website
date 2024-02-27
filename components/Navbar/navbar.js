import React, { useEffect, useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import styles from '../Navbar/navbar.module.css'
import Logo from '../../public/images/homePageImages/Logo.png'
import Image from "next/image";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";


const Navbar = () => {

  const router = useRouter()  

  const [value, setValue] = useState('/');
  const theme = createTheme({
    breakpoints : {
        values:{
            md:1100
        }
    },
    components : {
        MuiTabs:{
            styleOverrides:{
                indicator:{
                    backgroundColor:'#E72E33'
                }
            }
        }
    }
  })
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(()=>{
    setValue(router.pathname)
  },[router.pathname])

  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{ background: 'black',padding:'30px 20px' }} >
        <Toolbar>
            <div className={styles.imageContainer}>
                <Image src= {Logo} className={styles.image} alt="EdgeMatrix_Images" priority={true}/>
            </div>
            {isMatch ? (
                <>
                    <DrawerComp />
                </>
            ) : (
                <>
                    <Tabs
                        sx={{ marginLeft: "auto",fontSize:'16px' }}
                        textColor="white"
                        value={value}
                        onChange={(e, value) => setValue(value)}
                    >
                        <Tab label="Home" value='/' component={Link} href='/' sx={{fontSize:'16px' }} />
                        <Tab label="About Us" value='/aboutUs' component={Link} href='/aboutUs' sx={{fontSize:'16px' }}/>
                        <Tab label="Services" value='/services' component={Link} href='/services' sx={{fontSize:'16px' }}/>
                        <Tab label="Activity" value='/activity' component={Link} href='/activity' sx={{fontSize:'16px' }}/>
                        <Tab label="Trainings" value='/training' component={Link} href='/training' sx={{fontSize:'16px' }}/>
                        <Tab label="Contact Us" value='/contactUs' component={Link} href='/contactUs' sx={{fontSize:'16px' }}/>
                        <Tab label="Events" value='/events' component={Link} href='/events' sx={{fontSize:'16px' }}/>
                    </Tabs>
                </>
            )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>  
  );
};

export default Navbar;