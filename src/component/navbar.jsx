import { Box, Button, ButtonGroup, Center, Flex, Heading, Spacer,Image, Grid } from "@chakra-ui/react"
import {DownloadIcon} from  '@chakra-ui/icons'
import { Container,  Link, IconButton, useDisclosure, VStack,Divider} from "@chakra-ui/react";
import React, { useRef } from 'react';
import { Link as ScrollLink } from "react-scroll";
import Arbaz from "./download/Arbaz_Shaikh_Resume.pdf"
import "./navbar.css"
import {  HamburgerIcon } from "@chakra-ui/icons";
const Navbar =({homeref,aboutRef,skillsRef,projectsref,contactRef})=>{
    // const homeref = useRef(null);
    // const aboutRef = useRef(null);
    // const skillsRef = useRef(null);
    // const projectsref = useRef(null);
    // const contactRef = useRef(null);
    const { getDisclosureProps, getButtonProps } = useDisclosure();
    const buttonProps = getButtonProps();
    const disclosureProps = getDisclosureProps();
    
    const scrollToComponent = (ref) => {
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleclick = (event) => {
        event.preventDefault();
        window.open(
          "https://drive.google.com/file/d/1dL1jyA8mhY64Gn_PWmEwsyhB3x5ScLoG/view?usp=sharing",
          "_blank"
        );
        let link = document.createElement("a");
        link.href =
          "https://drive.google.com/uc?export=download&id=1dL1jyA8mhY64Gn_PWmEwsyhB3x5ScLoG";
      
        link.download = "Arbaz-Shaikh-Resume";
        link.click();
        };

        // https://drive.google.com/file/d/1kssfizjn1TMiIspINAPijMKaMuN1eCFS/view?usp=sharing 
  




    return <>
    <Box  id="nav-menu"  padding="20px" bgColor="#011029">
    <Center>
        <Spacer/>
        <Box position="fixed" zIndex="2" height="70px"className="bxn"  width ="100%" opacity="0.90"  bgColor="#011029"  paddingRight="30px" paddingTop="10px" paddingBottom="10px" border="2px solid #2d2d2b" >
    <Flex className="flexbx" >
   
    <Box   >
        
    </Box>
    <Spacer/>
    
    <ButtonGroup marginTop="10px" className="btngrp" display={["none", "none", "none", "flex", "flex"]}  >
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

  
      
   <Box  zIndex="2" opacity="0.99" bgColor="#011029" position="fixed" borderRadius={"10px"}>
        <Flex>
        <Box>
          <IconButton
          float="left"
          variant="solid"
          colorScheme="white"
          color="green"
          border={"none"}
        bgColor="white"
          {...buttonProps}
          display={["flex", "flex", "flex", "none", "none"]}
          marginTop="-15px"
          size="lg"
          height="40px"
          // width="50px"
          opacity="0.8"
         
          
        >
          <HamburgerIcon zIndex="2" />
        </IconButton>

       
        </Box>
        
        </Flex>
        <VStack
          marginTop="40px"
          {...disclosureProps}
          // bg="brand_secondary"
          fontSize={"1.5rem"}
          // w={"300px"}
          padding="5px"
          textAlign={"center"}
          borderRadius="10px"
          border={"1px solid white"}
          display={["flex", "flex", "flex", "none", "none"]}
        >

<Button size='lg' className="nav-link home"_hover={{bgColor:"#0e2d2a"}} colorScheme='whiteAlpha' color="#79d392" variant="ghost"  onClick={() => scrollToComponent(homeref)}>Home</Button>
     <Button size='lg' className="nav-link about" _hover={{bgColor:"#0e2d2a"}} colorScheme="teal" color="#79d392"  variant="ghost" onClick={() => scrollToComponent(aboutRef)} >About Me</Button>
     <Button size='lg'className="nav-link skills" _hover={{bgColor:"#0e2d2a"}} colorScheme="teal" color="#79d392" variant="ghost"  onClick={() => scrollToComponent(skillsRef)}>Skills</Button>
      <Button size='lg' className="nav-link projects" _hover={{bgColor:"#0e2d2a"}} colorScheme="teal" color="#79d392" variant="ghost" onClick={() => scrollToComponent(projectsref)} >Projects</Button>
      <Button size='lg' className="nav-link contact" _hover={{bgColor:"#0e2d2a"}} colorScheme="teal" color="#79d392" variant="ghost" onClick={() => scrollToComponent(contactRef)} >Contact</Button>
        {/* <a target="_blank"  href="https://drive.google.com/file/d/1kssfizjn1TMiIspINAPijMKaMuN1eCFS/view?usp=sharing" download > */}
          <Button id="resume-button-1" onClick={handleclick}  className="nav-link resume" size='sm' _hover={{bgColor:"#79f099"}}marginTop="5px"   leftIcon={<DownloadIcon />} >Resume</Button>
          {/* </a> */}
         
              
            
           
          
            
           
          </VStack>
     
   </Box>
   </Box>

   
   
    </>
}


export {Navbar}