import { Box, Center, Flex, Heading, Text,Image, Grid,GridItem, Button } from "@chakra-ui/react"
import myphoto from '../img/myphoto.png'
import htmllogo from '../img/htmllogo.jpg'
import csslogo from '../img/csslogo.png'
import javalogo from '../img/javalogo.png'
import javascriptlogo from '../img/javascriptlogo.png'
import reactlogo from '../img/reactlogo.png'
import reduxlogo from '../img/reduxlogo.png'
import chakrauilogo from '../img/chakrauilogo.png'
import mongodblogo from '../img/mongodblogo.webp'
import mongooselogo from '../img/mongooselogo.png'
import expresslogo from '../img/expresslogo.jpg'
import nodejslogo from '../img/nodejslogo.png'

import npmlogo from '../img/npmlogo.png'
import githublogo from '../img/githublogo.jpeg'
import {CheckCircleIcon} from  '@chakra-ui/icons'
import "./skills.css"

let store=[
    {img:htmllogo,name:"HTML"},
    {img:csslogo,name:"CSS"},
    {img:javascriptlogo,name:"JavaScript"},
    {img:reactlogo,name:"React"},
    {img:nodejslogo,name:"NodeJS"},
    {img:mongodblogo,name:"MongoDB"},
    {img:expresslogo,name:"ExpressJS"},
    {img:mongooselogo,name:"Mongoose"},
    {img:reduxlogo,name:"Redux"},
    {img:chakrauilogo,name:"Chakra UI"},
    {img:javalogo,name:"Java"},
    {img:npmlogo,name:"NPM"},
    {img:githublogo,name:"GitHub"},

]







const Skills =()=>{
    return <>
    
    <Box id="skills"  bgColor="#011029">
    <br />
    <br />
    <Heading size='2xl' marginTop="60px" color="#79d392">My Technical Skills</Heading>
   <Center>
      <Box marginTop="60px" width="90%"  >
        <Center>
    <Flex className="flexBox1" justify="space-around"  flexWrap="wrap" borderTopLeftRadius="50"  borderBottomRightRadius="50" >
    
   
    {store.map((ele)=>(
        

<Box  className="skills-card" border="1px solid #4d6182" w='200px' h="140" _hover={{ marginTop:"-10px",boxShadow:" rgba(255, 255, 255, 0.09) 0px 30px 20px, rgba(255, 255, 255, 0.09) 0px -12px 20px, rgba(255, 255, 255, 0.09) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px;" , transition:"0.05s" ,bgColor:"#1d2d47", scale:0.55}}  bgColor="#102342"  borderRadius="20"  >

    <Box h="110" padding="10px" justify="center"><Image  className="skills-card-img" width="50%" margin ="auto" src={ele.img}/></Box>
   
<Heading className="skills-card-name" color="white"  fontSize="xl">{ele.name}</Heading>
</Box>
        )
        
         

    )}

    
    
    
     
    
    
    
   
  
    </Flex>
    
    </Center>
   </Box>
   </Center>
    </Box>
    
    </>
}


export {Skills}