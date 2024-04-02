import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import ResumePage from '../components/ResumePage';


const Resume = () => {
  return <div>
  <Navbar/>
  <HeroImg2 heading="RESUME." text="Want to know more about me? Check my resume below."/>
  <ResumePage/>
  <Footer/>
  
</div>;

};

export default Resume;
