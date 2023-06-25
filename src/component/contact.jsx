import { Box, Button, Center, Flex, Heading,Image } from "@chakra-ui/react"
import locationlogo from '../img/locationlogo.webp'
import emaillogo from '../img/emaillogo.png'
import phonelogo from '../img/phonelogo.avif'
import linkedinlogo from "../img/linkedinlogo.png"

import githublogo from "../img/githublogo.jpeg"
const Contact =()=>{
    return <>
    
    <Box id="contact" bgColor="#011029">

    <Heading size='2xl' marginBottom={10} paddingTop={10} color="#79d392">Feel Free to connect with me</Heading>
    <Center>
     <Box marginBottom={180}> 
       
        <Flex marginTop={5}><Image w={5} h={6} src={locationlogo} marginRight={5}/> <Heading fontWeight={100} size = "md"color="white">Satara, Maharashtra</Heading></Flex>
        <Flex marginTop={5}><Image w={5} h={6} src={emaillogo} marginRight={5}/><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank"> <Heading id="contact-email" fontWeight={100} size = "md"color="white">arbazshaikh221297@gmail.com</Heading></a></Flex>
        <Flex marginTop={5}><Image w={5} h={6} src={phonelogo} marginRight={5}/> <Heading id="contact-phone" fontWeight={100} size = "md"color="white">8806070334</Heading></Flex>
        <Flex justify="space-around" marginTop={5}>
        <a href="https://www.linkedin.com/in/arbaz-shaikh-889337173/" target="_blank"><Button id="contact-linkedin" position="1" bgColor="white" color="black" marginTop="10px" padding="12px" _hover={{bgColor:"#79f099"}} variant='outline'><Image h="20px" src={linkedinlogo}></Image>LinkedIn</Button></a>
           <a href="https://github.com/Arbaz221297" target="_blank"> <Button id="contact-github" position="1" bgColor="white" color="black" marginTop="10px" padding="12px" _hover={{bgColor:"#79f099"}} variant='outline'><Image h="20px" src={githublogo}></Image>GitHub</Button></a>

        </Flex>
        
     </Box></Center>
    </Box>
    </>
}


export {Contact}