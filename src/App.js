import logo from './logo.svg';
import './App.css';
import { Homepage } from './component/Homepage';
import { ChakraProvider } from '@chakra-ui/react'
import {About}  from "./component/about"
import { Contact } from './component/contact';
import { Skills } from './component/skills';
import { Projects } from './component/projects';
import { Githubcal } from './component/github';

import { Navbar } from './component/navbar';
import React, { useRef } from 'react';

function App() {
  const homeref = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsref = useRef(null);
    const contactRef = useRef(null);
  return (
    <ChakraProvider>

    <div className="App" bgColor="#011029">
      
        
    <Navbar homeref={homeref} aboutRef={aboutRef} skillsRef={skillsRef} projectsref={projectsref} contactRef={contactRef}/>
    <section ref={homeref}></section>
         <Homepage/>
         <section ref={aboutRef}></section>
          <About/>
          <section ref={skillsRef}></section>
          <Skills/>
          <section ref={projectsref}></section>
          <Projects/>
          <section ref={contactRef}></section>
          <Contact/>
         
    
     
     
     
     
     
    </div>
    </ChakraProvider>
  );
}

export default App;
