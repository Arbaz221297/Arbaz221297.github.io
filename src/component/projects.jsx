import { Box ,Heading,Image, Text,Flex} from "@chakra-ui/react"
import styles from "./projects.css"
import githublogo from '../img/githublogo.jpeg'
import linklogo from '../img/linklogo.png'
import expressClone from '../img/expressClone.png'
import trivagoClone from '../img/trivagoClone.png'
import mrchefClone from '../img/mrchefClone.png'
import portfoilo from '../img/portfolio.png'
const Projects =()=>{
    return <>
    <Box id="projects"  bgColor="#011029" >
    <br />
    
     <Heading size='2xl' marginTop="60px" marginBottom="50px" color="#79d392">Projects</Heading>
     <Flex flexWrap="wrap" className="body1">
   <Box  className="container" > 
      <Box className="project-card">
        <Box className="imgBx"> 
        <Image src={expressClone}/>
        </Box>
        <Box className="content">
        <Heading className="project-title" fontSize="27px">Express.com-Clone</Heading>
       
            <Text className="project-description" marginTop="15px" fontWeight="100" fontSize="20px" >Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</Text>
            <Flex padding="5px"> <Text  className="project-tech-stack" width="150px"fontSize="18px" fontWeight="500" color="red">TECH STACK : </Text> <Text fontWeight="500" fontSize="18px">HTML, CSS, JavaScript, Local Storage
</Text></Flex>
         
           <Flex marginTop="5px" justifyContent="space-evenly" >
           <a href="https://github.com/muskanthapa2000/EXPRESSCLONE" target="_blank">
        <Image className="project-github-link" w="35px" src={githublogo}/></a>
        <a href="https://express-clone-ecomm-site.netlify.app/" target="_blank" >
        <Image className="project-deployed-link" w="35px" src={linklogo}/></a>

           </Flex> 
          
           
           
        </Box>
      </Box> 
   </Box>
   <Box className="container"> 
      <Box className="project-card" >
        <Box className="imgBx"> 
        <Image src={trivagoClone}/>
        </Box>
        <Box className="content">
            <Heading className="project-title" fontSize="27px">Trivago.com-Clone</Heading>
            <Text className="project-description" marginTop="15px" fontWeight="100" fontSize="20px">trivago is a leading global hotel search platform focused on reshaping the way travelers search for and compare hotels and alternative accommodations.</Text>
            <Flex padding="5px"> <Text  className="project-tech-stack" width="150px"fontSize="18px" fontWeight="500" color="red">TECH STACK : </Text> <Text fontWeight="500" fontSize="18px">HTML, CSS, JavaScript, JSON Server
</Text></Flex>
           <Flex marginTop="20px" justifyContent="space-evenly" >
           <a href="https://github.com/Mahima29Jaiswal/TrivagoProject" target="_blank" >
        <Image className="project-github-link" w="35px" src={githublogo}/></a>
        <a href="https://rainbow-capybara-f5a19f.netlify.app/" target="_blank" >
        <Image className="project-deployed-link" w="35px" src={linklogo}/></a>

           </Flex>
        </Box>
      </Box> 
   </Box>


   <Box className="container"> 
      <Box className="project-card" >
        <Box className="imgBx"> 
<Image w="10px" src={mrchefClone}/>
        </Box>
        <Box className="content">
        <Heading className="project-title" fontSize="27px">MrChef.com-Clone</Heading>
        <Text className="project-description" marginTop="15px" fontWeight="100" fontSize="20px">Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</Text>
        <Flex padding="5px"> <Text  className="project-tech-stack" width="150px"fontSize="18px" fontWeight="500" color="red">TECH STACK : </Text> <Text fontWeight="500" fontSize="18px">ReactJS, CSS ,Chakra UI , JSON Server
</Text></Flex>
           
           <Flex marginTop="20px" justifyContent="space-evenly" >
           <a href="https://github.com/Sunil-JJ/mrchefproject" target="_blank" >
        <Image className="project-github-link" w="35px" src={githublogo}/></a>
        <a href="https://mr-chef-two.vercel.app/" target="_blank" >
        <Image className="project-deployed-link" w="35px" src={linklogo}/></a>

           </Flex>
        </Box>
      </Box> 
   </Box>





   


   <Box className="container"> 
      <Box className="project-card" >
        <Box className="imgBx"> 
        <Image src={portfoilo}/>
        </Box>
        <Box className="content">
            <Heading className="project-title" fontSize="27px">My-Portfolio</Heading>
            <Text className="project-description" marginTop="15px" fontWeight="100" fontSize="20px">Portfolio website to let the users know about the developer.This portfolio will gives you a brief and yet descriptive insights about the owner. </Text>
            <Flex padding="5px"> <Text  className="project-tech-stack" width="150px"fontSize="18px" fontWeight="500" color="red">TECH STACK : </Text> <Text fontWeight="500" fontSize="18px">React, CSS, Chakra UI
</Text></Flex>
           <Flex marginTop="20px" justifyContent="space-evenly" >
           <a href="https://github.com/Arbaz221297/Arbaz221297.github.io" target="_blank" >
        <Image className="project-github-link" w="35px" src={githublogo}/></a>
        <a href="https://arbaz221297.github.io/" target="_blank" >
        <Image className="project-deployed-link" w="35px" src={linklogo}/></a>

           </Flex>
        </Box>
      </Box> 
   </Box>


   {/* dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}
   </Flex>
   {/* <img src="https://github-readme-streak-stats.herokuapp.com/?user=skabusaeed1" class="spinner"/> */}

    </Box>
    </>
}


export {Projects}