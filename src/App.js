import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "../src/Components/About";
import Contact from "../src/Components/Contact";
import Projects from "../src/Components/Projects";
import Skills from "../src/Components/Skills";
import Navbar from '../src/Components/Navbar';
import Experience from '../src/Components/Experience';
import Certification from './Components/Certifications';
import Footer from './Components/Footer';
import Home from './Components/Home';


function App() {
  return (
    
    <Router > 
   
      <Navbar/>

        <Routes basename="/">  
          <Route path="/" element={<Home/>}  />
          <Route path="/home" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="skills" element={<Skills/>} />
          <Route path="experience" element={<Experience/>} />
          <Route path="certifications" element={<Certification/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>

      <Footer/>

    </Router>
    
  
  );
}

export default App;
