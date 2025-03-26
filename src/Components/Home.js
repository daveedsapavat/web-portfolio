import React, { useEffect } from 'react';
import './Home.css';
import profilePic from '../assets/profile.jpg'; // Ensure profile picture is in the correct path
import { Link,  } from 'react-router-dom';


function Home() {

  useEffect(() => {
    console.log("Home component mounted!");
  }, []);


  return (
    <section id="home" className="home-section">
      {/* Interstellar Background */}
      <div className="interstellar-background"></div>

      {/* Profile and Intro */}
      <div className="home-content">
        <img src={profilePic} alt="Profile" className="home-profile-pic" />
        <h1 className="home-title">Hi, I'm Daveed Sapavat</h1>
        <p className="home-subtitle">Full Stack Developer | Tech Enthusiast | Dreamer</p>
        <a href="Projects" className="explore-btn">Explore My Work</a>
      </div>
    </section>
  );
}

export default Home;
