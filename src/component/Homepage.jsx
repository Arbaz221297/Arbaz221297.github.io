import { Box, Button, ButtonGroup, Center, Flex, Heading, Spacer,Image, Grid } from "@chakra-ui/react"
import Typewriter from "typewriter-effect";




import {DownloadIcon} from  '@chakra-ui/icons'

import img1 from '../img/img1.png'
import { IconButton } from '@chakra-ui/react'
import { color } from "framer-motion";
import "./home.css"

const Homepage=()=>{
    return <>
    
    <Box  id="home" padding="20px" bgColor="#011029">
        
 
   <Box color="white" width="100%" marginTop="150px"> <Flex padding="20px">
 
    <Box width="50%" margin="auto"  >
    <Heading fontSize='23px' fontWeight="400">Welcome to my portfoilo! </Heading>
        <Heading id="user-detail-name" fontSize='35px'>Hi , I am Arbaz Shaikh </Heading>
        
    <Heading  fontSize='23px'fontWeight="200">A passionate </Heading>
<Box   style={{fontSize: "20px",fontWeight:700, marginLeft:"10px", color :"#ffd55a"}}>
<Typewriter 
  options={{
    strings: [" Full Stack Web Developer"],
    autoStart: true,
    loop: true,
  }}
/>



</Box>
<Heading id="user-detail-intro" fontSize='23px' fontWeight="200">who focus on writing clean and user friendly applications </Heading>
<a href="https://drive.google.com/file/d/1kssfizjn1TMiIspINAPijMKaMuN1eCFS/view?usp=sharing" target="_blank">
<Button position="1" bgColor="#79f099" color="black" marginTop="10px" leftIcon={<DownloadIcon />} padding="12px" colorScheme='teal' variant='outline'>Resume</Button>
</a>
    </Box>
    

    {/* <Box style={{width:"20%"}}></Box> */}


    <Box   className="codingimg" w="50%">
    <Center>        
        <Image margin="auto 30%" width="100%" src={img1}/>
   
    {/* https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGimJqKDEOHVVANYcmfIR62pF4Ojf_6arahLN9pfgJvi33kLMh */}
        </Center>

    </Box>
    
    </Flex>
   
   </Box>
  
   
  
   </Box>
    </>
}

export {Homepage}