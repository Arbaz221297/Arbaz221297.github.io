import { Box, Center, Flex, Heading, Text,Image } from "@chakra-ui/react"
import myphoto from '../img/myphoto.png'
import {CheckCircleIcon} from  '@chakra-ui/icons'
import "./about.css"
const About =()=>{

    
    return <>
    
    <Box id="about" className="about section" bgColor="#011029">
    <br />
    <br />
    
    <Heading  marginBottom="5"size='2xl' color="#79d392">About Me</Heading>
    {/* <hr /> */}
   <Center>
    
      <Box marginTop="60px"  width="90%">
    <Flex className="flexBox" >
        <Box width="40%"   margin="auto">
            <Image className="home-img" src={myphoto} margin=" 0px auto"width="300px" border="5px solid white" borderRadius="50%"/>
        </Box>


        <Box className="tarif" align="left" margin="auto">
         <Text  fontSize="22px" fontWeight="hairline"  color="white"><CheckCircleIcon color="#ffd55a"/> Hi, I'm Arbaz Shaikh an aspiring and determined Full Stack Web Developer, curious to explore different industry-standard tech stacks and environments such as React, NodeJS, ExpressJS,MongoDB.</Text>
         <Text id="user-detail-intro" fontSize="22px" fontWeight="hairline"  color="white"><CheckCircleIcon color="#ffd55a"/>  I built 4 major projects and 10+ mini projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an opportunity as a full Stack web Developer.</Text>
           
        </Box>
    </Flex>
   </Box>
   </Center> 
    </Box>
    
    </>
}


export {About}