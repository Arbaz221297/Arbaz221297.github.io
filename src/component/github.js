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
     <Heading size='2xl' color="#79d392" marginBottom={70}>My GitHub Calendar</Heading>
      <Box className="react-activity-calendar"  bgColor= "rgb(250, 250, 250)" width="80%" borderRadius={20} padding="20px" margin="auto">
      <GitHubCalendar 
        username="Arbaz221297"
        blockSize={20}
        blockMargin={1}
        colorScheme="light"
        blockRadius={10}
        margin="30px"
      //  className="github-calendar"
        // fontSize={20}
        style={{margin :"auto",color:"gray", width:"100%"}}
      />
      </Box >
      <Box width="80%" margin="auto"> <Flex  justify="space-around" flexWrap="wrap">
      <Image  id="github-streak-stats" margin="20px auto" width="500" fill="100%"  src="https://github-readme-streak-stats.herokuapp.com/?user=Arbaz221297"/>
      <Image id="github-stats-card" margin="20px auto" width="500" fill="100%"  src="https://github-readme-stats.vercel.app/api?username=Arbaz221297&show_icons=true"/>
      <Image id="github-top-langs"   margin="20px auto " width="500" fill="100%"  src="https://github-readme-stats.vercel.app/api/top-langs?username=Arbaz221297&show_icons=true&locale=en&layout=compact"/>
      </Flex></Box >
</Box>
    {/* </Row> */}
    
    </>
}


export {Githubcal}