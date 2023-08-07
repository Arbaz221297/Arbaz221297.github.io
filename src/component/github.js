import { Box, Flex, Heading, Image, LightMode } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar"

import  "./github-calendar-theme.css";
const Githubcal =()=>{
  const colourTheme = {   
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  }
    
  
    return <>
   
    
     <Box bgColor="#011029" >
     <Heading data-aos="fade-up"  size='2xl' color="#79d392" marginBottom={70}>My GitHub Calendar</Heading>
     <Box padding={"2%"} className="react-activity-calendar" >
    <Box className="calendar" data-aos="fade-ip" data-aos-duration="1000">
         {/* Loading stuff */}
         {/* <img  src="https://ghchart.rshah.org/skabusaeed1" alt="abusaeed's Github chart"/> */}
         <GitHubCalendar 
        username="arbaz221297"
        blockSize={20}
        blockMargin={1}
        colorScheme="light"
        blockRadius={10}
        margin="30px"
      //  className="github-calendar"
        style={{margin :"auto",color:"gray", width:"100%"}}
      />
       </Box>
       </Box>
      <Box width="80%"  data-aos="fade-up" data-aos-duration="1000" margin="auto"> <Flex  justify="space-around" flexWrap="wrap">
      <Image  id="github-streak-stats" margin="20px auto" width="500" fill="100%"  src="https://github-readme-streak-stats.herokuapp.com/?user=Arbaz221297&hide_border=true"/>
      <Image id="github-stats-card"  margin="20px auto" width="500" fill="100%"  src="https://github-readme-stats.vercel.app/api?username=arbaz221297&hide_border=true&include_all_commits=false&count_private=false"/>
      <Image id="github-top-langs"   width="500" fill="100%"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=arbaz221297&hide_border=true&include_all_commits=false&count_private=false&layout=compact"/>
      </Flex></Box >
</Box>
    {/* </Row> */}
    
    </>
}


export {Githubcal}