import { Box, Button, ButtonGroup, Center, Flex, Heading, Spacer,Image, Grid } from "@chakra-ui/react"
import {DownloadIcon} from  '@chakra-ui/icons'
import React, { useRef } from 'react';
import Arbaz from "./download/Arbaz_Shaikh_Resume.pdf"
import "./navbar.css"
const Navbar =({homeref,aboutRef,skillsRef,projectsref,contactRef})=>{
    // const homeref = useRef(null);
    // const aboutRef = useRef(null);
    // const skillsRef = useRef(null);
    // const projectsref = useRef(null);
    // const contactRef = useRef(null);
    const scrollToComponent = (ref) => {
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleclick = (event) => {
        event.preventDefault();
        window.open(
          "https://drive.google.com/file/d/1kssfizjn1TMiIspINAPijMKaMuN1eCFS/view?usp=sharing",
          "_blank"
        );
        let link = document.createElement("a");
        link.href =
          "https://drive.google.com/uc?export=download&id=1kssfizjn1TMiIspINAPijMKaMuN1eCFS";
      
        link.download = "Arbaz-Shaikh-Resume";
        link.click();
        };

        https://drive.google.com/file/d/1kssfizjn1TMiIspINAPijMKaMuN1eCFS/view?usp=sharing
  




    return <>
    <Box  id="nav-menu" padding="20px" bgColor="#011029">
    <Center>
        <Spacer/>
        <Box position="fixed"  className="bxn"  width ="100%" opacity="0.90"  bgColor="#011029"  paddingRight="30px" paddingTop="10px" paddingBottom="10px" marginTop="30px" border="2px solid #2d2d2b" >
    <Flex className="flexbx" >
   
    <Box   >
        
    </Box>
    <Spacer/>
    
    <ButtonGroup className="btngrp"   >
      <Button size='lg' className="nav-link home"_hover={{bgColor:"#0e2d2a"}} colorScheme='whiteAlpha' color="#79d392" variant="ghost"  onClick={() => scrollToComponent(homeref)}>Home</Button>
     <Button size='lg' className="nav-link about" _hover={{bgColor:"#0e2d2a"}} colorScheme="teal" color="#79d392"  variant="ghost" onClick={() => scrollToComponent(aboutRef)} >About Me</Button>
     <Button size='lg'className="nav-link skills" _hover={{bgColor:"#0e2d2a"}} colorScheme="teal" color="#79d392" variant="ghost"  onClick={() => scrollToComponent(skillsRef)}>Skills</Button>
      <Button size='lg' className="nav-link projects" _hover={{bgColor:"#0e2d2a"}} colorScheme="teal" color="#79d392" variant="ghost" onClick={() => scrollToComponent(projectsref)} >Projects</Button>
      <Button size='lg' className="nav-link contact" _hover={{bgColor:"#0e2d2a"}} colorScheme="teal" color="#79d392" variant="ghost" onClick={() => scrollToComponent(contactRef)} >Contact</Button>
        {/* <a target="_blank"  href="https://drive.google.com/file/d/1kssfizjn1TMiIspINAPijMKaMuN1eCFS/view?usp=sharing" download > */}
          <Button id="resume-button-1" onClick={handleclick}  className="nav-link resume" size='sm' _hover={{bgColor:"#79f099"}}marginTop="5px"   leftIcon={<DownloadIcon />} >Resume</Button>
          {/* </a> */}
    </ButtonGroup>
    
    
   </Flex>
   {/* <hr marginTop="10px"/>    */}

   </Box>
   </Center>
   </Box>
   
    </>
}


export {Navbar}