import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import {pages} from '../../data/NavbarData'

const DrawerComp = () => {

  const [activepage,setActivepage] = useState(null)
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleListItemClick = (index) =>{
    setActivepage(index);
    setOpenDrawer(false)
  }

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton 
              key={index}
              onClick={()=>{
                handleListItemClick(index);
              }}
              selected = {index === activepage}
              component = {Link} 
              href={page.link}
            >
              <ListItemText primary={page.Name} sx={{color : index === activepage ? 'red' : 'black' }}/>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <RiMenu3Line color='white' aria-label="menuButton"/>
      </IconButton>
    </>
  );
};

export default DrawerComp;