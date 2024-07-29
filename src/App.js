import React from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import './App.css';
import Techs from './tech/Techs';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './ContactMe/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
   <>
   <Navbar />
   <div className='container'>
    <Hero />
    <About />
    <Techs />
    <Projects />
    <Contact />
    <Footer />
   </div>

   {/* <Navbar/>
   <Outlet/>
   <Footer/> */}

   </>
  );
}
export default App;
